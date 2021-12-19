import React from 'react';
import styled from 'styled-components';
import Nav from './Nav/Nav';

const StyledHeader = styled.header`
    background: #007A4B;
    padding: 2em 3em;
    box-shadow: 0 0 1em -.12em #0d322c;
    width: 80%;
    margin: 0 auto;

`;

function Header(props) {
    return (
        <StyledHeader>
            <Nav />
        </StyledHeader>
    );
}

export default Header;