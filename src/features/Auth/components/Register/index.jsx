import React from 'react';
import RegisterForm from '../RegisterForm';

function Register(props) {
  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
