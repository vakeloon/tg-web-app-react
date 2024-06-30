import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import FormWheel from "./components/FormWheel/FormWheel";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import BuyStars from "./components/BuyStars/BuyStars";


function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.expand();
    }, [tg])

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={<MainPage />} />
            <Route path={'buyStars'} element={<BuyStars />} />
            <Route path={'wheel'} element={<FormWheel />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
