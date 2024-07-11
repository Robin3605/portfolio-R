import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Robins's portfolio",
  description: "Modern & Minimalist JS Portfolio",
};

export default function RootLayout({
  children,
 }: Readonly <{
  children: React.ReactNode;
 }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
