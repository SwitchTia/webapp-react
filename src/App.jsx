
import './App.css'
import MoviesPage from './pages/MoviesPage';
import HomePage from './pages/HomePage';
import DefaultLayout from './layouts/DefaultLayout';
import NotFoundPage from './pages/NotFoundPage';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesDetailsPage from './pages/MovieDetailsPage';
import { GlobalProvider } from './context/GlobalContext';


function App() {
  const nameApp = "Movies App";
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout nameApp={nameApp} />}>
              <Route element={<HomePage />} path="/" />
              <Route element={<MoviesPage />} path="/movies" />
              <Route element={<MoviesDetailsPage />} path="/movies/:slug" />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;