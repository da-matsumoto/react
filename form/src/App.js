import React, {useState} from "react";

const InputText = () => {
  const [inputTextValue, setInputTextValue] = useState("");

  const [text, setText] = useState("JavaScript");

  const handleChange = (e) => setInputTextValue(e.target.value);

  const handleClick = () => {
    setText(inputTextValue);
    setInputTextValue("");
  };

  return (
    <div className="App">
      <h1>I love {text}!!</h1>
      <input type="text" value={inputTextValue} onChange={handleChange} />
      <input type="button" value="入力" onClick={handleClick} />
    </div>
  );
};

const InputSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState("HTML");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <p>
        現在選択されている値：
        <b>{selectedValue}</b>
      </p>

      <select value={selectedValue} onChange={handleChange}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>
    </div>
  );
}

const InputCheckBox = () => {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleChange = (e) => {
    if (checkedValues.includes(e.target.value)) {
      setCheckedValues(
        checkedValues.filter((checkedValue) => 
          checkedValue !== e.target.value
        )
      );
    } else {
      setCheckedValues([...checkedValues, e.target.value]);
    }
  };

  return (
    <div className="App">
      <p>
        現在選択されている値:
        <b>{checkedValues.join("、")}</b>
      </p>
      <label>
        <input type="checkbox" value="マウス" onChange={handleChange} checked={checkedValues.includes("マウス")} />
        マウス
      </label>
      <label>
        <input type="checkbox" value="モニター" onChange={handleChange} checked={checkedValues.includes("モニター")} />
        モニター
      </label>
      <label>
        <input type="checkbox" value="キーボード" onChange={handleChange} checked={checkedValues.includes("キーボード")} />
        キーボード
      </label>
    </div>
  );
}

export default function App() {
  return <InputCheckBox />;
}