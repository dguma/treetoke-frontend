import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../AgeCheck/treetoke_logo.png';

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    ul {
       display: flex;
       justify-content: center;
       align-items: center;

       li {
           padding: 0 1em;
       }
       
       a {
           text-decoration: none;
           text-transform: uppercase;
           font-size: 1em;
           font-weight: 300;
           color: white;

           :hover {
               color: lightgreen;
           }
       }
    }

    img {
        width: 10em;
    }
    
`;

function Nav(props) {
    return (
        <StyledNav>
            <Link to='/'>
                <img src={logo} alt='logo' />
            </Link>
            

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/strains'>Strains</Link></li>
            </ul>
        </StyledNav>
    );
}

export default Nav;