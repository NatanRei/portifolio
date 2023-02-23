import { useEffect, useState } from "react";
import { Scroller, ScrollerContainer, Text } from "./TextLoop.styles";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

export function TextLoop() {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const items: string[] = [
        "React",
        "Redux",
        "Node",
        "Express",
        "MongoDB",
        "GraphQL",
        "Laravel",
        "PHP",
        "Docker",
        "Python",
        "Selenium",
    ];

    const { width } = windowDimensions;

    const padding = width / items.length;
    return (
      <ScrollerContainer>
          <Scroller gradient={false} pauseOnHover speed={80} className="marquee" direction="left">
            {items.map((item) => (
            <Text 
              target='_blank' 
              href={`https://www.google.com/search?q=${item}`} 
              style={{ paddingLeft: padding }} 
              className="item" 
              key={item}>{item}
            </Text>))}
          </Scroller>
        </ScrollerContainer>
    );
}