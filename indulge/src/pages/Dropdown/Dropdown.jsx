import React from "react";
import Select from "react-select";

var company="select";

export default function CompanyName(props) {
  return (
    <div>
      <label htmlFor="Login page "></label>
      <Select options={props.companies} onChange={(value)=> {company=value.value}}></Select>
    </div>
  );
}


export {company};