import { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet, createRoutesFromElements, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhoItsFor from "./components/WhoItsFor";
import Features from "./components/Features";
import SocialProof from "./components/SocialProof";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Roadmap from "./components/Roadmap";

function Home() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <section id="who-its-for"><WhoItsFor /></section>
      <section id="features"><Features /></section>
      <section id="social-proof"><SocialProof /></section>
      <section id="roadmap"><Roadmap /></section>
      <section id="cta"><CTA /></section>
    </>
  );
}

function RedirectToHome() {
  const navigate = useNavigate();
  useEffect(() => { navigate("/", { replace: true }); }, [navigate]);
  return null;
}

function Layout() {
  return (
    <div className="bg-background text-on-surface font-body-md">
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<RedirectToHome />} />
    </Route>
  ),
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default function App() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.matches) {
      document.documentElement.classList.add("dark");
    }
    const handler = (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return <RouterProvider router={router} />;
}
