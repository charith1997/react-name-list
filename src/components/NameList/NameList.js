import React from "react";
import NameItem from "./NameItem";

const NameList = () => {
  const nameList = [
    {
      id: Math.random(),
      name: {
        first_name: "Gerardo",
        last_name: "Suarez",
      },
      country: "Spain",
      email: "gerardo.suarez@example.com",
      dob: "1994-07-08T14:34:36.061Z",
      img: "https://randomuser.me/api/portraits/men/86.jpg",
    },
    {
      id: Math.random(),
      name: {
        first_name: "Leni",
        last_name: "Rue",
      },
      country: "Norway",
      email: "leni.rue@example.com",
      dob: "1998-07-09T08:57:26.803Z",
      img: "https://randomuser.me/api/portraits/women/87.jpg",
    },
  ];

  return (
    <div className="container mt-4">
      <NameItem list={nameList} />
    </div>
  );
};

export default NameList;
