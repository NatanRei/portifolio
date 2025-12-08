import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function TextLoop() {
  const { t } = useTranslation();

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

  const items = t("home.stack", {
    returnObjects: true,
  }) as string[];

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
