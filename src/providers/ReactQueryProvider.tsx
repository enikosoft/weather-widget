/* eslint-disable @typescript-eslint/no-explicit-any */
import {ReactNode} from 'react';
import {DefaultOptions, QueryClient, QueryClientProvider, UseQueryOptions} from 'react-query';
import {PromiseValue} from 'type-fest';

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60,
  },
};

export const queryClient = new QueryClient({defaultOptions: queryConfig});

export type ExtractFnReturnType<FnType extends (...args: any) => any> = PromiseValue<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;

export const QueryProvider = ({children}: {children: ReactNode}) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
