import React from "react";
import styled from "styled-components"; // importo la dependencia de mi package.Json "styled-components" para manejar los style

const HeroSlide = ({ slide, changeSlide, arrayIndex }) => {
  return (
    <StyleHeroSlide className="hero-slide">
      <div className="hero-slide__bg">
        <img src={slide.img} alt="Imagen de fondo del hero" />
      </div>
      <div className="hero-slide__caption">
        <h2>{slide.title}</h2>
        <p>{slide.subtitle}</p>
      </div>
      <ul className="hero-slide__controls">
        {arrayIndex.map((id) => {
          return (
            <li
              className={`controls__item ${
                slide.id === id ? "control-selected" : null
              }`}
              key={id}
              onClick={() => {
                changeSlide(id - 1);
              }}
            ></li>
          );
        })}
      </ul>
    </StyleHeroSlide>
  );
};

export default HeroSlide;

//!Estilos para HeroSlide

const StyleHeroSlide = styled.section`
  .hero-slide {
    @include flex-r-center;
    width: 100vw;
    height: calc(100vh - 79px);
    position: relative;
    padding: 15px;

    &__bg {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      filter: brightness(0.5) contrast(1);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__caption {
      text-align: center;
      color: ivory;
      position: relative;
      h2 {
        font-size: 2.2rem;
        text-transform: uppercase;
        font-weight: bold;
      }
      p {
        margin-top: 20px;
        text-transform: capitalize;
        font-size: 1.4rem;
      }
    }
  }

  .hero-slide__controls {
    display: flex;
    gap: 30px;
    position: absolute;
    bottom: -90px;

    .controls__item {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: ivory;
      opacity: 0.5;
      transition: all 320ms ease-in-out;
    }
    .control-selected {
      @include shadow-elevation-4;
      transform: scale(1.2);
      opacity: 2;
    }
  }
`;
