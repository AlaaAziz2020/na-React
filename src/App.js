import logo from './logo.svg';
import './App.css';


import {BrowserRouter, createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import NotFound from './Component/Notfound/Notfound';
import Masterlayout from './Component/Masterlayout/Masterlayout';
import Products from './Component/Products/Products';
import Footer from './Component/Footer/Footer';
//const LazyFooter = React.lazy(() => import('./Component/Footer/Footer'))//




function App() {

  let Routers =  createBrowserRouter([
    {
      path :"/", element: <Masterlayout/> , children: [
        {path:'navbar', element: <Navbar/>},
  {path:"/",element: <Home/>},
  {path:"home",element:<Home/>},
  {path:"products",element:<Products/>},
  //{path:"footer",element:<React.Suspense fallback='Loading....'><LazyFooter/> </React.Suspense>},//
  {path:"footer" , element:<Footer />},


  {path:"*" , element: <NotFound/>},

  ]}
])
  return (
    <RouterProvider router={Routers} />
  );
}

export default App;

