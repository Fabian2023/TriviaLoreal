import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import pregunta1 from "../Images/Pregunta_01_01.png";
import respuesta1 from "../Images/Pregunta_01_02.png";
import respuestaMala from "../Images/Pregunta_01_03.png";
import pregunta2 from "../Images/Pregunta_02_01.png";
import respuesta2 from "../Images/Pregunta_02_02.png";
import respuestaMala2 from "../Images/Pregunta_02_03.png";
import pregunta3 from "../Images/Pregunta_03_01.png";
import respuesta3 from "../Images/Pregunta_03_02.png";
import respuestaMala3 from "../Images/Pregunta_03_03.png";
import pregunta4 from "../Images/Pregunta_04_01.png";
import respuesta4 from "../Images/Pregunta_04_02.png";
import respuestaMala4 from "../Images/Pregunta_04_03.png";
import pregunta5 from "../Images/Pregunta_05_01.png";
import respuesta5 from "../Images/Pregunta_05_02.png";
import respuestaMala5 from "../Images/Pregunta_05_03.png";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      window.location.href = 'https://cloud.mail.beautynews.co/MARATON_LRP_2024_INDEX';
    }
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, navigate]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <span className="absolute top-[152px] right-[40px] text-3xl text-white px-4 py-2 bg-[#FD8204] rounded-lg w-44 h-9 flex items-center justify-center">
      <span className="mt-[-5px]">{formatTime(timeLeft)} Seg</span>
    </span>
  );
};

