import './App.css';
import Spline from '@splinetool/react-spline';
import smol from "./smol.spline";

function App() {
  return (
    <div className="App">
      <Spline 
        scene={smol}
      />
    </div>
  );
}

export default App;
