import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header,Nodes} from './Components/Index';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="w-full h-115 flex flex-wrap">
     <Header></Header>
    <div className="flex justify-center items-start w-4/5 h-full border-r border-gray-200 border-1  flex-wrap">
    <Nodes></Nodes>
    </div>
    <div className="w-1/5 ">
    <Outlet></Outlet>
    </div>
    </div>
   )
}

export default App
