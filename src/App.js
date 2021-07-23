import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Appbar from './core/Appbar';
import SiteContent from './core/SiteContent';
import { Layout } from 'antd';
import './index.css';
import { UserProvider } from './context/UserContext';
import MainRouter from './MainRouter';

import './App.less';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Layout>
          <BrowserRouter>
            <Appbar />
            <SiteContent>
              <MainRouter />
            </SiteContent>
          </BrowserRouter>
        </Layout>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
