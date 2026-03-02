<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function show($slug)
    {
        // Diccionario de servicios con la data técnica
        $services = [
            'consultoria-estrategica' => [
                'title' => 'Consultoría Estratégica',
                'tag' => 'INTELIGENCIA',
                'desc' => 'Optimización de procesos operativos mediante análisis de datos complejos e ingeniería industrial.',
                'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
                'features' => ['Análisis de Procesos', 'Optimización de Recursos', 'Gestión de Proyectos', 'KPIs Industriales']
            ],
            'credenciales' => [
                'title' => 'Credenciales',
                'tag' => 'CREDENCIALES',
                'desc' => 'Sistemas de identificación avanzada con tecnología NFC y biometría para entornos mineros y corporativos.',
                'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470',
                'features' => ['Chips NFC/RFID', 'Lectura Biométrica', 'Diseño Anti-falsificación', 'Gestión de Usuarios']
            ],
            'merchandising' => [
                'title' => 'Merchandising',
                'tag' => 'FABRICACION',
                'desc' => 'Desarrollo de artículos corporativos mediante manufactura aditiva y grabado láser de alta precisión.',
                'image' => 'https://images.unsplash.com/photo-1656360088907-5109c245851d?q=80&w=1635',
                'features' => ['Impresión 3D Pro', 'Grabado Fibra Óptica', 'Diseño Personalizado', 'Materiales Industriales']
            ],
            'soporte-tecnico' => [
                'title' => 'Soporte Técnico',
                'tag' => 'MANTENIMIENTO',
                'desc' => 'Gestión de mantenimiento preventivo y correctivo de hardware con protocolos de respuesta inmediata.',
                'image' => 'https://plus.unsplash.com/premium_photo-1661657610740-7d27accfe43c?q=80&w=1169',
                'features' => ['SLA de Respuesta', 'Hardware Crítico', 'Preventivo Programado', 'Remoto y Terreno']
            ],
            'seguridad' => [
                'title' => 'Seguridad CCTV',
                'tag' => 'VIGILANCIA',
                'desc' => 'Infraestructura de videovigilancia inteligente con detección de patrones y monitoreo centralizado.',
                'image' => 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070',
                'features' => ['IA de Reconocimiento', 'Centralización de Nodos', 'Alertas en Tiempo Real', 'Grabación Segura']
            ],
            'telecomunicaciones' => [
                'title' => 'Telecomunicaciones',
                'tag' => 'NETWORK',
                'desc' => 'Despliegue de enlaces de alta capacidad y conectividad robusta para operaciones en zonas remotas.',
                'image' => 'https://plus.unsplash.com/premium_photo-1683134474265-7bf3848ffbd9?q=80&w=1170',
                'features' => ['Radio Enlaces', 'Fibra Óptica', 'Redes Mesh', 'Monitoreo de Tráfico']
            ],
            'ciberseguridad' => [
                'title' => 'Ciberseguridad',
                'tag' => 'SEGURIDAD',
                'desc' => 'Protección perimetral de redes y blindaje de bases de datos contra intrusiones externas y ataques dirigidos.',
                'image' => 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070',
                'features' => ['Pentesting', 'Firewalls Avanzados', 'Encriptación AES-256', 'Auditoría de Sistemas']
            ],
        ];

        // Verificamos que el servicio exista, sino lanzamos 404
        if (!isset($services[$slug])) {
            abort(404);
        }

        // Retornamos la vista de React mediante Inertia con los datos del servicio
        return Inertia::render('Services/ServiceDetail', [
            'service' => $services[$slug]
        ]);
    }
}
