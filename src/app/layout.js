import { antonio } from "@/utilities/fonts";
import "./globals.css";
import Header from "./components/Header/Header";

export const metadata = {
  title: "Discover planets in our solar system",
  description: "See general information about planets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-stars-background bg-dark-grey min-h-fit ${antonio.className}`}
      >
        <Header />
        <main className="max-w-full w-full min-h-screen relative z-0 mt-[4.625rem] pb-12 md:mt-[164.31px] lg:mt-20 lg:px-40 lg:pb-14">
          {children}
        </main>
      </body>
    </html>
  );
}
