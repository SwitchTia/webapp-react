
import './App.css'
import MoviesPage from './pages/MoviesPage';
import Home from './pages/Home';
import DefaultLayout from './layouts/DefaultLayout';


import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const nameApp = "Movies App";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout nameApp={nameApp} />}>
            <Route element={<Home />} path="/" />
            <Route element={<MoviesPage />} path="/movies" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;