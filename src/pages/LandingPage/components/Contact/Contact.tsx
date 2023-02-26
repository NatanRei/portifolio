import { useEffect, useRef, useState } from "react";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";
import { ContactContainer, ContactTitle, Icons } from "./Contact.styles";

export function Contact() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
          setOffsetY(window.pageYOffset)
    };
    const elementRef = useRef(null);
    const element: any = elementRef.current
    let translate = 0;
        if(element) {
            const scrollNow = window.pageYOffset
            const elementLenght = element.offsetHeight
            const initOfElement = element.offsetTop - (element.offsetHeight)
            const zero = (scrollNow - initOfElement) < 0 ? 0 : (scrollNow - initOfElement)
            let percentage = (zero * 100) / (elementLenght * 1)
            percentage = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage
            translate = 33.3 * ( 1- (percentage / 100))
        }
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <ContactContainer ref={elementRef}>
            <ContactTitle>Vamos conversar!</ContactTitle>
            <Icons>
            <a style={{
                 transform: `translateX(-${translate}vw)`
                 }} target="_blank" href="https://www.linkedin.com/in/natan-reis-chmura-909780193/"><LinkedinLogo size={64} /></a>
            <a style={{ 
                transform: `translateY(${translate}vh)`
                }} target="_blank" href="https://github.com/NatanRei"><GithubLogo size={64} /></a>
            <a style={{
                transform: `translateX(${translate}vw)`
                }} target="_blank" href="mailto:nreischmura@gmail.com?subject=Proposta irrecusável de $15k"><EnvelopeSimple size={64} /></a>
            </Icons>
        </ContactContainer>
    );
}