import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import About from "containers/pages/About";
import Contact from "containers/pages/Contact";
import Remedie from "containers/pages/Remedies";

import { AnimatePresence } from 'framer-motion'
import Category from "containers/pages/Category";
import Search from "containers/pages/Search";
import PostDetail from "containers/pages/PostDetail";
 
function AnimatedRoutes(){

    const location = useLocation()

    return(
        <AnimatePresence>

            <Routes location={location} key={location.pathname}>
            {/* Error Display */}
            <Route path="*" element={<Error404/>} />

            {/* Home Display */}
            <Route path="/" element={<Home/>} />
            <Route path="/remedios" element={<Remedie/>} />
            <Route path="/remedios/:slug" element={<PostDetail />} />
            <Route path="/search" element={<Search/>} />
            <Route path="/category/:slug" element={<Category/>} />
            <Route path="/nosotros" element={<About/>} />
            <Route path="/contacto" element={<Contact />} />
        </Routes>
        
        </AnimatePresence>
    )
}

export default AnimatedRoutes