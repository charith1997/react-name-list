import React, { useEffect, useState } from "react";
import NameItem from "./NameItem";

const list = [
  {
    id: { value: Math.random() },
    name: { title: "Mr", first: "Gerardo", last: "Suarez" },
    location: { country: "Spain" },
    email: "gerardo.suarez@example.com",
    dob: { date: "1994-07-08T14:34:36.061Z", age: 28 },
    picture: {
      large: "https://randomuser.me/api/portraits/men/86.jpg",
    },
  },
  {
    id: { value: Math.random() },
    name: { title: "Miss", first: "Leni", last: "Rue" },
    location: { country: "Norway" },
    email: "leni.rue@example.com",
    dob: { date: "1998-07-09T08:57:26.803Z", age: 28 },
    picture: {
      large: "https://randomuser.me/api/portraits/women/87.jpg",
    },
  },
];

const NameList = () => {
  const [nameList, setNameList] = useState(list);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setNameList(() => [...nameList, responseData.results[0]]);
      });
  }, [loadData]);

  const addNameHandler = () => {
    setLoadData(!loadData);

    // setNameList(() => nameList.concat(newName));
    // setNameList((nameList) => [...nameList, newName]);
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-primary mb-4" onClick={addNameHandler}>
        Add Name
      </button>
      <NameItem list={nameList} />
    </div>
  );
};

export default NameList;
