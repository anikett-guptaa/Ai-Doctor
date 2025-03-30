import "./globals.css";

export const metadata = {
  title: "AI Doctor",
  description: "An AI-powered medical assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
