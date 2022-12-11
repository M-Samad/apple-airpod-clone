import "./App.css";
import Canvas from "./component/Canvas";
import NavbarGlobal from "./component/Navbarglobal";
import Navlocal from "./component/Navlocal";
import Airpodstext from "./component/Airpodstext";
import Video from "./component/Video";
import VideoMan from "./component/VideoMan";
import Soundvid from "./component/Soundvid";
import Footer from "./component/Footer";
import Chipcont from "./component/Chipcont";
import Immersivetext from "./component/Immersivetext";
import Airpodtwice from "./component/Airpodtwice";

function App() {
  return (
    <>
      <NavbarGlobal />
      <Navlocal />
      <Airpodstext />
      <Canvas />
      <Video />
      <Immersivetext />
      <Chipcont />
      <Airpodtwice />
      <Soundvid />
      <Footer />
      {/* <VideoMan /> */}
    </>
  );
}

export default App;
