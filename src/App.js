import './App.scss';
import {Header} from "./components/Header/Header";
import {MainPage} from "./components/MainPage/MainPage";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import {ImageSlider, SliderData} from "./common/components/slider/ImageSlider";
import {useState} from "react";

function App() {
    const pageWidth = document.documentElement.scrollWidth
    return (
        <div className="App">

            <Header/>
            <MainPage/>
            {pageWidth> 660 && <Skills slides={SliderData}/>}
            {pageWidth < 660 && <ImageSlider slides={SliderData}/>}
            <Projects/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;
