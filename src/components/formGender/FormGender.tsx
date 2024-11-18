import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import style from "./formGender.module.css";

interface IFormGender {
  name: string | undefined;
}

export default function FormGender() {
  const [name, setName] = useState<string | undefined>(undefined);

  const getRandomName = (name: string | undefined) => {
    fetch(`https://api.genderize.io/?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        console.log(data);
        
      });
  };

  

  const formik = useFormik({
    initialValues: { name: ""} as IFormGender,
    onSubmit: (values:IFormGender , { resetForm }) => {
        getRandomName(values.name);
        resetForm();
      },
  });

  return (
    <div>
      <form className={style.formContainer} onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          name="name"
          type="text"
          placeholder='введите имя'
        />
        <MyButton text="Отправить" type="submit"/>
      </form>

      <div></div>
    </div>
  );
}

