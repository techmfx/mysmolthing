import Spline from "@splinetool/react-spline";
import { BrowserView, MobileView } from "react-device-detect";
import smol_desktop from "./smol_desktop.spline";
import smol_mobile from "./smol_mobile.spline";
import "./App.css";

function App() {
  return (
    <>
      <BrowserView className="App">
        <Spline scene={smol_desktop} />
      </BrowserView>
      <MobileView className="App">
        <Spline scene={smol_mobile} />
      </MobileView>
    </>
  );
}

export default App;
