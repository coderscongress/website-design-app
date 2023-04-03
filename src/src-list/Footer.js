

import React from 'react';
import { socialMediaLinks } from "../portfolio.js";
import 'font-awesome/css/font-awesome.min.css';

// styles
import '../App.css';

const Footer = () => {
  return (
    <footer>
	<div  align="left">&nbsp;&nbsp;&nbsp;&nbsp;Follow us:<br /><br />
         </div>
		 <div id="soMedLinks">	
	{socialMediaLinks.map(socialmed => {
        return(
          <div key={socialmed.id}>
		  
		  <ul>
           <li><a href={socialmed.link}>  <i className={socialmed.fontAwesomeIcon} style={{
		   /*color : socialmed.backgroundColor*/
		   }}></i></a></li>
         </ul>		
          
		  </div>
        );
      })}
		  </div>
		  
	<br clear="all" /><br />
      <div  align="center">
          
         Copyright © 2022 Potter's House Ministries. All Rights Reserved
        
      </div>
	   
	
  
	
    </footer>
  );
};

export default Footer;
