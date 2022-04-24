// import React, { Component } from "react";

// class LoginForm extends Component {
//   username = React.createRef();

//   // componentDidMount() {
//   //   this.username.current.focus();
//   // }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     //  Call the server
//     const username = this.username.current.value;
//     console.log("Submitted");
//   };

//   render() {
//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">UserName</label>
//             <input
//               autoFocus
//               ref={this.username}
//               id="username"
//               type="text"
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input id="password" type="text" className="form-control" />
//           </div>
//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// <------------------------------- Video no 115 --------------------->
// Handle username

// import React, { Component } from "react";

// class LoginForm extends Component {
//   state = {
//     account: { username: "", password: "" },
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     //  Call the server
//     console.log("Submitted");
//   };

//   handleChange = (e) => {
//     const account = { ...this.state.account };
//     account.username = e.currentTarget.value;
//     this.setState({ account });
//   };
//   // ya ham na handleChange method ko banaya ha is sa jis sa jo b name username input ma likha jae ga wo reactdevtools ma ja k account ma ja ka print ho ga ham waha pa dakh sakta hain ya sync ho jae ga us k sath
// // or ham na sirf username ko hi handle kiya ha password ko ni us k liya ham ko . notation ni bracket notation ko use karna ho ga
//   render() {
//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">UserName</label>
//             <input
//               value={this.state.account.username}
//               onChange={this.handleChange}
//               id="username"
//               type="text"
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input id="password" type="text" className="form-control" />
//           </div>
//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// <------------------------------- Video no 116 --------------------->
// Handle multiple Element like username and password etc
// or ham na sirf username ko hi handle kiya ha password ko ni us k liya ham ko . notation ni bracket notation ko use karna ho ga

// import React, { Component } from "react";

// class LoginForm extends Component {
//   state = {
//     account: { username: "", password: "" },
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     //  Call the server
//     console.log("Submitted");
//   };

//   handleChange = ({currentTarget : input}) => {
//     const account = { ...this.state.account };
//     account[input.name] = input.value;
//     this.setState({ account });
//   };
//   // or ham na sirf username ko hi handle kiya ha password ko ni us k liya ham ko . notation ni bracket notation ko use karna ho ga
//   render() {
//  const {account} = this.state;

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">UserName</label>
//             <input
//               value={account.username}
//               onChange={this.handleChange}
//               id="username"
//               name="username"
//               type="text"
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               value={account.password}
//               onChange={this.handleChange}
//               name="password"
//               id="password"
//               type="text"
//               className="form-control"
//             />
//           </div>
//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// // < --------------- Video 118 -------------->
// //  Reusable Components

// import React, { Component } from "react";
// import Input from "./common/input";

// class LoginForm extends Component {
//   state = {
//     account: { username: "", password: "" },
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     //  Call the server
//     console.log("Submitted");
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const account = { ...this.state.account };
//     account[input.name] = input.value;
//     this.setState({ account });
//   };
//   // or ham na sirf username ko hi handle kiya ha password ko ni us k liya ham ko . notation ni bracket notation ko use karna ho ga
//   render() {
//     const { account } = this.state;

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={account.username}
//             label="Username"
//             onChange={this.handleChange}
//           />
//           <Input
//             name="password"
//             value={account.password}
//             label="Password"
//             onChange={this.handleChange}
//           />

//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// // < --------------- Video 119 -------------->
// //         Validation :   if user enter the input wrong like username is wrong it will display a short message like username is compusory or incorrevt .

// import React, { Component } from "react";
// import Input from "./common/input";

// class LoginForm extends Component {
//   state = {
//     account: { username: "", password: "" },
//     errors: {},
//   };

//   validate = () => {
//     const errors = {};

//     const { account } = this.state;
//     if (account.username.trim() === "")
//       errors.username = "Username is required.";
//     if (account.password.trim() === "")
//       errors.password = "Password is required.";

