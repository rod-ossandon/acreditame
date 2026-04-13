<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Resend\Laravel\Facades\Resend;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // 1. VALIDACIÓN (Incluyendo el nuevo campo 'phone')
        $validated = $request->validate([
            'name'          => 'required|string|max:255',
            'email'         => 'required|email',
            'phone'         => 'required|string', // Nuevo campo
            'services'      => 'required|array|min:1',
            'message'       => 'required|string|min:10',
            'captcha_token' => 'required|string',
        ]);

        // 2. VERIFICACIÓN RECAPTCHA
        $captchaResponse = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret'   => config('services.recaptcha.secret'),
            'response' => $validated['captcha_token'],
            'remoteip' => $request->ip(),
        ]);

        if (!$captchaResponse->json('success')) {
            return back()->withErrors(['captcha_token' => 'Error de seguridad reCAPTCHA.']);
        }

        // 3. GENERACIÓN DE TICKET ID
        $mapping = [
            "Credenciales" => "CRED", "Soporte Técnico" => "SUPP", "Seguridad Industrial" => "SAFE",
            "Consultoría" => "CONS", "Ciberseguridad" => "CYBR", "Telecomunicaciones" => "TELC"
        ];
        $prefix = $mapping[$validated['services'][0]] ?? "GENR";
        $ticketId = "ACR-" . $prefix . "-" . date('is') . "-" . strtoupper(substr(uniqid(), -2));

        try {
            // 4. COMPONENTES VISUALES
            $serviciosHtml = '';
            foreach ($validated['services'] as $svc) {
                $serviciosHtml .= "<span style='background: rgba(234,179,8,0.1); color: #eab308; border: 1px solid #eab308; padding: 4px 12px; border-radius: 20px; margin-right: 8px; font-size: 10px; font-family: monospace; display: inline-block; margin-bottom: 8px;'>$svc</span>";
            }

            // 5. ENVÍO VÍA RESEND
            Resend::emails()->send([
                'from'    => 'Acreditame Sistema <onboarding@resend.dev>',
                'to'      => ['dreaamog@gmail.com'],
                'subject' => "[$ticketId] PROTOCOLO DE REQUERIMIENTO: " . strtoupper($validated['name']),
                'html'    => "
    <!DOCTYPE html>
    <html lang='es'>
    <head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Inter:wght@300;400;700&display=swap');
        </style>
    </head>
    <body style='background-color: #050505; padding: 30px 10px; margin: 0; font-family: \"Inter\", sans-serif;'>
        <div style='max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);'>

            <div style='padding: 30px 40px; border-bottom: 1px solid #1a1a1a; background: linear-gradient(to right, #0a0a0a, #0f0f0f);'>
                <table width='100%' border='0' cellpadding='0' cellspacing='0'>
                    <tr>
                        <td>
                            <h1 style='font-family: \"Goldman\", sans-serif; margin: 0; color: #ffffff; font-size: 20px; letter-spacing: 3px; text-transform: uppercase;'>
                                ACREDI<span style='color: #eab308;'>TAME</span>
                            </h1>
                        </td>
                        <td align='right'>
                            <div style='font-family: monospace; color: #eab308; font-size: 11px; font-weight: bold; letter-spacing: 1px;'>
                                ID: $ticketId
                            </div>
                        </td>
                    </tr>
                </table>
            </div>

            <div style='padding: 40px;'>

                <div style='margin-bottom: 40px;'>
                    <h2 style='font-family: \"Goldman\", sans-serif; color: #ffffff; font-size: 24px; margin: 0; letter-spacing: -1px; text-transform: uppercase;'>
                        Ficha de <span style='color: #eab308; font-style: italic;'>Requerimiento</span>
                    </h2>
                    <p style='color: #444; font-family: monospace; font-size: 10px; margin: 8px 0 0 0; letter-spacing: 2px;'>ORIGEN: FORMULARIO_WEB_V2</p>
                </div>

                <div style='margin-bottom: 40px;'>
                    <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                        <tr>
                            <td style='padding-bottom: 25px;'>
                                <div style='color: #eab308; font-family: monospace; font-size: 9px; font-weight: bold; letter-spacing: 2px; margin-bottom: 8px;'>// [01] AGENTE_NOMBRE</div>
                                <div style='color: #ffffff; font-size: 16px; font-weight: 300;'>{$validated['name']}</div>
                            </td>
                            <td style='padding-bottom: 25px;'>
                                <div style='color: #eab308; font-family: monospace; font-size: 9px; font-weight: bold; letter-spacing: 2px; margin-bottom: 8px;'>// [02] TELÉFONO_LINK</div>
                                <div style='color: #ffffff; font-size: 16px; font-weight: 300;'>{$validated['phone']}</div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan='2'>
                                <div style='color: #eab308; font-family: monospace; font-size: 9px; font-weight: bold; letter-spacing: 2px; margin-bottom: 8px;'>// [03] CANAL_ENLACE</div>
                                <div style='color: #ffffff; font-size: 16px;'><a href='mailto:{$validated['email']}' style='color: #ffffff; text-decoration: none; border-bottom: 1px solid #eab308;'>{$validated['email']}</a></div>
                            </td>
                        </tr>
                    </table>
                </div>

                <div style='margin-bottom: 40px;'>
                    <div style='color: #eab308; font-family: monospace; font-size: 9px; font-weight: bold; letter-spacing: 2px; margin-bottom: 15px;'>// [04] SERVICIOS_SISTEMA</div>
                    <div style='display: block;'>$serviciosHtml</div>
                </div>

                <div style='background-color: #0d0d0d; border: 1px solid #1a1a1a; padding: 30px; border-radius: 16px; position: relative;'>
                    <div style='color: #444; font-family: monospace; font-size: 9px; font-weight: bold; margin-bottom: 15px; letter-spacing: 2px;'>// [05] DATA_MENSAJE:</div>
                    <p style='margin: 0; color: #d1d1d1; font-size: 15px; line-height: 1.6; font-style: italic; font-weight: 300;'>
                        \"" . nl2br(e($validated['message'])) . "\"
                    </p>
                </div>

                <div style='margin-top: 50px; text-align: left;'>
                    <a href='mailto:{$validated['email']}?subject=Respuesta Ticket: $ticketId'
                       style='background-color: #eab308; color: #000000; padding: 18px 40px; border-radius: 12px; text-decoration: none; font-weight: 900; font-size: 11px; letter-spacing: 2px; display: inline-block; font-family: \"Goldman\", sans-serif;'>
                        ABRIR_COMUNICACIÓN
                    </a>
                </div>
            </div>

            <div style='background-color: #080808; padding: 30px; text-align: center; border-top: 1px solid #1a1a1a;'>
                <p style='margin: 0; color: #333; font-family: monospace; font-size: 8px; letter-spacing: 1px;'>
                    ACREDITAME_INDUSTRIAL_NETWORK // Antofagasta, Chile // " . date('Y') . "
                </p>
            </div>
        </div>
    </body>
    </html>
    ",
            ]);

            return back()->with('message', 'Protocolo enviado con éxito.');

        } catch (\Exception $e) {
            Log::error("Fallo Resend: " . $e->getMessage());
            return back()->withErrors(['email' => 'Error en la transmisión.']);
        }
    }
}
