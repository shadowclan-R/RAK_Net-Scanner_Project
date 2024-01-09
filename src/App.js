import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Scanner from "./pages/Scanner";
import NotFound from "./pages/NotFound";
import ScanInformation from "./pages/ScanInformation";



function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/about" element={<About/>}/>
                        <Route exact path="/services" element={<Services/>}/>
                        <Route exact path="/contact" element={<Contact/>}/>
                        <Route exact path="/products" element={<Products/>}/>
                        <Route exact path="/scanner" element={<Scanner/>}/>
                        <Route exact path="/result" element={<ScanInformation/>}/>
                        <Route exact path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </Router>

    );
}

export default App;
