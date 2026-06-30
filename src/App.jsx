import { Routes, Route } from "react-router";
import './App.css'
import Navbar from './components/Navbar'
import RootLayout from "./components/layout/RootLayout";
import Home from "./components/pages/Home";

function App() {

  return (
    <>
      <Routes>
          <Route element={< RootLayout />}>
            <Route path="/" element={< Home />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
