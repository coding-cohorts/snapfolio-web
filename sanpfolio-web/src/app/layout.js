import "./globals.css";

export const metadata = {
  title: "Snapfolio-Web",
  description: "Portfolio Generator",
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
