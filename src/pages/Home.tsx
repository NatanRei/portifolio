import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LandingPage } from "./LandingPage/LandingPage";

export function Home() {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <Header />
      <LandingPage />
      <Footer />
    </main>
  );
}
