import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './Pages/sign-in';
import SignUp from './Pages/sign-up';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <SignIn/> } />
            <Route path='/SignUp' element={ <SignUp/> } />
            
        </Routes>
    </BrowserRouter>
);

export default Rotas;