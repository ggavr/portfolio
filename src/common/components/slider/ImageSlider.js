import React, {useState} from "react";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import style from "./ImageSlider.module.scss";
import {Skill} from "../../../components/Skills/skill/Skill";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Title} from "../Title";

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
