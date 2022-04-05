import styled from "styled-components";

const StyleHeroSlide = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 79px);
  position: relative;
  padding: 15px;

  .hero-slide__bg {
    posición: absoluta;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    filter: brightness(0.5) contrast(0.9);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .hero-slide__caption {
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

  .hero-slide__controls {
    display: flex;
    gap: 20px;
    position: absolute;
    bottom: 10px;

    .controls__item {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ivory;
      opacity: 0.5;
      transition: all 320ms ease-in-out;
    }
    .control-selected {
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.4);
      transform: scale(1.2);
      opacity: 2;
    }
  }
`;
export default StyleHeroSlide;
