import {faCss3Alt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {faR, faT} from "@fortawesome/free-solid-svg-icons";
import firstImg from "./images/projectOne.webp";
import secondImg from "./images/secondImg.webp";

export const SliderData = [
    {
        id:1,
        title: "HTML",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        icon: faHtml5,
    },
    {
        id: 2,
        title: "SCSS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        icon: faCss3Alt,
    },
    {
        id: 3,
        title: "Java Script",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        icon: faJs,
    },
    {
        id: 4,
        title: "REACT",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        icon: faReact,
    },

    {
        id: 5,
        title: "Type Script",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        icon: faT,
    },
    {
        id:6,
        title: "Redux",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        icon: faR,
    },
];

const divStyleFirst={backgroundImage: `url(${firstImg})`}
const divStyleSec={backgroundImage: `url(${secondImg})`}
export const projectData = [
    {
        id:0,
        title: 'Task manager',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        style: divStyleFirst,
        link:'https://ggavr.github.io/hw-inc/#/junior'
    },
    {
        id:1,
        title: 'Microtasks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        style: divStyleSec,
        link:'https://ggavr.github.io/hw-inc/#/junior'
    },
    {
        id:2,
        title: 'Game searcher',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        style: divStyleFirst,
        link:'https://github.com/ggavr/game-searcher/tree/develop'
    },

]