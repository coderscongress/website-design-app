import { Outlet } from 'react-router-dom';
import Header from './Header';
//import Header from "../src-list/Header";
//import Footer from './Footer';
//import Sidebar from './Sidebar';

const Layout = () => {
  return (
  
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
	   
    </div>
	
  );
 
};

export default Layout;
