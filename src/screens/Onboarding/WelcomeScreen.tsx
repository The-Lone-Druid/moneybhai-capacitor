import React from "react";
import { Button } from "../../components/exports";
import { useNavigate } from "react-router-dom";
import { routesList } from "../routes";

type Props = {};

const WelcomeScreen = (props: Props) => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [slides, setSlides] = React.useState([
    {
      id: 0,
      image: require("../../assets/images/gain-money-control.svg"),
      title: "Gain total control of your money",
      description: "Become your own money manager and make every cent count"
    },
    {
      id: 1,
      image: require("../../assets/images/know-your-expenses.svg"),
      title: "Know where your money goes",
      description:
        "Track your transaction easily, with categories and financial report "
    },
    {
      id: 2,
      image: require("../../assets/images/planning-ahead.svg"),
      title: "Planning ahead",
      description: "Setup your budget for each category so you in control"
    }
  ]);

  const nextSlide = () => {
    if (activeSlide >= 0 && activeSlide < 2) {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <div className="h-[100vh] flex flex-col">
      <div className="p-[16px] w-[100%] flex-1">
        {slides.map((slide, index) => {
          return (
            slide.id === activeSlide && (
              <div
                className="flex items-center justify-center flex-col"
                key={index}
              >
                <img src={slide.image.default} width={250} alt="" />
                <div className="text-center">
                  <h1 className="text-[32px] font-bold leading-[39px] mt-[21px]">
                    {slide.title}
                  </h1>
                  <h1 className="text-[16px] font-[500] mt-[17px] leading-[19.36px] text-light-20">
                    {slide.description}
                  </h1>
                </div>
              </div>
            )
          );
        })}
        {/* dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`rounded-full ${
                slide.id === activeSlide
                  ? "bg-violet-100 h-[16px] w-[16px]"
                  : "bg-violet-20 h-[8px] w-[8px]"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="p-[16px] w-[100%] flex flex-col gap-[16px]">
        <Button
          variant="primary"
          onClick={() => {
            if (activeSlide != 2) {
              nextSlide();
            } else {
              navigate(routesList.auth.login.url);
            }
          }}
        >
          Next
        </Button>
        <Button
          variant="primary-light"
          onClick={() => {
            navigate(routesList.auth.login.url);
          }}
        >
          Skip
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
