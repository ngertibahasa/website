import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "10.000+",
    icon: <BsBarChartFill size={34} className="text-blue-500" />,
    description:
      "Jam belajar aktif setiap bulan — bukti komitmen member kami buat terus berkembang.",
  },
  {
    title: "5.0",
    icon: <BsFillStarFill size={34} className="text-blue-500" />,
    description:
      "Rating sempurna dari para siswa di berbagai platform. Belajar seru & efektif!",
  },
  {
    title: "200+",
    icon: <PiGlobeFill size={34} className="text-blue-600" />,
    description:
      "Peserta dari seluruh Indonesia & luar negeri. Belajar bareng komunitas yang supportif!",
  },
];
