import { Routes, Route } from "react-router";
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

export default function App(){
    return(
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element = <Homepage /> />
            </Routes>
        </div>
    );
}