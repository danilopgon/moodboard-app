import "./globals.css";

import NavBar from "./components/NavBar";
import LayoutFooter from "./components/LayoutFooter";

export const metadata = {
  title: "That's a mood",
  description: "Upload your images and generate a moodboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        {children}
        <LayoutFooter />
      </body>
    </html>
  );
}
