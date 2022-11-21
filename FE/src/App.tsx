import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from 'react-router-dom';
import Scene from 'layout/Scene';
import Home from 'Scene/Home';
import { SAJ_LOCATIONS } from 'app/constants';
import Footer from 'layout/Footer';
import City from 'Scene/City';
import { AnimatePresence } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import Akademik from 'Scene/Akademik';

import Navbar from './layout/Navbar';
import NotFound from './Scene/NotFound';


const AppBody = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes
                key={location.pathname}
                location={location}
            >
                <Route
                    element={
                        <Scene>
                            <Home />
                        </Scene>}
                    path="/"
                />
                {SAJ_LOCATIONS.map(item => (
                    <Route
                        element={<Scene><City city={item} /></Scene>}
                        key={item}
                        path={`/${item}`}
                    />
                ))}

                <Route
                    element={<Scene><Akademik /></Scene>}
                    key={'akademik'}
                    path={'/akademik'}
                />
                <Route
                    element={<NotFound />}
                    path={'/404'}
                />
            </Routes>
        </AnimatePresence>
    );
};

const App = () => {
    return (
        <Router>
            <Box
                background="background"
                className="App"
            >
                <Navbar />
                <AppBody />
                <Footer />
            </Box>
        </Router>
    );
};


export default App;
