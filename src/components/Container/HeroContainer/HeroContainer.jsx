import React, { useState } from "react";
import HeroSlide from "./HeroSlide";

const HeroContainer = () => {
  const slides = [
    {
      title: "Tu Agente Comercial De Autos",
      subtitle: "Somos tu Agencia de Confianza ",
      img: "https://www.diariomotor.com/imagenes/2019/09/lamborghini-sian-2020-2.jpg",
      id: 1,
    },
    {
      title: "Tu Agente Comercial De Autos",
      subtitle: "Somos tu Agencia de Confianza",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lamborghini-sian-2020-1600-02-1567525717.jpg",
      id: 2,
    },
    {
      title: "Tu Agente Comercial De Autos",
      subtitle: "Somos tu Agencia de Confianza ",
      img: "https://www.actualidadmotor.com/wp-content/uploads/2019/09/lamborghini-sian-trasera-3-4-dinamica-830x460.jpg",
      id: 3,
    },
    {
      title: "Tu Agente Comercial De Autos",
      subtitle: "Somos tu Agencia de Confianza ",
      img: "https://img.remediosdigitales.com/b7b1c2/547319/1366_521.jpg",
      id: 4,
    },
    {
      title: "Tu Agente Comercial De Autos",
      subtitle: "Somos tu Agencia de Confianza ",
      img: "https://cdn.motor1.com/images/mgl/xvb6q/s3/lamborghini-sian.jpg",
      id: 5,
    },
  ];

  const [index, setIndex] = useState(0);

  const changeSlide = (i) => {
    setIndex(i);
  };
  return (
    <HeroSlide
      slide={slides[index]}
      changeSlide={changeSlide}
      arrayIndex={slides.map((el) => el.id)}
    />
  );
};

export default HeroContainer;
