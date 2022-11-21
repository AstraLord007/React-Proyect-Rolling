import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components'
import {CharactersPage, EpisodesPage, DeathsPage, DetailsCharactersPage, QuotesPage} from '../Pages'

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

            <Route path='/episodes' element={<EpisodesPage />}/>
            <Route path='/deaths' element={<DeathsPage />}/>
            <Route path='/quotes' element={<QuotesPage />}/>




            <Route path='*' element={<h1>404 Page not found</h1>}/>
        </Routes>
    </>
  )  
}