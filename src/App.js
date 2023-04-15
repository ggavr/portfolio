import './App.scss';
import {Header} from "./components/Header/Header";
import {MainPage} from "./components/MainPage/MainPage";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import {ImageSlider, SliderData} from "./common/components/slider/ImageSlider";

function App() {
    return (
        <div className="App">
            <ImageSlider slides={SliderData}/>
            <Header/>
            <MainPage/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;
