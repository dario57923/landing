import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "150+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Servidores registrados en Wark en total."
    },
    {
        title: "4.7",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "En valoraciones de nuestros clientes."
    },
    {
        title: "3+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Empresas gestionadas por Wark Corp."
    }
];
