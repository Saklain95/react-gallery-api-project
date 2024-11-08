import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomRoutes from './routes/Customroutes'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <h1 className="main-title">
        <Link to="/">React-Api Gallery project</Link>
      </h1>
      <CustomRoutes/>
    </>
  );
}

export default App;
