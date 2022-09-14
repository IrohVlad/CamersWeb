import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter.jsx';
import Header from './components/Header.jsx';
import Footer from './components/footer.jsx';
import './index.scss';

const App = () => {
    return (
    <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
    </BrowserRouter>
    );
};

export default App;