import { useNavigate } from "react-router-dom";

import inicio from "../Images/1.png";




const Landing = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/preguntas");
    };
  
  return (
    <div className="page-container">
      <div className="picture1">
        <img src={inicio} alt="inicio"  onClick={handleClick} className="noZoom" ></img>
      </div>
    </div>
  );
};

export default Landing;
