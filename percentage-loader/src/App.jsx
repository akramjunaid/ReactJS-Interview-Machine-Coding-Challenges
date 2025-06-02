import { useEffect, useState } from "react";
import PercentageLoader from "./components/PercentageLoader";
import './App.css'

function App() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => (prev < 100 ? prev + 1 : 100));
    }, 500);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <h1>Circular Loader</h1>
      <PercentageLoader percentage={percent} />
    </div>
  );
}

export default App;
