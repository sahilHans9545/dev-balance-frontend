import { createBrowserRouter, RouterProvider } from 'react-router';
import { SnackbarProvider } from 'notistack';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import VerifyEmail from './pages/VerifyEmail';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
    loader: undefined, // TODO : Add a loader for all routes
  },
  {
    path: '/signup',
    Component: Signup,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/verify-email',
    Component: VerifyEmail,
  },
]);
function App() {
  return (
    <>
      <SnackbarProvider />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
