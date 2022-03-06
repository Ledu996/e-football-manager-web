import React  from 'react';
import { BrowserRouter, Route, Routes, Switch, Redirect } from 'react-router-dom';
import LogIn from '../Authentication/LogIn/login';
import Registration from '../Authentication/Registration/registration';
import TeamSelection from '../Authentication/teamSelection/index';
import Landing from '../Landing';
import Schedule from '../Dashboard/schedule/schedule';
import Standings from '../Dashboard/standings/index';
import MenagerInfo from '../Dashboard/Manager_Info';
import Main from '../Dashboard/main';
import Game from '../Dashboard/Game/index';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path = '/' element={<Landing />} />
            <Route path = 'login' element={<LogIn />} />
            <Route path = 'signup' element={<Registration />} />
            <Route path = '/team' element={<TeamSelection />} />
            <Route path = '/dashboard' element={<Main/>}/>
            <Route path = '/dashboard/menagerInfo' element={<MenagerInfo />} />
            <Route path = '/dashboard/schedule' element={<Schedule />} />
            <Route path = '/dashboard/standings' element={<Standings />} />
            <Route path = '/dashboard/game' element={<Game />} />

           </Routes>
        </BrowserRouter>
    );
}


export default Router;