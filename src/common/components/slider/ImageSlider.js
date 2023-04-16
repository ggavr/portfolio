import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import style from "./ImageSlider.module.scss";

import {
  faCss3Alt,
  faJs,
  faReact,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { Skill } from "../../../components/Skills/skill/Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faT, faR } from '@fortawesome/free-solid-svg-icons'
import {Title} from "../Title";

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

export const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
      <div className={style.slider}>
        <FaArrowAltCircleLeft className={style.leftArrow} onClick={prevSlide} />
        <FaArrowAltCircleRight className={style.rightArrow} onClick={nextSlide} />
        <div className={style.imageContainer}>

          <Title title={'Skills'}/>
          <div className={style.skills}>
            {slides.map((slide, index) => {
              const { id, title, description, icon } = slide;
              return (
                  <div key={id}>
                    {index === current && (
                        <div >
                          <Skill
                              icon={<FontAwesomeIcon icon={icon} />}
                              title={title}
                              description={description}
                          />
                        </div>
                    )}
                  </div>
              );
            })}
          </div>
        </div>
      </div>
  );
};
