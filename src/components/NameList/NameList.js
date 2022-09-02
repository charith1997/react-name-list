import React from "react";

const NameList = () => {
  const nameList = [
    {
      name: {
        first_name: "Gerardo",
        last_name: "Suarez",
      },
      country: "Spain",
      email: "gerardo.suarez@example.com",
      dob: "1994-07-08T14:34:36.061Z",
    },
    {
      name: {
        first_name: "Leni",
        last_name: "Rue",
      },
      country: "Norway",
      email: "leni.rue@example.com",
      dob: "1998-07-09T08:57:26.803Z",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="list-group-item">
        <div className="row">
          <div className="col-lg-2">
            <img
              className="boarder rounded-circle shadow-sm"
              src="https://randomuser.me/api/portraits/men/86.jpg"
            ></img>
          </div>
          <div className="col-lg-10 align-self-center">
            <p>Gerardo Suarez</p>
            <p>Spain | 1994-07-08T14:34:36.061Z</p>
            <p>gerardo.suarez@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameList;
