import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Seguridad y Protección",
        description: "Mantén tu servidor seguro de posibles ataques de bots o raids con WarkGuard.",
        bullets: [
            {
                title: "Detecta el 99.9% de los ataques",
                description: "Automáticamente reporta cada intento de ataque al servidor.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Frena el spam o el mass-ping",
                description: "Configura el servicio para detener el ping masivo o el spam de menciones.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Actualizaciones continuas",
                description: "Nuestro equipo está constantemente actualizando el sistema para eliminar errores.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Sistema de Verificación WarkVerify©",
        description: "Nada mejor para comenzar innovando en tu comunidad que nuestro sistema de seguridad mediante verificación del usuario local.",
        bullets: [
            {
                title: "Controla el acceso a tu servidor",
                description: "Con el sistema Premium de WarkVerify© puedes evitar ataques de bots o spam.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "WarkVerify© para Empresas",
                description: "Con esta avanzada versión puedes incluso personalizar cada mensaje y cada interacción con el usuario.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Rendimiento ultrarápido",
                description: "Nuestra API suele responder en apenas 20ms, asegurando la velocidad de cada función.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Servicios de Moderación",
        description: "Con WarkApp puedes proveer a tu comunidad de un sistema avanzado de moderacición con diversas funciones.",
        bullets: [
            {
                title: "Expulsa a los miembros que incumplan las normas",
                description: "Con Wark podrás banear o expulsar a cualquier miembro con un solo click.",
                icon: <FiLock size={26} />
            },
            {
                title: "Gestiona a los usuarios con los Auto-Roles",
                description: "Configura los Auto-Roles del plan Enterprise para crear un ambiente envolvente para tus usuarios.",
                icon: <FiUser size={26} />
            },
            {
                title: "Bloquea/Desbloquea canales",
                description: "Con nuestros sistemas podrás prohibir el envío de mensajes en determinados canales para evitar saturación del chat.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]
