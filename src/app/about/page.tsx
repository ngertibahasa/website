import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle';
import {
  FaBrain,
  FaCheckCircle,
  FaLightbulb,
  FaGraduationCap,
  FaMobileAlt,
  FaHeart
} from 'react-icons/fa';

export default function page() {
  return (
    <Container className='py-32'>
      <h1>Tentang Kami</h1>
      <p>
        Ngerti Bahasa adalah platform belajar bahasa Inggris berbasis online yang menggabungkan teknik NLP (Neuro-Linguistic Programming) dengan metode pengajaran interaktif. Kami percaya bahwa setiap orang punya potensi untuk mahir berbahasa Inggris — asal tahu cara belajar yang sesuai dengan cara kerja pikiran.
      </p>
      <p>
        Dengan pengalaman dari dunia pengajaran dan pengembangan diri, kami hadir untuk membantu kamu belajar bahasa Inggris lebih cepat, nyaman, dan menyenangkan.
      </p>

      <section className="mb-10">
        <SectionTitle>
          <h3>
            Keunggulan Utama Kami
          </h3>
        </SectionTitle>
        <ul>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-gray-700">
              Metode NLP-Based Learning: Belajar sesuai pola pikir dan gaya belajar
              unik tiap orang.
            </span>
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-gray-700">
              Live Class Interaktif + Komunitas Aktif
            </span>
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-gray-700">
              Cocok untuk Pemula yang Sering Takut Salah
            </span>
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-gray-700">
              Bimbingan Mental dan Motivasi Belajar
            </span>
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-gray-700">
              Harga Terjangkau dengan Kualitas Premium
            </span>
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-gray-700">
              Rekaman & Materi Bisa Diakses Kapan Saja
            </span>
          </li>
        </ul>
      </section>


      <section className="mb-10">
        <SectionTitle>
          <h2>
            Visi & Misi
          </h2>
        </SectionTitle>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Visi:</h3>
          <p className="text-gray-700 leading-relaxed">
            Membantu jutaan orang Indonesia menguasai bahasa Inggris dengan percaya
            diri melalui pendekatan NLP dan pembelajaran yang menyentuh pikiran dan
            perasaan.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Misi:</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              Mengajarkan bahasa Inggris dengan teknik NLP agar lebih cepat dipahami dan
              melekat.
            </li>
            <li>
              Membangun kepercayaan diri peserta melalui pembelajaran yang positif dan
              memberdayakan.
            </li>
            <li>Menghadirkan kelas yang menyenangkan, fleksibel, dan ramah pemula.</li>
            <li>Membentuk komunitas belajar yang saling mendukung dan bertumbuh.</li>
          </ul>
        </div>
      </section>


      <section className="mb-10">
        <SectionTitle>
          <h2>
            Kenapa Memilih Ngerti Bahasa?
          </h2>
        </SectionTitle>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li className="mb-2 flex items-start">
            <FaLightbulb className="text-yellow-500 mr-2 mt-1" />
            <span>
              Belajar pakai metode NLP yang terbukti efektif mengatasi rasa takut, malu,
              dan bingung
            </span>
          </li>
          <li className="mb-2 flex items-start">
            <FaBrain className="text-purple-500 mr-2 mt-1" />
            <span>Menyesuaikan pembelajaran dengan cara kerja otak & emosi</span>
          </li>
          <li className="mb-2 flex items-start">
            <FaGraduationCap className="text-blue-500 mr-2 mt-1" />
            <span>
              Didampingi mentor berpengalaman dari Kampung Inggris + NLP Practitioner
            </span>
          </li>
          <li className="mb-2 flex items-start">
            <FaMobileAlt className="text-teal-500 mr-2 mt-1" />
            <span>Belajar fleksibel, bisa dari mana saja</span>
          </li>
          <li className="mb-2 flex items-start">
            <FaHeart className="text-red-500 mr-2 mt-1" />
            <span>Support system dan komunitas yang aktif & suportif</span>
          </li>
        </ul>
      </section>


      <section>
        <SectionTitle>
          <h2>
            Metode & Behavior Belajar
          </h2>
        </SectionTitle>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Metode Pembelajaran: NLP-Based Language Learning
          </h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              <span className="font-semibold">🧠 Anchor & Reframe:</span> Mengubah
              persepsi negatif tentang belajar jadi semangat positif
            </li>
            <li>
              <span className="font-semibold">🗣️ Modeling & Visualization:</span>{' '}
              Meniru pola pikir & ucapan penutur asli secara alami
            </li>
            <li>
              <span className="font-semibold">🔁 Repetition + Emotion:</span> Memori kuat
              dengan pengulangan emosional
            </li>
            <li>
              <span className="font-semibold">💬 Real-life Practice:</span> Fokus pada
              komunikasi nyata, bukan hanya grammar
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Behavior Belajar yang Didorong:
          </h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Konsistensi ringan tapi rutin (15-30 menit/hari)</li>
            <li>Berani mencoba → berani salah → makin bisa</li>
            <li>Belajar dari pengalaman dan refleksi diri</li>
            <li>Aktif di komunitas untuk latihan bareng</li>
            <li>Menyadari bahwa bahasa adalah keterampilan, bukan hafalan</li>
          </ul>
        </div>
      </section>
    </Container >
  )
}
