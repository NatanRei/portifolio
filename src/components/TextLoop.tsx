import { TextLoopContainer, Text } from "./TextLoop.styles";

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
        "GraphQL"
    ];



    const { width, height } = getWindowDimensions();

    // let TweenLoop = TweenMax.to('.travel-txt', 15,{xPercent: -100, ease: Linear.easeNone})

    // TweenMax.ticker.addEventListener("tick", myFunction);

    // var $eachTxt = document.querySelectorAll('.travel-txt__each');
    // var $last = $eachTxt[$eachTxt.length- 4];
    // function myFunction(event) {
	//     $distanceLast = $last.getBoundingClientRect().left
    //     if($distanceLast < 0) {
    //         TweenLoop.play(0)
    //     }
        
        
    //     document.querySelector('.travel-txt').hover(function(){
    //         TweenLoop.pause()
    //     }, function(){
    //         TweenLoop.play()
    //     })
	
    // }


    return (
        <TextLoopContainer>
            {items.map(item => <Text key={item}>{item}</Text>)}
        </TextLoopContainer>
    );
}