const Preguntas = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showRespuesta, setShowRespuesta] = useState(false);
  const [showRespuestaMala, setShowRespuestaMala] = useState(false);
  const [showCircleWithBorder, setShowCircleWithBorder] = useState(true);
  const [showCircleWithBorder2, setShowCircleWithBorder2] = useState(true);
  const [showCircleWithBorder3, setShowCircleWithBorder3] = useState(true);
  const [showCircleWithBorder4, setShowCircleWithBorder4] = useState(true);
  const [showCircleWithBorder5, setShowCircleWithBorder5] = useState(true); 
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
  const handleClick = () => {
    if (isButtonDisabled) return;

    setShowRespuesta(true);
    setIsButtonDisabled(true);

    setTimeout(() => {
      if (currentQuestion === 5) {
        setShowCircleWithBorder5(false);
        
        setTimeout(() => {
          window.location.href = 'https://cloud.mail.beautynews.co/MARATON_LRP_2024_INDEX';
        }, 2000);
      } else {
        setShowRespuesta(false);
        setShowRespuestaMala(false);
        setCurrentQuestion(prev => prev + 1);

        switch (currentQuestion) {
          case 1:
            setShowCircleWithBorder(false);
            break;
          case 2:
            setShowCircleWithBorder2(false);
            break;
          case 3:
            setShowCircleWithBorder3(false);
            break;
          case 4:
            setShowCircleWithBorder4(false);
            break;
          default:
            break;
        }

        setIsButtonDisabled(false);
      }
    }, 2000);
  };

  const handleClickBad = () => {
    if (isButtonDisabled) return;

    setShowRespuestaMala(true);
    setIsButtonDisabled(true);

    setTimeout(() => {
      setShowRespuestaMala(false);
      setShowRespuesta(false);

      if (currentQuestion === 5) {
        setShowCircleWithBorder5(false);
        setShowRespuestaMala(true);
        setTimeout(() => {
          window.location.href = 'https://cloud.mail.beautynews.co/MARATON_LRP_2024_INDEX';
        }, 2000);
      } else {
        setCurrentQuestion(prev => prev + 1);

        switch (currentQuestion) {
          case 1:
            setShowCircleWithBorder(false);
            break;
          case 2:
            setShowCircleWithBorder2(false);
            break;
          case 3:
            setShowCircleWithBorder3(false);
            break;
          case 4:
            setShowCircleWithBorder4(false);
            break;
          default:
            break;
        }

        setIsButtonDisabled(false);
      }
    }, 2000);
  };

  const getQuestionContent = () => {
    if (showRespuestaMala) {
      switch (currentQuestion) {
        case 1:
          return <img src={respuestaMala} alt="respuesta mala 1" className="w-full" />;
        case 2:
          return <img src={respuestaMala2} alt="respuesta mala 2" className="w-full" />;
        case 3:
          return <img src={respuestaMala3} alt="respuesta mala 3" className="w-full" />;
        case 4:
          return <img src={respuestaMala4} alt="respuesta mala 4" className="w-full" />;
        case 5:
          return <img src={respuestaMala5} alt="respuesta mala 5" className="w-full" />;
        default:
          return null;
      }
    }

    switch (currentQuestion) {
      case 1:
        return showRespuesta ? (
          <img src={respuesta1} alt="respuesta 1" className="w-full" />
        ) : (
          <img src={pregunta1} alt="pregunta 1" className="w-full" />
        );
      case 2:
        return showRespuesta ? (
          <img src={respuesta2} alt="respuesta 2" className="w-full" />
        ) : (
          <img src={pregunta2} alt="pregunta 2" className="w-full" />
        );
      case 3:
        return showRespuesta ? (
          <img src={respuesta3} alt="respuesta 3" className="w-full" />
        ) : (
          <img src={pregunta3} alt="pregunta 3" className="w-full" />
        );
      case 4:
        return showRespuesta ? (
          <img src={respuesta4} alt="respuesta 4" className="w-full" />
        ) : (
          <img src={pregunta4} alt="pregunta 4" className="w-full" />
        );
      case 5:
        return showRespuesta ? (
          <img src={respuesta5} alt="respuesta 5" className="w-full" />
        ) : (
          <img src={pregunta5} alt="pregunta 5" className="w-full" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <h1 className="absolute top-[150px] left-16 text-xl text-slate-700 px-4 py-2">
        RESPUESTAS CORRECTAS
      </h1>
      <Countdown />
      
      {showCircleWithBorder ? (
        <div className="absolute w-8 h-8 border-4 border-[#FD8204] rounded-full top-[155px] left-[320px]"></div>
      ) : (
        <div className="absolute w-8 h-8 bg-[#FD8204] rounded-full top-[155px] left-[320px]"></div>
      )}
      
      {showCircleWithBorder2 ? (
        <div className="absolute w-8 h-8 border-4 border-[#FD8204] rounded-full top-[155px] left-[355px]"></div>
      ) : (
        <div className="absolute w-8 h-8 bg-[#FD8204] rounded-full top-[155px] left-[355px]"></div>
      )}
      
      {showCircleWithBorder3 ? (
        <div className="absolute w-8 h-8 border-4 border-[#FD8204] rounded-full top-[155px] left-[390px]"></div>
      ) : (
        <div className="absolute w-8 h-8 bg-[#FD8204] rounded-full top-[155px] left-[390px]"></div>
      )}
      
      {showCircleWithBorder4 ? (
        <div className="absolute w-8 h-8 border-4 border-[#FD8204] rounded-full top-[155px] left-[425px]"></div>
      ) : (
        <div className="absolute w-8 h-8 bg-[#FD8204] rounded-full top-[155px] left-[425px]"></div>
      )}
      
      {showCircleWithBorder5 ? (
        <div className="absolute w-8 h-8 border-4 border-[#FD8204] rounded-full top-[155px] left-[460px]"></div>
      ) : (
        <div className="absolute w-8 h-8 bg-[#FD8204] rounded-full top-[155px] left-[460px]"></div>
      )}

      <div className="picture1">
        {getQuestionContent()}
      </div>

      <div
        className={`absolute top-[1010px] left-96 p-4 w-56 h-12 z-10 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={currentQuestion === 1 || currentQuestion === 3 ? handleClick : handleClickBad}
      />
      <div
        className={`absolute top-[1065px] right-28 p-4 w-56 h-12 z-10 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={currentQuestion === 2 || currentQuestion === 4 ? handleClick : handleClickBad}
      />
      <div
        className={`absolute top-[1010px] left-28 p-4 w-56 h-12 z-10 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={currentQuestion === 5 ? handleClick : handleClickBad}
      />
      <div
        className={`absolute top-[1065px] left-28 p-4 w-56 h-12 z-10 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={handleClickBad}
      />
    </div>
  );
};

export default Preguntas;
