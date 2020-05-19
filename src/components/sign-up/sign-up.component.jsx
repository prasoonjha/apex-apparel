import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords do not match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="sign-up">
        <h2 classname="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            handleChange={this.handleChange}
            value={this.state.displayName}
            required
          />

          <FormInput
            type="email"
            name="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
