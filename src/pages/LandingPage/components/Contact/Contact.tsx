import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";
import { ContactContainer, ContactTitle, Icons } from "./Contact.styles";

export function Contact() {
    return (
        <ContactContainer>
            <ContactTitle>Vamos conversar!</ContactTitle>
            <Icons>
            <a target="_blank" href="https://www.linkedin.com/in/natan-reis-chmura-909780193/"><LinkedinLogo size={64} /></a>
            <a target="_blank" href="https://github.com/NatanRei"><GithubLogo size={64} /></a>
            <a target="_blank" href="mailto:nreischmura@gmail.com?subject=Proposta irrecusável de $15k"><EnvelopeSimple size={64} /></a>
            </Icons>
        </ContactContainer>
    );
}