// app/components/PricingCard.tsx
'use client'; // Pastikan ini ada jika Anda menggunakan komponen di client side

import React from 'react';
import {
  FaCheckCircle, // Untuk fasilitas
  FaBook, // Untuk E-Book
  FaCertificate, // Untuk E-Sertifikat
} from 'react-icons/fa';

const PricingCard: React.FC = () => {
  const durations = [
    { meetings: 10, duration: '2 minggu', price: 'Rp865.000,-' },
    { meetings: 20, duration: '1 bulan', price: 'Rp1.500.000,-' },
    { meetings: 40, duration: '2 bulan', price: 'Rp2.800.000,-' },
    { meetings: 60, duration: '3 bulan', price: 'Rp4.000.000,-' },
    { meetings: 80, duration: '4 bulan', price: 'Rp5.000.000,-' },
    { meetings: 100, duration: '5 bulan', price: 'Rp6.000.000,-' },
    { meetings: 120, duration: '6 bulan', price: 'Rp7.000.000,-' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-lg w-full transform transition-transform duration-300 ease-in-out">
      <div className="p-8 text-center" style={{ backgroundColor: '#0D1282', color: '#EEEDED' }}> {/* Header Blue, Text White */}
        <h2 className="text-3xl font-extrabold mb-2">Lancar Speaking Private</h2>
        <p>
          Lancar Speaking Private Program yang dirancang untuk membantu Anda mahir berbahasa Inggris
          dengan bimbingan personal dan metode efektif.
        </p>
      </div>

      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#D71313] mb-3">Fasilitas</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div>
                <FaCheckCircle className="mr-2" />
              </div>
              <span>1 member 1 teacher</span>
            </li>
            <li className="flex items-center">
              <div>
                <FaCheckCircle className="mr-2" />
              </div>
              <span>Tutor berpengalaman dan bersertifikat</span>
            </li>
            <li className="flex items-center">
              <div>
                <FaCheckCircle className="mr-2" />
              </div>
              <span>Materi belajar interaktif dan personalisasi</span>
            </li>
            <li className="flex items-center">
              <div>
                <FaCheckCircle className="mr-2" />
              </div>
              <span>Sesi fleksibel sesuai jadwal Anda</span>
            </li>
            <li className="flex items-center">
              <div>
                <FaCheckCircle className="mr-2" />
              </div>
              <span>Evaluasi progres rutin</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#D71313] mb-3">Bonus</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div>
                <FaBook className="mr-2" />
              </div>
              <span>E-Book eksklusif tips dan trik speaking</span>
            </li>
            <li className="flex items-center">
              <div>
                <FaCertificate className="mr-2" />
              </div>
              <span>E-Sertifikat kelulusan program</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#D71313] mb-4">Durasi dan Biaya</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Meeting
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Durasi
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Biaya
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {durations.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 whitespace-nowrap ">
                      {item.meetings}x meeting
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap ">
                      {item.duration}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap font-semibold text-right"> {/* Read */}
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className='italic mt-4 text-sm'>*pilihan jam belajar ada di form registrasi atau klik Daftar Sekarang</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-8 w-full">
        <button
          className="w-full py-3 px-6 rounded-lg text-lg font-bold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ backgroundColor: '#F0DE36', color: '#000', borderColor: '#0D1282' }} // Button Blue, Text White, Border Blue
        >
          Konsultasi
        </button>
        <button
          className="w-full py-3 px-6 rounded-lg text-lg font-bold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ backgroundColor: '#0D1282', color: '#EEEDED', borderColor: '#0D1282' }} // Button Blue, Text White, Border Blue
        >
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
};

export default PricingCard;