import { useState } from "react";
import MyButton from "../components/myButton/MyButton";
import "./kons01.css";

export default function Kons01() {
   const[joke, setJoke]= useState<string|undefined>(undefined)
   const[error, setError]= useState<string|undefined>(undefined)

    


  return (
    <div className="kons01Wrapper">
      <div className="card">
        <div className="jokesKontainer">
            <p className="text"></p>
            <p className="text"></p>
        </div>
        <MyButton text="Get random Joke" type="button" />
      </div>
    </div>
  );
}
