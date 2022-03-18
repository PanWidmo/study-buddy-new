import React from 'react';

import { Wrapper } from './Root.styles';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigate to="/group" />} />
          <Route path="/group" element={<Dashboard />} />
          <Route path="/group/:id" element={<Dashboard />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = () => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
      {errors.login && <span>Login is required!</span>}
      <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password && <span>Password is required!</span>}
      <Button type="submit">Sign in</Button>
    </form>
  );
};

const Root = () => {
  const auth = useAuth();

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
