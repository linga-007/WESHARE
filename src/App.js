import logo from './logo.svg';
import './App.css';
import { Nav } from './Components/Nav';
import { DriverInfo } from './Components/DriverInfo';
import Map from './Components/Map';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Components/Login';
import Travelinfo from './Components/Travelinfo';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Pay from './Components/Pay';

function App() {

  const route = createBrowserRouter([
   
{
  path:'/',
  element:<Home/>
} ,
{
  path:'/Login',
  element:<Login/>
},
{
  path:'/Signup',
  element:<Signup/>
},
   {
      path:"/Dash",
      element:<><Nav/><DriverInfo /></>
     
    },
    {
      path:'/Info',
      element:<Travelinfo />
    },{
      path:'/Pay',
      element:<Pay />
    } 
    
  ]
  )
  return (
    <div>
      <RouterProvider router={route}/>
    </div>
     
  );
}

export default App;
