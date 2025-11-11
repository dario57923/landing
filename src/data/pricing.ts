import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Lite',
        price: 1.99,
        features: [
            'Comandos básicos de Wark',
            'Comandos básicos de WarkGuard',
            'Sistema AntiRaid básico',
            'Soporte personalizado 24/7',
        ],
    },
    {
        name: 'Premium',
        price: 6.99,
        features: [
            'Comandos Premium de Wark',
            'Comandos Premium de WarkGuard',
            'Descuentos en próximas compras',
            'Sistema de verificación',
            'Recibe novedades antes que nadie',
            'Soporte personalizado 24/7',
        ],
    },
    {
        name: 'Enterprise',
        price: 18.99,
        features: [
            'Acceso completo a Wark',
            'Acceso completo a WarkGuard',
            'Creación de funciones custom',
            'Sistema AntiRaid custom',
            'Sistema de verificación custom',
            'Recibe novedades antes que nadie',
            'Hasta 5 servidores distintos',
            'Soporte especializado 24/7',
        ],
    },
]
