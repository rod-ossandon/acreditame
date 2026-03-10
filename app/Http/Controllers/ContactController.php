<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Resend\Laravel\Facades\Resend;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email',
            'services' => 'required|array|min:1',
            'message'  => 'required|string|min:10',
        ]);

        // --- SISTEMA DE CODIFICACIÓN INTELIGENTE ---
        $mapping = [
            "Credenciales ID"      => "CRED",
            "Soporte Técnico"      => "SUPP",
            "Seguridad Industrial" => "SAFE",
            "Consultoría"          => "CONS",
            "Ciberseguridad"       => "CYBR",
            "Telecomunicaciones"   => "TELC"
        ];

        // Obtenemos el prefijo del primer servicio seleccionado o 'GENR' por defecto
        $mainService = $validated['services'][0];
        $prefix = $mapping[$mainService] ?? "GENR";

        // Generamos un Ticket ID único: ACR-[CÓDIGO]-[HORA/MINUTO]-[RANDOM]
        $ticketId = "ACR-" . $prefix . "-" . date('Hi') . "-" . strtoupper(substr(uniqid(), -3));

        try {
            // Formateo de servicios para el HTML
            $serviciosHtml = '';
            foreach ($validated['services'] as $svc) {
                $serviciosHtml .= "<span style='background:#f1f5f9; color:#475569; border:1px solid #e2e8f0; padding:2px 8px; border-radius:3px; margin-right:5px; font-size:10px; font-family:sans-serif;'>$svc</span>";
            }

            Resend::emails()->send([
                'from'    => 'Acreditame Sistema <onboarding@resend.dev>',
                'to'      => ['dreaamog@gmail.com'],
                'subject' => "[$ticketId] NUEVO REQUERIMIENTO: " . strtoupper($validated['name']),
                'html'    => "
    <html>
    <head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap');
            .font-goldman { font-family: 'Goldman', sans-serif !important; }
            .font-sans { font-family: 'Inter', -apple-system, sans-serif; }
        </style>
    </head>
    <body style='background-color: #f8fafc; padding: 40px 10px; margin: 0;'>
        <div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03);'>

            <div style='background-color: #0f172a; padding: 25px 35px;'>
                <table width='100%' border='0' cellpadding='0' cellspacing='0'>
                    <tr>
                        <td>
                            <h1 class='font-goldman' style='margin: 0; color: #ffffff; font-size: 22px; letter-spacing: 2px;'>
                                ACREDI<span style='color: #eab308;'>TAME</span>
                            </h1>
                        </td>
                        <td align='right'>
                            <span class='font-goldman' style='background: #eab308; color: #000000; padding: 5px 12px; border-radius: 4px; font-size: 10px; font-weight: bold; letter-spacing: 1px;'>
                                $ticketId
                            </span>
                        </td>
                    </tr>
                </table>
            </div>

            <div style='padding: 45px;' class='font-sans'>

                <div style='margin-bottom: 40px;'>
                    <h2 class='font-goldman' style='color: #0f172a; font-size: 18px; margin: 0; letter-spacing: 1px;'>FICHA DE REQUERIMIENTO</h2>
                    <p style='color: #64748b; font-size: 11px; margin: 5px 0 0 0; text-transform: uppercase;'>Categoría: <span style='color: #eab308; font-weight: bold;'>$mainService</span></p>
                </div>

                <div style='display: block; margin-bottom: 35px; border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; padding: 20px 0;'>
                    <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                        <tr>
                            <td style='padding-bottom: 20px;'>
                                <div class='font-goldman' style='color: #94a3b8; font-size: 9px; letter-spacing: 2px; margin-bottom: 5px;'>// AGENTE_REGISTRADO</div>
                                <div style='color: #1e293b; font-size: 15px; font-weight: 600;'>{$validated['name']}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class='font-goldman' style='color: #94a3b8; font-size: 9px; letter-spacing: 2px; margin-bottom: 5px;'>// CANAL_COMUNICACIÓN</div>
                                <div style='color: #1e293b; font-size: 15px;'><a href='mailto:{$validated['email']}' style='color: #0f172a; text-decoration: none; border-bottom: 1px solid #eab308;'>{$validated['email']}</a></div>
                            </td>
                        </tr>
                    </table>
                </div>

                <div style='margin-bottom: 35px;'>
                    <div class='font-goldman' style='color: #94a3b8; font-size: 9px; letter-spacing: 2px; margin-bottom: 15px;'>// SERVICIOS_DETALLE</div>
                    <div style='display: flex; flex-wrap: wrap;'>$serviciosHtml</div>
                </div>

                <div style='background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 25px; border-radius: 6px; border-left: 4px solid #eab308;'>
                    <span class='font-goldman' style='display: block; color: #94a3b8; font-size: 9px; font-weight: bold; margin-bottom: 15px; letter-spacing: 1px;'>// COMENTARIOS_PROYECTO:</span>
                    <p style='margin: 0; color: #334155; font-size: 14px; line-height: 1.8; font-style: italic;'>
                        \"" . nl2br(e($validated['message'])) . "\"
                    </p>
                </div>

                <div style='margin-top: 45px; text-align: center;'>
                    <a href='mailto:{$validated['email']}?subject=Re: $ticketId - Acreditame' class='font-goldman'
                       style='background-color: #eab308; color: #000000; padding: 18px 45px; border-radius: 4px; text-decoration: none; font-weight: bold; font-size: 11px; letter-spacing: 2px; display: inline-block; box-shadow: 0 4px 10px rgba(234, 179, 8, 0.25);'>
                        RESPONDER
                    </a>
                </div>
            </div>

            <div style='background-color: #f8fafc; padding: 25px; text-align: center; border-top: 1px solid #e2e8f0;'>
                <p class='font-goldman' style='margin: 0; color: #cbd5e1; font-size: 8px; letter-spacing: 1px;'>
                    SISTEMA ACREDITAME // VALIDACIÓN_ID: " . md5($ticketId) . " // ANTOFAGASTA_CHILE
                </p>
            </div>
        </div>
    </body>
    </html>
    ",
            ]);

            return back()->with('message', 'Correo enviado con éxito.');
        } catch (\Exception $e) {
            Log::error("Fallo Resend: " . $e->getMessage());
            return back()->withErrors(['email' => 'Error técnico en el envío.']);
        }
    }
}
