/* eslint-disable @typescript-eslint/no-explicit-any */
import {ReactNode} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import QueryProvider from './ReactQueryProvider';

interface AppProps {
  children: ReactNode;
}

const ErrorFallback = (error: any) => {
  console.log('ERROR:', error);
  return (
    <div className="text-red-500 w-screen h-screen flex flex-col justify-center items-center" role="alert">
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
    </div>
  );
};

export const AppProvider = (props: AppProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryProvider>{props.children}</QueryProvider>
    </ErrorBoundary>
  );
};
