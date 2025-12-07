import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const Header = () => {
  const [opacity, setOpacity] = useState(0.5);
  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setOpacity(0.9);
    } else {
      setOpacity(0.5);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className="fixed top-0 left-0 z-200 w-screen h-14 flex items-center justify-between duration-700 bg-neutral-800 px-4 md:px-12"
      style={{
        opacity: opacity,
      }}
    >
      <div className="z-200 opacity-100 flex items-center">
        <HeaderIcon href="#home">NTN</HeaderIcon>
      </div>

      <div className="z-200 opacity-100 flex items-center gap-4">
        <HeaderIcon href="#about">Natan Quem?</HeaderIcon>
        <HeaderIcon href="#projects">Projetos</HeaderIcon>
        <HeaderIcon href="#contact">Contate-me</HeaderIcon>
      </div>
    </header>
  );
};

const HeaderIcon = ({ className, ...props }: React.ComponentProps<"a">) => {
  return (
    <a
      {...props}
      className={cn(
        "text-gray-300 no-underline cursor-pointer hover:text-white hover:border-b px-2",
        className
      )}
    />
  );
};
