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
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </AutoplaySlider>

    )

}
export default Slider
