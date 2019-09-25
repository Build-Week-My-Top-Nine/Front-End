import React from "react";
import axios from "axios";
import { withFormik, Field, Form } from "formik";

const Login = props => {
  console.log(window.location.pathname);
  const { touched, errors, handleChange, handleSubmit } = props;
  return (
    <Form className="Form" onSubmit={handleSubmit}>
      <Field
        className="Field"
        type="text"
        onChange={handleChange}
        name="username"
        placeholder="username"
      />
      {errors.email && touched.email && <div id="feedback">{errors.email}</div>}
      <Field
        className="Field"
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"
      />
      {errors.password && touched.password && (
        <div id="feedback">{errors.password}</div>
      )}
      <button className="button" type="submit">
        {window.location.pathname === "/login" ? "Login" : "SignUp"}
      </button>
    </Form>
  );
};

const LoginForm = withFormik({
  mapPropsToValues: () => {
    return {
      username: "",
      password: ""
    };
  },

  handleSubmit: (values, { setSubmitting }) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 1000);
    console.log(values);
    window.location.pathname === "/login"
      ? axios
          .post("https://mytopnineapi.herokuapp.com/api/auth/login", values)
          .then(res => console.log(res.data))
          .catch(err => console.error(err.response))
      : axios
          .post("https://mytopnineapi.herokuapp.com/api/auth/register", values)
          .then(res => console.log(res.data))
          .catch(err => console.error(err.response));
  },

  displayName: "BasicForm"
})(Login);

export default LoginForm;
