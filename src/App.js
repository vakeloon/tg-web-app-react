import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import FormWheel from "./components/FormWheel/FormWheel";
import Footer from "./components/Footer/Footer";


function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        console.log('Initializing Telegram Web App...');
        if (tg.ready) {
            tg.ready();
            console.log('Telegram Web App is ready.');
        } else {
            console.log('Telegram Web App ready method is not available.');
        }

        if (tg.expand) {
            tg.expand();
            console.log('Telegram Web App is expanded.');
        } else {
            console.log('Telegram Web App expand method is not available.');
        }
    }, [tg]);

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={<FormWheel />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
