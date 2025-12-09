import "./globals.css";

export const metadata = {
  title: "TaskFlow Dashboard",
  description: "Clean admin panel UI for managing tasks and workflow."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
