import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Root from './components/root/Root.jsx'
import ListedBooks from './components/listedBooks/ListedBooks.jsx';
import Home from './components/home/Home.jsx';
import LogIn from './components/login/LogIn.jsx';
import SignUp from './components/signUp/SignUp.jsx';
import PageToRead from './components/pageToRead/PageToRead.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/listed-books', Component: ListedBooks },
      { path: '/pages-to-read', Component: PageToRead },
      { path: 'login', Component: LogIn },
      { path: 'signup', Component: SignUp }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
