'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [active, setActive] = useState('home');

  return (
    <nav
      className="w-full mx-auto relative flex items-center justify-between bg-white bg-black/80 py-0 text-black border-b border-blue-600/20 shadow-lg shadow-blue-400/20">
      <div className="flex-shrink-0 px-4">
        <Link href="/">
          <img src="/img/Logo_merus.png" alt="VintelliTour Logo" className="w-40 ml-15 h-auto cursor-pointer" />
        </Link>
      </div>
      <ul
        className="hidden text-lg md:flex w-1/2 items-center justify-between gap-4 py-2 cursor-pointer md:px-10 border-r-2 border-l-2 border-gray-800 dark:border-gray-300 group">
        {/* Trang chủ */}
        <Link href="/" onClick={() => setActive('home')}>
          <li
            className={`rounded-b px-2 ${
              active === 'home'
                ? 'border-b-[3px] border-blue-600 font-bold'
                : 'hover:border-b-[3px] hover:border-blue-600 hover:font-bold group-hover:border-b-0'
            }`}
          >
            Trang chủ
          </li>
        </Link>

        {/* Không gian chia sẻ */}
        <Link href="/share-space" onClick={() => setActive('share')}>
            <li
                className={`rounded-b px-2 ${
                active === 'share'
                    ? 'border-b-[3px] border-blue-600 font-bold'
                    : 'hover:border-b-[3px] hover:border-blue-600 hover:font-bold group-hover:border-b-0'
                }`}
            >
                Không gian chia sẻ
            </li>
        </Link>

        {/* Về chúng tôi */}
        <Link href="/aboutus" onClick={() => setActive('about')}>
          <li
            className={`rounded-b px-2 ${
              active === 'about'
                ? 'border-b-[3px] border-blue-600 font-bold'
                : 'hover:border-b-[3px] hover:border-blue-600 hover:font-bold group-hover:border-b-0'
            }`}
          >
            Về chúng tôi
          </li>
        </Link>
      </ul>

      <div className="hidden md:flex justify-start pl-2 pr-10 py-1 gap-12 ">
        <a href="#" // Link Đăng nhập tạm thời
          className="bg-white text-white border-2 border-blue-800 rounded px-6 py-2 rounded-md relative overflow-hidden group hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-400 hover:to-purple-500">
          <span className="relative group-hover:text-white z-10 font-bold text-gray-800 ">Đăng nhập</span>
        </a>
        <a href="#" // Link Đăng ký tạm thời
          className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 text-white px-6 py-2 rounded-md relative overflow-hidden group">
          <span
            className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"
          ></span>
          <span className="relative group-hover:text-white z-10 font-bold text-gray-800">Đăng kí</span>
        </a>
      </div>
    </nav>
  );
} 