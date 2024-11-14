import React from 'react'
import style from './layout.module.css'
import Lesson11 from '../lessons/lesson11/Lesson11'
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <header className={style.header}>
            <NavLink className={({isActive})=>(isActive ? style.linkAcytive:'')} to={"/"}>Lessons</NavLink>
            <NavLink className={({isActive})=>(isActive ? style.linkAcytive:'')} to={'homeworkpage'}>Homeworks</NavLink>
            <NavLink className={({isActive})=>(isActive ? style.linkAcytive:'')} to={'kons01'}>Консультация</NavLink>
        </header>
        <main>
            <Outlet/>
           
        </main>


    </>
  )
}
