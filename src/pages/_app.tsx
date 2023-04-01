import '../styles/global.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import AuthProtect from '@/components/AuthProtect';
import MessageProvider from '@/components/MessageProvider';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <AuthProtect>
      <MessageProvider>
        <Component {...pageProps} />
      </MessageProvider>
    </AuthProtect>
  </QueryClientProvider>
);

export default MyApp;
