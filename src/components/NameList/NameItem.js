import React from "react";
import moment from "moment";

const NameItem = (props) => {
  return (
    <>
      {props.list.map((item) => (
        <div className="list-group-item" key={item.id}>
          <div className="row">
            <div className="col-lg-2">
              <img
                className="boarder rounded-circle shadow-sm"
                src={item.img}
              ></img>
            </div>
            <div className="col-lg-10 align-self-center">
              <p>{`${item.name.first_name} ${item.name.last_name}`}</p>
              <p>
                {item.country} | {moment(item.dob).format("DD-MM-YYYY")}
              </p>
              <p>{item.email}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NameItem;
