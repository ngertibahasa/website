import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiPieChart,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Fitur & Benefit",
    description:
      "Kelas disesuaikan dengan level dan gaya belajarmu. Mau mulai dari nol atau upgrade skill? Bisa semua!",
    bullets: [
      {
        title: "Real-Life Conversation Practice",
        description:
          "Latihan speaking dengan topik kekinian & situasi nyata. Biar kamu nggak cuma ngerti, tapi juga pede ngomong!",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Progress Tracking",
        description:
          "Setiap langkah belajarmu dipantau dan dievaluasi. Kamu tahu kapan harus gaspol, kapan waktunya review.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Flexible Schedule",
        description:
          "Belajar bisa diatur sesuai jadwal kamu. Kuliah atau kerja? Tetap bisa ikut kelas tanpa ribet.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/benefit-1.webp",
  },
  {
    title: "Siapa Aja Bisa Mulai!",
    description:
      "Mulai lancar Bahasa Inggris hari ini, nggak perlu background Bahasa atau pengalaman khusus. Ngerti Bahasa bikin belajar jadi mudah & menyenangkan.",
    bullets: [
      {
        title: "Pelajar & Mahasiswa",
        description:
          "Mulai dari vocabulary, grammar, sampai latihan speaking. Cocok buat persiapan sekolah, kuliah, atau beasiswa luar negeri.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Fresh Graduate & Pencari Kerja",
        description:
          "Upgrade skill Bahasa Inggris kamu biar makin pede di wawancara, CV, dan dunia kerja internasional.",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Karyawan & Profesional",
        description:
          "Latihan komunikasi formal dan presentasi biar kamu siap naik level di kantor atau pitching ke klien luar.",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/benefit-2.webp",
  },
];
