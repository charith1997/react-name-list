import React from "react";
import moment from "moment";

const NameItem = (props) => {
  return (
    <>
      {props.list.map((item) => (
        <div className="list-group-item" key={item.id.value}>
          <div className="row">
            <div className="col-lg-2">
              <img
                className="boarder rounded-circle shadow-sm"
                src={item.picture.large}
              ></img>
            </div>
            <div className="col-lg-10 align-self-center">
              <p>{`${item.name.first} ${item.name.last}`}</p>
              <p>
                {item.location.country} |{" "}
                {moment(item.dob.date).format("DD-MM-YYYY")}
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
