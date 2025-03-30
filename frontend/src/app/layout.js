import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "AI Doctor",
  description: "Your AI-powered medical assistant",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main >{children}</main> 
      </body>
    </html>
  );
}

