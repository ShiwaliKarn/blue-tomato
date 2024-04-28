import { Inter } from "next/font/google";
import "./globals.css";
import StoreContextProvider from "./context/StoreContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blue Tomato QR code menu, easily browse & order, no waiting",
  description: "Blue Tomato QR code menu is incredibly user-friendly - guests can easily browse and order without the need to wait for a server or download any apps",


  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreContextProvider>
          {children}
        </StoreContextProvider>
      </body>
    </html>
  );
}
