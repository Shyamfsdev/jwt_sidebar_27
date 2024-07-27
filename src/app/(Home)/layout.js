"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { useRouter } from "next/navigation";
import MiniDrawer from "./Sidebar/page";
import { useEffect } from "react";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('Tokensss');

    if (!token) {

      router.push('/auth');
    }
  }, [router]);


  return (
    <html lang="en">
      <body className={inter.className}>
        {Cookies.get('Tokensss') ? <MiniDrawer>{children}</MiniDrawer> : null}
      </body>
    </html>
  );
}


// HomeLayout.jsx
// import { Inter } from 'next/font/google';
// import '../globals.css';

// const inter = Inter({ subsets: ['latin'] });

// export default function HomeLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {children}
//       </body>
//     </html>
//   );
// }

