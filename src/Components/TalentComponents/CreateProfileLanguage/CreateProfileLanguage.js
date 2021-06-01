/* eslint-disable no-mixed-operators */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateUserData } from "../../../Network/Network";
import AddLanguage from "../AddLanguage/AddLanguge";
import NewLang from "../NewLang/NewLang";

export default function CreateProfileLanguage({ setBtns, btns }) {

  const [language, setLanguage] = useState("");
  const [addlang, setaddlang] = useState(false);
  const [languagesList, setlanguagesList] = useState([]);

  const toggleAddLang = () => {
    setaddlang(!addlang);
  };

  const lang = ({ target }) => {
    setLanguage(target.value);
  };

  const updateUser = () => {
    updateUserData("talent", {
      englishProficiency: language,
      englishProficiencyAr: language === "English proficiency" ? "إجادة اللغة الإنجليزية" : language === "Basic" ? "أساسي": language ==="Conversational"? "محادثة":language ==="Fluent"? "فصيح":"اللغة الأم",
      otherLanguages: languagesList,
      profileCompletion: 50,
    });
    console.log(language);
    console.log(languagesList);
    setBtns({ ...btns, hourlyRate: false })
  };

  const addlangToList = newLang => {
    languagesList.push(newLang);
    setlanguagesList([...languagesList]);
  };

  const deleteLang = index => setlanguagesList(
    languagesList.filter(ele => languagesList.indexOf(ele) !== index)
  );

  return (
    <section className=" bg-white border rounded mt-3 pt-4">
      <div className="border-bottom ps-4 pb-3">
        <h4>Languages</h4>
      </div>
      <div className="p-4 my-3">
        <p className="fw-bold">What is your English proficiency? <span className="text-danger">*</span></p>
        <select
          className="form-select form-select-lg mb-3 shadow-none w-50"
          aria-label=".form-select-lg example"
          onChange={lang}
        >
          <option defaultValue value="English proficiency">English proficiency</option>
          <option value="Basic">Basic</option>
          <option value="Conversational">Conversational</option>
          <option value="Fluent">Fluent</option>
          <option value="Native">Native</option>
        </select>
        {addlang ? (
          <NewLang
            toggleAddLang={toggleAddLang}
            addlangToList={addlangToList}
          />
        ) : (
          <AddLanguage
            toggleAddLang={toggleAddLang}
            languagesList={languagesList}
            deleteLang={deleteLang}
          />
        )}
      </div>
      <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
        <button className="btn">
          <Link
            className="btn border text-success me-4 px-5 fw-bold"
            to="/create-profile/education-and-employment"
          >
            Back
        </Link>
        </button>
        <button className={`btn ${language === "" || language === "English proficiency" ? "disabled" : ""}`}>
          <Link
            className="btn bg-upwork px-5"
            to="/create-profile/hourly-rate"
            onClick={updateUser}
          >
            Next
        </Link>
        </button>
      </div>
    </section>
  );
}
