import ForestSvg from "@/assets/forest.svg";
import Forest2Svg from "@/assets/forest2.svg";
import Forest3Svg from "@/assets/forest3.svg";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { TextLoop } from "../../../../components/TextLoop";
import {
  Moon,
  Stars,
  Title,
  TitleContainer,
} from "./Initial.styles";

export function Initial() {
  const [offsetY, setOffsetY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const handleMovements = () => {
    const pageOffset = window.scrollY;

    handleScroll(pageOffset);
    handleOpacity(pageOffset);
  };

  const handleScroll = (pageOffset: number) => {
    const windowWidth = window.innerWidth;
    const MIN_WIDTH_TO_MAKE_ANIMATION = 768;
    if (windowWidth > MIN_WIDTH_TO_MAKE_ANIMATION) {
      setOffsetY(pageOffset);
    } else {
      setOffsetY(0);
    }
  };

  const handleOpacity = (pageOffset: number) => {
    const windowHeight = window.innerHeight;
    if (pageOffset > windowHeight) {
      setOpacity(0);
    } else if (pageOffset == 0) {
      setOpacity(1);
    } else {
      let opacityPercent = (pageOffset * 100) / windowHeight;
      opacityPercent =
        opacityPercent > 100 ? 100 : opacityPercent < 0 ? 0 : opacityPercent;
      setOpacity(1 - opacityPercent / 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleMovements);
    return () => window.removeEventListener("scroll", handleMovements);
  }, []);

  return (
    <div
      className={cn(
        "w-full flex flex-col justify-between",
        "relative before:content-[''] before:absolute before:top-0 before:right-0 before:w-full before:h-screen before:-z-3",
        "before:opacity-50 before:bg-linear-to-b before:from-[#f0f0f0] before:via-[#fdfab4] before:to-[#fdffcb]",
        "dark:before:from-[#434343] dark:before:via-[#232323] dark:before:to-[#0A0A0A]"
      )}
    >
      {opacity && (
        <>
          <Moon
            style={{
              transform: `translateY(${offsetY * 0.5}px)  rotate(-${
                offsetY * 0.5
              }deg) scale(${1 - offsetY * 0.0005})`,
              opacity: opacity,
            }}
          >
            <span role="img" aria-label="Lua"></span>
          </Moon>
          <Stars
            style={{
              transform: `translateY(${offsetY * 1}px)`,
              opacity: opacity,
            }}
          >
            <span role="img" aria-label="Estrelas"></span>
          </Stars>
        </>
      )}
      <img
        className="absolute w-full bottom-0 z-4"
        src={ForestSvg}
        alt="Primeira floresta"
      />
      <img
        className="absolute w-full bottom-0 z-3"
        style={{ transform: `translateY(-${offsetY * 0.055}px)` }}
        src={Forest2Svg}
        alt="Segunda floresta"
      />
      <img
        className="absolute w-full bottom-0 z-2"
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
        src={Forest3Svg}
        alt="Terceira floresta"
      />
      {opacity && (
        <TitleContainer className="flex flex-col items-start mt-[20%] ml-[7%] z-[3]">
          <Title
            style={{
              transform: `translateY(${offsetY * 0.31}px)  translateX(${
                offsetY * 0.31
              }px)   scale(${1 + offsetY * 0.001})`,
            }}
          >
            Natan Reis Chmura
          </Title>
          <h2
            className="text-neutral-700 dark:text-neutral-500 text-4xl"
            style={{ transform: `translateY(${offsetY * 0.35}px) ` }}
          >
            Full Stack Developer
          </h2>
        </TitleContainer>
      )}
      <TextLoop />
    </div>
  );
}
