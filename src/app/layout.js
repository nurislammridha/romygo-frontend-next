import Script from "next/script";
import { Providers } from "./Providers";
import "./globals.css"; // Ensure you have a global CSS file for custom styles
import AOSInit from "../components/AOSInit";
import CookieModal from "@/components/CookieModal";
// import "./styles.css"; // Import your custom styles
// app/layout.js
export const metadata = {
  title: "Romygo",
  description: "Romygo - Ride with Confidence",
};

export default function RootLayout({ children }) {
  return (<Providers>
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* Bootstrap Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* A Beat by Kai Font */}
        <link
          href="https://fonts.cdnfonts.com/css/abeatbykai"
          rel="stylesheet"
        />
        {/* Instrument Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Animate on Scroll */}
        <link
          href="https://unpkg.com/aos@2.3.4/dist/aos.css"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        {/* Your custom CSS */}
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <AOSInit />
        {children}
        <CookieModal />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://unpkg.com/aos@2.3.4/dist/aos.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  </Providers>);
}
