import React from 'react';
import { useSelector } from 'react-redux';
import { TokenSelector } from '@modules/authentication/profileStore';

function PrivateLogin(Component: React.ComponentType<any | string>) {
  const { token } = useSelector(TokenSelector);
  return (
    <>
      <Component privateLogin={!!token} />
    </>
  );
}

export default PrivateLogin;
