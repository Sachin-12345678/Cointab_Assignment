import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import Post from './Post'

function Allroutes() {
  return (
    <>
    <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Post/>} path="/post/:id"/>
    </Routes>
    </>
  )
}

export default Allroutes