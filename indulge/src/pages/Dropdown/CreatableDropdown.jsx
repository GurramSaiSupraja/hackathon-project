import React from "react";
import Creatable from "react-select/creatable";

var company;

export default function CompanyName(props) {
    const [companyValue, setCompanyValue] = React.useState("Select Company");
    company = companyValue;
  function changeValue(value) {
    setCompanyValue(value);
  }

  return (
    <div>
      <Creatable
        isClearable
        onChange={(value) => changeValue(value)}
        options={props.companies}
        value={companyValue}
      />
    </div>
  );
}

export {company};
