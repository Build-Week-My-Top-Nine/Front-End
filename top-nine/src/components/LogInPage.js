import React from "react";
import { withFormik, Field, Form } from "formik";
import styled from 'styled-components';

const FormStyle = styled.form`
display: flex;
flex-direction: row rowwrap;
justify-content: center;
  display: inline-block;
  border-radius: 10px;
  margin: 0auto;
  height: 150px;
`;
const FeildStyle = styled.input`

`;

const Login = props => {
  const { touched, errors, handleChange, handleSubmit } = props;
  console.log("something");
  return (
    <FormStyle className='Form' onSubmit={handleSubmit}>
      <FeildStyle
        type="email"
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
      {errors.email && touched.email && <div id="feedback">{errors.email}</div>}
      <FeildStyle
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"
      />
      {errors.password && touched.password && <div id="feedback">{errors.password}</div>}
      <button type="submit">Login</button>
    </FormStyle>
  
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
// return (

//         <Form>
//         <Field type="email" name="email" placeholder="Email" />
//         <Field type="password" name="password" placeholder="Password" />
//         </Form>
// );

export default LoginForm;
