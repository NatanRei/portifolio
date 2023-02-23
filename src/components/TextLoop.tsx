import { Scroller, ScrollerContainer, Text } from "./TextLoop.styles";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

export function TextLoop() {

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

    const { width } = getWindowDimensions();

    const padding = width / items.length;
    return (
      <ScrollerContainer>
          <Scroller gradient={false} pauseOnHover speed={80} className="marquee" direction="left">
            {items.map((item) => (<Text target='_blank' href={`https://www.google.com/search?q=${item}`} style={{ paddingLeft: padding }} className="item" key={item}>{item}</Text>))}
          </Scroller>
        </ScrollerContainer>
    );
}