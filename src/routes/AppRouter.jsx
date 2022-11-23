import { Route, Routes } from 'react-router-dom';
import { DetailsEpisode, Navbar } from '../components';
import {CharactersPage, EpisodesPage, DeathsPage, DetailsCharactersPage, QuotesPage} from '../Pages';
import { DetailsEpisodePage } from '../Pages/DetailsEpisodePage';
import '../App.css';

export const AppRouter = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path='/' element={<CharactersPage />}/>

            <Route path='/characters'>
                <Route index element={<CharactersPage />}/>
                <Route path=':id' element={<DetailsCharactersPage />}/>
            </Route>

            <Route path='/episodes'>
                <Route index element={<EpisodesPage />}/>
                <Route path=':id' element={<DetailsEpisodePage />}/>
            </Route>

            <Route path='/deaths' element={<DeathsPage />}/>
            <Route path='/quotes' element={<QuotesPage />}/>

            <Route path='*' element={<h1>Error 404 Page not found!!!</h1>}/>
        </Routes>
    </>
  );
};