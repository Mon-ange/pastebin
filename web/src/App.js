import './App.css';
import React from 'react';
import PastebinAppBar from './components/PastebinAppBar';
import AppContent from './components/AppContent';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PasteListPage from './components/PasteListPage';
import PasteNow from './components/PasteNow';

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <PasteNow/>
      },
      {
        path:"/paste",
        element: <AppContent/>
      },
      {
        path:"/page",
        element: <PasteListPage/>
      }
    ]
  )

  return (
    <div className="App">
      <PastebinAppBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
