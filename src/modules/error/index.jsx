import React from 'react';

const ErrorPage = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return <>404</>;
  }
  return <>{error.statusText || error.message}</>;
};

export default ErrorPage;
