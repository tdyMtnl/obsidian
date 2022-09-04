import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Personagens from './pages/Personagens';
import Cartas from './pages/Cartas';
import Home from './pages/Home';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path='/cartas' element={<Cartas/>}/>  
                <Route path='/personagens' element={<Personagens/>}/>
            </Routes>
        </BrowserRouter>
    );
}