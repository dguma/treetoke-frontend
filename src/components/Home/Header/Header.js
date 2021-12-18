import React from 'react';
import styled from 'styled-components';
import Nav from './Nav/Nav';

const StyledHeader = styled.header`
    background: rgba(200, 255, 199, .5);
    padding: 2em 3em;

`;

function Header(props) {
    return (
        <StyledHeader>
            <Nav />
        </StyledHeader>
    );
}

export default Header;