import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Views/Home";
import Projects from "../Views/Projects";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={ <Home />} />
                <Route path="/projects"  element={ <Projects />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router