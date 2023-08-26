import React from "react";

export default function Alert(props) {

    const setAlertType = (mode) => {
        return mode === 'dark'? 'primary' : 'success' ;
    }

  return (
    props.alert &&
    <div className={`alert alert-${setAlertType(props.mode)} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong> {props.alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  );
}
