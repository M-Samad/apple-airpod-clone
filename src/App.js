import "./App.css";
import Canvas from "./component/Canvas";
import NavbarGlobal from "./component/Navbarglobal";
import Navlocal from "./component/Navlocal";
import Airpodstext from "./component/Airpodstext";
import Imagesairpodes from "./component/Imagesairpodes";

function App() {
  return (
    <>
      <NavbarGlobal />
      <Navlocal />
      <Airpodstext />
      <Imagesairpodes />
      <Canvas />
    </>
  );
}

export default App;
