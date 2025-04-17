import "./globals.css";
import localFont from "next/font/local";
import Layout from "@/components/layout/Layout";
import { NextAuthProvider } from "@/providers/NextAuthProvider";

const yekan = localFont({
  src: [
    {
      path: "../../public/fonts/YekanBakh-Light.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Fat.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Bold.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Regular.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Heavy.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "املاک 555",
  description: "سایت خرید و فروش املاک" ,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
