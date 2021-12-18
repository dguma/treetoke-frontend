import React from 'react';
import Header from './Header/Header';
import styled from 'styled-components';

const HomeWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;


function Home(props) {
    return (
        <HomeWrapper>
            <Header />
        </HomeWrapper>
    );
}

export default Home;