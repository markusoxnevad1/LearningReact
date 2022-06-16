import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import LearningReact from './LearningReact';
import Chart from './pages/Highcharts';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="learningreact" element={<LearningReact />} />
                    <Route path="highcharts" element={<Chart />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;