import { LaptopContainer } from "./laptop.styles";
import LapTop from '@/assets/projectTwoBg.webp'

export function Laptop() {
    return (
        <LaptopContainer target="_blank" href="https://github.com/NatanRei/laptop-html-css">
            <div className="laptop">
                <img src={LapTop} alt="capa do sistema operacional KaliLinux" />
            </div>
        </LaptopContainer>
    )
}