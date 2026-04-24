import { useEffect, useState, useRef } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import Overview from "./sections/Overview";
import BOM from "./sections/BOM";
import Parts from "./sections/Parts";
import Tools from "./sections/Tools";
import Printing from "./sections/Printing";
import Assembly from "./sections/Assembly";
import Electronics from "./sections/Electronics";
import ShellAttach from "./sections/ShellAttach";
import Testing from "./sections/Testing";
import Footer from "./sections/Footer";

const SECTIONS = [
  { id: "overview", label: "Overview", num: "00" },
  { id: "bom", label: "Bill of Materials", num: "01" },
  { id: "parts", label: "Printed Parts", num: "02" },
  { id: "tools", label: "Tools Required", num: "03" },
  { id: "printing", label: "Printing the Parts", num: "04" },
  { id: "assembly", label: "Frame Assembly", num: "05" },
  { id: "electronics", label: "Electronics & Wiring", num: "06" },
  { id: "shell", label: "Shell Attachment", num: "07" },
  { id: "testing", label: "Testing & Calibration", num: "08" },
];

function App() {
  const [active, setActive] = useState<string>("overview");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.current!.observe(el);
    });

    return () => observer.current?.disconnect();
  }, []);

  return (
    <div className="app">
      <Sidebar sections={SECTIONS} active={active} />
      <main className="main">
        <Hero />
        <Overview />
        <BOM />
        <Parts />
        <Tools />
        <Printing />
        <Assembly />
        <Electronics />
        <ShellAttach />
        <Testing />
        <Footer />
      </main>
    </div>
  );
}

export default App;
