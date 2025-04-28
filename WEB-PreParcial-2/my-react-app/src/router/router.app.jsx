import {BrowserRouter, Routes, Route} from "react-router-dom";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<#ll/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;