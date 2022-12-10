import "./App.css";
import Canvas from "./component/Canvas";
import NavbarGlobal from "./component/Navbarglobal";
import Navlocal from "./component/Navlocal";
import Airpodstext from "./component/Airpodstext";
import Video from "./component/Video";
import VideoMan from "./component/VideoMan";
import Soundvid from "./component/Soundvid";

function App() {
  return (
    <>
      <NavbarGlobal />
      <Navlocal />
      <Airpodstext />
      <Canvas />
      <Video />
      <Soundvid />
      {/* <VideoMan /> */}
    </>
  );
}

export default App;
