import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 100%;

    ul {
       display: flex;
       justify-content: flex-end;
       align-items: center;

       li {
           padding: 0 1em;
       }
       
       a {
           text-decoration: none;
           text-transform: uppercase;
           font-size: 1.2em;
           font-weight: 500;
           color: darkgreen;

           :hover {
               color: lightgreen;
           }
       }
    }
    
`;

function Nav(props) {
    return (
        <StyledNav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/strains'>Strains</Link></li>
            </ul>
        </StyledNav>
    );
}

export default Nav;