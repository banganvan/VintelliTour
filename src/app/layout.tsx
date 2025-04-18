'use client';

import { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Inter } from 'next/font/google';
import { Box, Container, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareSpaceSidebar from '@/components/ShareSpaceSidebar';
import Navbar from '@/components/Navbar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const inter = Inter({ subsets: ['latin'] });

// Create a theme instance
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const MainContent = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '66.6667%',
    paddingRight: theme.spacing(4),
  },
}));

const SidebarWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    width: '33.3333%',
    minWidth: '300px',
    maxWidth: '400px',
    padding: theme.spacing(3),
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
}));

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <MainContent>
                <header>
                  <Navbar />
                </header>

                <main>{children}</main>
              </MainContent>
              <SidebarWrapper>
                <ShareSpaceSidebar />
              </SidebarWrapper>
            </Box>

            <footer className="bg-gray-800 text-white py-8 border-t border-blue-600/20 shadow-[0_-4px_6px_rgba(96,165,250,0.2)]">
              <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="col-span-2">
                    <img src="img/Logo_merus.png" alt="description" className="w-40  h-auto" />
                    <p className="text-sm text-gray-600 text-left">Website kết hợp du lịch, văn hóa và trí tuệ nhân tạo, mang đến trải nghiệm khám phá Việt Nam thông minh và cá nhân hóa.</p>
                    <div className="flex space-x-4 mt-4">
                      <a href="https://www.facebook.com/anvanket1402" className="text-white-600 text-3xl hover:text-blue-500 rounded-full p-2 border-blue-2 bg-blue-600">
                        <FaFacebookF />
                      </a>
                      <a href="https://www.instagram.com/vanket_1402/" className="text-white-600 text-3xl hover:text-blue-500 rounded-full p-2 border-blue-2 bg-blue-600 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                        <FaInstagram />
                      </a>
                      <a href="#" className="text-white-600 text-3xl hover:text-blue-500 rounded-full p-2 border-blue-2 bg-blue-600">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>

                  <div className="col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                      <div>
                        <ul className="space-y-2 text-sm">
                          <li><p className="text-black text-base font-bold">Địa chỉ</p></li>
                          <li><p className="text-gray-500">Hàn Thuyên, khu phố 6 P, Thủ Đức, Hồ Chí Minh</p></li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2 text-sm">
                          <li><p className="text-black text-base font-bold ">Liên hệ</p></li>
                          <li><p className="text-gray-500">+84 377 892 859</p></li>
                          <li><p className="text-gray-500">22520595@gm.uit.edu.vn</p></li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2 text-sm">
                          <li><p className="text-black text-base font-bold">Thời gian</p></li>
                          <li><p className="text-gray-500">Thứ hai - Thứ bảy</p></li>
                          <li><p className="text-gray-500">9AM - 7PM</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="h-px bg-gray-600 border-0 mx-auto w-[90%] mt-7" />

              <div className="bg-white-700 pt-4">
                <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 px-4 text-center">
                  <div className="text-left flex items-center">
                    <p className="text-sm text-gray-500 ">&copy; 2025 VintelliTour. Tất cả quyền lợi được bảo vệ.</p>
                  </div>
                  <div className="text-right flex space-x-8">
                    <img src="img/brand-threejs.svg" alt="description" className="inline-block w-auto" />
                    <img src="img/Langchain--Streamline-Simple-Icons.svg" alt="description" className="inline-block w-auto" />
                    <img src="img/LangGraph_icon.png" alt="description" className="inline-block w-15 h-15" />
                    <img src="img/leaflet.svg" alt="description" className="inline-block w-auto w-5 h-5 mt-4" />
                    <img src="img/mongodb-original-wordmark.svg" alt="description" className="inline-block mt-3 w-auto w-8 h-8" />
                    <img src="img/nextjs.svg" alt="description" className="inline-block w-auto w-8 h-8 mt-3" />
                    <img src="img/tailwind-css.svg" alt="description" className="inline-block w-auto w-5 h-5 mt-4" />
                  </div>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

