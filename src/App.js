import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import FormWheel from "./components/FormWheel/FormWheel";


function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={<FormWheel />} />
        </Routes>
    </div>
  );
}

export default App;
