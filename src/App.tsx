import { useEffect, useState } from "react";

import CountdownCard from "./components/CountdownCard";

import "./App.css";

function App() {
  const wcDate = new Date("2022-11-20T16:00:00Z").getTime();

  const [countdown, setCountdown] = useState(wcDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(wcDate - new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-7xl">Faltan</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <CountdownCard
          value={Math.floor(countdown / (1000 * 60 * 60 * 24))}
          label="DÍAS"
        />
        <CountdownCard
          value={Math.floor((countdown / (1000 * 60 * 60)) % 24)}
          label="HORAS"
        />
        <CountdownCard
          value={Math.floor((countdown / 1000 / 60) % 60)}
          label="MINUTOS"
        />
        <CountdownCard
          value={Math.floor((countdown / 1000) % 60)}
          label="SEGUNDOS"
        />
      </div>

      <p className="text-4xl">para la papita</p>
    </div>
  );
}

export default App;
