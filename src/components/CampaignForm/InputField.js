import React from "react";

{/* <input
type="text"
onChange={(e) => onChange("name", e.target.value)}
className="form-control"
id="Name"
placeholder={`${editOrAdd} name`}
/> */}

const InputField = ({ type, name, id, onChange }) => {
  return <input type={type} id={id} name={name} onChange={onChange} />;
};

export default InputField