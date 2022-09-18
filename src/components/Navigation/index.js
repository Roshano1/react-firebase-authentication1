import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <div>
      <ul>
        <li>    
            <Link to={ROUTES.CONSULTING}>Consulting</Link> 
         </li>
        
        <li>
          <Link to={ROUTES.CONTACT_US}>Contact Us</Link>
        </li>
        <li>
          <Link to={ROUTES.DESIGN}>Design</Link>
       </li>
       <li>
         <Link to={ROUTES.DEVELOPMENT}>Development</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.MARKETING}>Marketing </Link>
          </li>
       <li> 
        <Link to={ROUTES.PRODUCTS}>Products</Link>
        </li>
       <li>
         <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
       </li>
      </ul>
    </div>
  );


export default Navigation;