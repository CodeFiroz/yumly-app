import "./globals.css";

export const metadata = {
  title: "Yumly | Restaurant App By Firoz",
  description: "NEXT.JS Restaurant app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
