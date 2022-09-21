import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SelectTag.css";
const SelectTag = ({ gameData }) => {
  const [search, setsearch] = useState("");
  const [show, setshow] = useState(false);
  const [lable, setlabel] = useState(false);
  const [value, setvalue] = useState(false);
  const [inputselect, setSelect] = useState({});

  const handlecheck = (e) => {
    const { value, type, name } = e.target;
    console.log(value, type, name);
    if (type === "checkbox") {
      setSelect({
        ...inputselect,
        [name]: value,
      });
    } else {
      setSelect({
        ...inputselect,
        [name]: value,
      });
    }
  };

  return (
    <div className="main-div">
      <button
        className="button-30"
        onClick={() => {
          setvalue(!value);
        }}
        role="button"
      >
        Change Style
      </button>
      <div className="input-div">
        <input
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          type="search"
          onFocus={() => {
            setshow(true);
          }}
        ></input>
      </div>

      {show && (
        <div className="content-div">
          {gameData
            .filter((e) => e.title.toLowerCase().includes(search))
            .map((e) => (
              <div key={e.id}>
                <label className={value ? "container-c" : "container"}>
                  <p>{e.title}</p>
                  <input
                    type="checkbox"
                    onChange={handlecheck}
                    name="game"
                    value={e.title}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SelectTag;
