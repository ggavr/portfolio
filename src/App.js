import './App.scss';
import {Header} from "./components/Header/Header";
import {MainPage} from "./components/MainPage/MainPage";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import {ImageSlider, SliderData} from "./common/components/slider/ImageSlider";
import {useListenerScreenWidth} from "./common/components/slider/Dimension";

function App() {

    const breakpointMobile = useListenerScreenWidth()
    return (
        <div className="App">

            <Header/>
            <MainPage/>
            {!breakpointMobile && <Skills slides={SliderData}/>}
            {breakpointMobile && <ImageSlider slides={SliderData}/>}
            <Projects/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;
