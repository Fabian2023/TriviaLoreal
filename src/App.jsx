
import { useRoutes, BrowserRouter } from "react-router-dom";
import Landing from "./Components/Landing";
import Preguntas from "./Components/Preguntas";



import "./App.css";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/preguntas", element: <Preguntas /> },
   
  
  ]);
  return routes;
};

function App() {
  
  

  return (
    <BrowserRouter>
      <AppRoutes  />
    </BrowserRouter>
  );
}

export default App;
