// < Vidoe 118 Extracting a Reusaable Input >
//  is ma ham na  na login form sa name or password components ko utha ka props ma la ka aye ha matlb k ak naya component banaya ha jis sa props ko destruture kiya ha or properties ko extract kiya ha

// import React from "react";

// const Input = ({ name, label, value, onChange }) => {
//   return (
//     <div className="form-group">
//       <label htmlFor={name}>{label}</label>
//       <input
//         value={value}
//         onChange={onChange}
//         id={name}
//         name={name}
//         type="text"
//         className="form-control"
//       />
//     </div>
//   );
// };

// export default Input;

// <  --------------------------------  Video 129------------------->
//  < ---------------------Login Form --------->

import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest} //we use the rest operators to get the prop input properties
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
