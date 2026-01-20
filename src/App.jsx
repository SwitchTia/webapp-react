
import './App.css'
import MoviesPage from './pages/MoviesPage';
import HomePage from './pages/HomePage';
import DefaultLayout from './layouts/DefaultLayout';


import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const nameApp = "Movies App";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout nameApp={nameApp} />}>
            <Route element={<HomePage />} path="/" />
            <Route element={<MoviesPage />} path="/movies" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;