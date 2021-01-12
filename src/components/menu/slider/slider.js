import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './slider.css'

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider(){
    return (

        <AutoplaySlider play={true}
                       cancelOnInteraction={true}
                       interval={3000}
                        className={'slider'}>
            <div><img src="https://www.vingudpss.gov.ua/sites/default/files/styles/505x320m/public/2611201901.jpg?itok=xvfZRk73&v=1574772020" alt=""/></div>
            <div><img src="https://amrita.club/_sh/1/135c.jpg" alt=""/></div>
            <div><img src="https://www.paradoxplaza.com/on/demandware.static/-/Sites-paradox-us-catalog/default/dw9a292350/Logos/TodaysDeals-OnSale2.png" alt=""/></div>
        </AutoplaySlider>

    )

}
export default Slider
