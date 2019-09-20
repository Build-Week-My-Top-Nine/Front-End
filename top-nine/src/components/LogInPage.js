import React from "react";
import { withFormik, Field, Form } from "formik";
// import styled from 'styled-components';



const Login = props => {
  const { touched, errors, handleChange, handleSubmit } = props;
  console.log("something");
  return (
    <Form className='Form' onSubmit={handleSubmit}>
      <Field className="Field"
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
      {errors.email && touched.email && <div id="feedback">{errors.email}</div>}
      <Field className="Field"
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"
      />
      {errors.password && touched.password && <div id="feedback">{errors.password}</div>}
      <button className="button" type="submit">Login</button>
    </Form>
  
  );
};

const LoginForm = withFormik({
  mapPropsToValues: () => ({ name: '' }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm',
})(Login);


export default LoginForm;
