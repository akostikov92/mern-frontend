/** @format */

import React, { useState, useContext } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';

import './Auth.css';

const Auth = props => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend
    auth.login();
  };

  return (
    <Card className='authentication'>
      <h2 className='authentication__header'>Login Required</h2>
      <hr />

      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            id='name'
            element='input'
            type='text'
            label='Name'
            validators={[VALIDATOR_REQUIRE]}
            errorText='Please enter a valid name.'
            onInput={inputHandler}
          />
        )}

        <Input
          id='email'
          element='input'
          type='email'
          label='Email'
          validators={[VALIDATOR_EMAIL]}
          errorText='Please enter a valid email.'
          onInput={inputHandler}
        />
        <Input
          id='password'
          element='input'
          type='password'
          label='Password'
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText='Please enter a valid password. Minimum five characters.'
          onInput={inputHandler}
        />
        <Button type='submit' disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button onClick={switchModeHandler} inverse>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
  );
};
export default Auth;
