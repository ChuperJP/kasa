import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/kasa/', element: <Home /> },
      {
        element: <Logement />,
        path: '/logement/:logementId',
      },
      { path: '/about', element: <About /> },
      { path: '*', element: <Error /> },
    ],
  },
]);

export default router;
