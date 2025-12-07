import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function TextLoop() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items: string[] = [
    "React.js",
    "Redux",
    "Next.js",
    "Node.js",
    "Express",
    "Fastify",
    "GraphQL",
    "JWT",
    "Laravel",
    "PHP",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Docker",
    "AWS EC2",
    "Python",
    "Selenium",
    "CyberSecurity",
    "Figma",
    "S.O.L.I.D.",
    "Agile",
    "Unit Tests",
    "E2E Tests",
  ];

  const { width } = windowDimensions;

  const padding = width / items.length;
  return (
    <div className="text-lg mb-[2%] z-10">
      <Marquee
        gradient={false}
        pauseOnHover
        speed={50}
        className="marquee text-xl"
        direction="left"
      >
        {items.map((item) => (
          <a
            target="_blank"
            href={`https://www.google.com/search?q=${item}`}
            style={{ paddingLeft: padding }}
            className="item text-neutral-600 dark:text-neutral-400 font-medium"
            key={item}
          >
            {item}
          </a>
        ))}
      </Marquee>
    </div>
  );
}
