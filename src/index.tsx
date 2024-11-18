
import ReactDOM from 'react-dom/client';
import './index.css';

import Lesson06 from './lessons/lesson06/Lesson06';
import Lesson07 from './lessons/lesson07/Lesson07';
import MyButton from './components/myButton/MyButton';
import Lesson04 from './lessons/lesson04/Lesson04';
import Lesson05 from './lessons/lesson05/Lesson05';
import Lesson08 from './lessons/lesson08/Lesson08';
import FetchDog from './components/fetchdog/FetchDog';
import Homework08 from './homeworks/homework_08/Homework08';
import Lesson09 from './lessons/lesson09/Lesson09';
import Kons01 from './konsultacia/Kons01';
import Lesson10 from './lessons/lesson10/Lesson10';
import Lesson101 from './lessons/lesson10/1/Lesson101';
import Lesson11 from './lessons/lesson11/Lesson11';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import HeroGalery from './components/herogalery/HeroGalery';
import {heroes} from './lessons/lesson05/data'
import './lessons/lesson05/Lesson05'
import Homepage from './components/homepage/Homepage';
import Lesson02 from './lessons/lesson02/lesson_02';
import Lesson03 from './lessons/lesson03/Lesson03';
import Homeworkpage from './components/homeworkpage/Homeworkpage';
import Lesson12 from './lessons/lesson12/Lesson12';
import Homework12 from './homeworks/homework_12/Homework12';
import Lesson13 from './lessons/lesson13/Lesson13';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
  <Routes>
  <Route path='/' element={<Layout/>}>
  <Route path='/' element={<Homepage/>}/>
  <Route path='lesson02' element={<Lesson02/>}/>
  <Route path='lesson03' element={<Lesson03/>}/>
  <Route path='lesson04' element={<Lesson04/>}/>
  <Route path='lesson05' element={<Lesson05/>}/>
  <Route path='lesson06' element={<Lesson06/>}/>
  <Route path='lesson07' element={<Lesson07/>}/>
  <Route path='lesson08' element={<Lesson08/>}/>
  <Route path='lesson09' element={<Lesson09/>}/>
  <Route path='lesson10' element={<Lesson101/>}/>
  <Route path='lesson12' element={<Lesson12/>}/>
  <Route path='lesson13' element={<Lesson13/>}/>
  <Route path='homeworkpage' element={<Homeworkpage/>}/>
  <Route path='homeworkpage/homework08' element={<Homework08/>}/>
  <Route path='homeworkpage/homework10' element={<Lesson101/>}/>
  <Route path='homeworkpage/homework12' element={<Homework12/>}/>
 
  <Route path='kons01' element={<Kons01/>}/>
  </Route>
  </Routes>
  </HashRouter>
    
 
);


