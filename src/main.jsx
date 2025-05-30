import { StrictMode, Suspense } from 'react'
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
import NotFound from './components/notFound/NotFound.jsx';
import axios from 'axios';
const BookPromise=axios.get('books.json')
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('../books.json'),
        Component: Home
      },
      {
        path: '/listed-books',
        loader: () => fetch('../books.json'),
        Component: ListedBooks
      },
      {
        path: '/page-to-read',
        element: <Suspense fallback={<h3 className='text-center'>Loading...</h3>}>
          <PageToRead BookPromise={BookPromise}></PageToRead>
        </Suspense>
      },
      { path: 'login', Component: LogIn },
      { path: 'signup', Component: SignUp }
    ]
  },
  {
    path: '*',
    Component: NotFound
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
