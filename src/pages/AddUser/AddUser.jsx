import React from "react";
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employees/actionCreators";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./AddUser.module.scss";

const AddUser = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [birthday, setBirthday] = useState(null);
  const dispatch = useDispatch();

  const createNewuser = () => {
    const newUser = {
      id: uuidv4(),
      name: name,
      lastName: lastName,
      email: email,
      position: position,
    };
    dispatch(addEmployee(newUser));
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Position:
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <label>
        Birthday:
        <DatePicker
          selected={birthday}
          onChange={(date) => setBirthday(date)}
          dateFormat="dd/MM/yyyy"
        />
      </label>
      <button type="submit" onClick={createNewuser}>
        Save
      </button>
    </div>
  );
};

export default AddUser;
