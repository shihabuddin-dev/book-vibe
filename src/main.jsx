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
import ViewDetails from './components/listedBooks/ViewDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: ()=>fetch('books.json'),
        Component: Home
      },
      { 
        path: '/listed-books',
        loader: ()=>fetch('books.json'), 
        Component: ListedBooks 
      },
      {
        path: '/listed-books/:bookId',
        loader: ()=>fetch('books.json'), 
        Component: ViewDetails,
      },
      { path: '/page-to-read', Component: PageToRead },
      { path: 'login', Component: LogIn },
      { path: 'signup', Component: SignUp}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
