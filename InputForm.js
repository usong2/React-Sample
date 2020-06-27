import React, { useState } from "react";

function InputForm() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
    age: "",
  });

  const { name, nickname, age } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = (e) => {
    setInputs({
      name: "",
      nickname: "",
      age: "",
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
      />
      <input
        type="text"
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <input
        type="text"
        name="age"
        placeholder="나이"
        onChange={onChange}
        value={age}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name}({nickname}){age}
      </div>
    </div>
  );
}

export default InputForm;
