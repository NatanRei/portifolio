import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Contact() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };
  const elementRef = useRef(null);
  const element: any = elementRef.current;
  let translate = 0;
  if (element) {
    const elementLength = element.offsetHeight;
    const initOfElement = element.offsetTop - element.offsetHeight;
    const zero = offsetY - initOfElement < 0 ? 0 : offsetY - initOfElement;
    let percentage = (zero * 100) / (elementLength * 1);
    percentage = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage;
    translate = 33.3 * (1 - percentage / 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="bg-neutral-100 dark:bg-neutral-800 w-full flex flex-col justify-center items-center"
      ref={elementRef}
    >
      <h2 className="text-3xl mx-8">Vamos conversar!</h2>
      <div className="flex flex-row gap-10">
        <Icon
          translate={`translateX(-${translate}vw)`}
          href="https://www.linkedin.com/in/natan-reis-chmura-909780193/"
        >
          <LinkedinLogo size={54} />
        </Icon>
        <Icon
          translate={`translateY(${translate}vh)`}
          href="https://github.com/NatanRei"
        >
          <GithubLogo size={54} />
        </Icon>
        <Icon
          translate={`translateX(${translate}vw)`}
          href="mailto:nreischmura@gmail.com?subject=Olá, venho pelo seu portifólio..."
        >
          <EnvelopeSimple size={54} />
        </Icon>
      </div>
    </div>
  );
}

type IconProps = {
  translate: string;
  children: ReactNode;
  href: string;
};
function Icon({ children, translate, href }: IconProps) {
  return (
    <a
      href={href}
      target="_blank"
      style={{
        transform: translate,
      }}
      className="mx-0 my-4 sm:my-12"
    >
      {children}
    </a>
  );
}
