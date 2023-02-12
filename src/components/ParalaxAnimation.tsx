import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Teste } from '../pages/Home.styles';
import './ParalaxAnimation.styles.css'
export function ParallaxAnimation() {
    return (
        <div id='parallax_container'>
        <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
          <ParallaxLayer offset={0} speed={0.1}>
            
            <div className="animation_layer parallax" id="mountain"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-1}>
            <div className="animation_layer parallax" id="logoland"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0}>
            <div className="animation_layer parallax" id="jungle5"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0} factor={1}>
            <Teste>
                    Aqui a magica começa a acontecer
            </Teste>
          </ParallaxLayer>
          
        </Parallax>
        
      </div>
    );
}