import { ThemeProvider } from "@/contexts/theme";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LandingPage } from "./LandingPage/LandingPage";

export function Home() {
  return (
    <ThemeProvider>
      <main className="max-w-screen overflow-x-hidden text-primary">
        <Header />
        <LandingPage />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