//     return Object.keys(errors).length === 0 ? null : errors;
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = this.validate();
//     console.log(errors);
//     this.setState({ errors });
//     if (errors) return;

//     //  Call the server
//     console.log("Submitted");
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const account = { ...this.state.account };
//     account[input.name] = input.value;
//     this.setState({ account });
//   };
//   // or ham na sirf username ko hi handle kiya ha password ko ni us k liya ham ko . notation ni bracket notation ko use karna ho ga
//   render() {
//     const { account } = this.state;

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={account.username}
//             label="Username"
//             onChange={this.handleChange}
//           />
//           <Input
//             name="password"
//             value={account.password}
//             label="Password"
//             onChange={this.handleChange}
//           />

//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// // < --------------- Video 121 -------------->
// //  <                Displaying a validation error  >

// import React, { Component } from "react";
// import Input from "./common/input";

// class LoginForm extends Component {
//   state = {
//     account: { username: "", password: "" },
//     errors: {},
//   };

//   validate = () => {
//     const errors = {};

//     const { account } = this.state;
//     if (account.username.trim() === "")
//       errors.username = "Username is required.";
//     if (account.password.trim() === "")
//       errors.password = "Password is required.";

//     return Object.keys(errors).length === 0 ? null : errors;
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = this.validate();
//     this.setState({ errors: errors || {} });
//     if (errors) return;

//     //  Call the server
//     console.log("Submitted");
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const account = { ...this.state.account };
//     account[input.name] = input.value;
//     this.setState({ account });
//   };
//   // or ham na sirf username ko hi handle kiya ha password ko ni us k liya ham ko . notation ni bracket notation ko use karna ho ga
//   render() {
//     const { account, errors } = this.state;

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={account.username}
//             label="Username"
//             onChange={this.handleChange}
//             error={errors.username}
//           />
//           <Input
//             name="password"
//             value={account.password}
//             label="Password"
//             onChange={this.handleChange}
//             error={errors.password}
//           />

//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// // < --------------- Video 122 -------------->
// //  <                Validation on Change : change hona pa validation   >

// import React, { Component } from "react";
// import Input from "./common/input";

// class LoginForm extends Component {
//   state = {
//     account: { username: "", password: "" },
//     errors: {},
//   };

//   validate = () => {
//     const errors = {};

//     const { account } = this.state;
//     if (account.username.trim() === "")
//       errors.username = "Username is required.";
//     if (account.password.trim() === "")
//       errors.password = "Password is required.";

//     return Object.keys(errors).length === 0 ? null : errors;
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = this.validate();
//     this.setState({ errors: errors || {} });
//     if (errors) return;

//     //  Call the server
//     console.log("Submitted");
//   };

//    validateProperty = ({ name, value}) => {
//      if (name === 'username') {
//        if (value.trim() ==='') return 'Username is requred';
//        // ...
//      }
//      if (name === 'password') {
//        if (value.trim() ==='') return 'Password iss requred';
//        // ...
//      }
//    }

//   handleChange = ({ currentTarget: input }) => {

//     const errors = {...this.state.errors}
//     const errorMessage = this.validateProperty(input);
//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const account = { ...this.state.account };
//     account[input.name] = input.value;
//     this.setState({ account, errors});
//   };
//   // or ham na sirf username ko hi handle kiya ha password ko ni us k liya ham ko . notation ni bracket notation ko use karna ho ga
//   render() {
//     const { account, errors } = this.state;

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={account.username}
//             label="Username"
//             onChange={this.handleChange}
//             error={errors.username}
//           />
//           <Input
//             name="password"
//             value={account.password}
//             label="Password"
//             onChange={this.handleChange}
//             error={errors.password}
//           />

//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// < --------------- Video 123 -------------->
//  <               Joi  :  To implement validation rule we need to use joi library which is very powerfull    >
//  <               Joi  :  Joi requires  Schema just like of state object
//  <               Joi  :  For example , username jo ha wo string ma hona chahya or username ki length minimum 3 or maximum 30 characters honi chahya

