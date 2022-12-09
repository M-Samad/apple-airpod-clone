import "./App.css";
import Canvas from "./component/Canvas";
import NavbarGlobal from "./component/Navbarglobal";
import Navlocal from "./component/Navlocal";
import Airpodstext from "./component/Airpodstext";

function App() {
  return (
    <>
      <NavbarGlobal />
      <Navlocal />
      <Airpodstext />
      <Canvas />
    </>
  );
}

export default App;