// import React, { Component } from "react";
// import Joi from "joi-browser";
// import Input from "./common/input";

// class LoginForm extends Component {
//   state = {
//     account: { username: "", password: "" },
//     errors: {},
//   };

//   schema = {
//     username: Joi.string().required(),
//     password: Joi.string().required(),
//   };

//   validate = () => {
//     const result = Joi.validate(this.state.account, this.schema, {
//       abortEarly: false,
//     });
//     console.log(result);

//     const errors = {};

//     const { account } = this.state;
//     if (account.username.trim() === "")
//       errors.username = "Username is required.";
//     if (account.password.trim() === "")
//       errors.password = "Password is required.";

//     return Object.keys(errors).length === 0 ? null : errors;
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = this.validate();
//     this.setState({ errors: errors || {} });
//     if (errors) return;

//     //  Call the server
//     console.log("Submitted");
//   };

//   validateProperty = ({ name, value }) => {
//     if (name === "username") {
//       if (value.trim() === "") return "Username is requred";
//       // ...
//     }
//     if (name === "password") {
//       if (value.trim() === "") return "Password iss requred";
//       // ...
//     }
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const errors = { ...this.state.errors };
//     const errorMessage = this.validateProperty(input);
//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const account = { ...this.state.account };
//     account[input.name] = input.value;
//     this.setState({ account, errors });
//   };
//   // or ham na sirf username ko hi handle kiya ha password ko ni us k liya ham ko . notation ni bracket notation ko use karna ho ga
//   render() {
//     const { account, errors } = this.state;

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={account.username}
//             label="Username"
//             onChange={this.handleChange}
//             error={errors.username}
//           />
//           <Input
//             name="password"
//             value={account.password}
//             label="Password"
//             onChange={this.handleChange}
//             error={errors.password}
//           />

//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// < --------------------------Video 124 + 125 ---------------------------->
//  <  -------- Validating a form using Joi -------->
// import React, { Component } from "react";
// import Joi from "joi-browser";
// import Input from "./common/input";

// class LoginForm extends Component {
//   state = {
//     account: { username: "", password: "" },
//     errors: {},
//   };

//   schema = {
//     username: Joi.string().required().label("Username"),
//     password: Joi.string().required().label("Password"),
//   };

//   validate = () => {
//     const options = { abortEarly: false };
//     const { error } = Joi.validate(this.state.account, this.schema, options);
//     if (!error) return null;

//     const errors = {};
//     for (let item of error.details) errors[item.path[0]] = item.message;
//     return errors;
//   };

//   validateProperty = ({ name, value }) => {
//     const obj = { [name]: value };
//     const schema = { [name]: this.schema[name] };
//     const { error } = Joi.validate(obj, schema);
//     return error ? error.details[0].message : null;
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = this.validate();
//     this.setState({ errors: errors || {} });
//     if (errors) return;

//     //  Call the server
//     console.log("Submitted");
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const errors = { ...this.state.errors };
//     const errorMessage = this.validateProperty(input);
//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const account = { ...this.state.account };
//     account[input.name] = input.value;
//     this.setState({ account, errors });
//   };
//   // or ham na sirf username ko hi handle kiya ha password ko ni us k liya ham ko . notation ni bracket notation ko use karna ho ga
//   render() {
//     const { account, errors } = this.state;

//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={account.username}
//             label="Username"
//             onChange={this.handleChange}
//             error={errors.username}
//           />
//           <Input
//             name="password"
//             value={account.password}
//             label="Password"
//             onChange={this.handleChange}
//             error={errors.password}
//           />

//           <button disabled={this.validate()} className="btn btn-primary">
//             Login
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;

// < --------------------- Video 128 --------------------->
//  < ------------ Extracting a reusable Form ------------------>
import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //  Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}  
        </form>
      </div>
    );
  }
}

export default LoginForm;
