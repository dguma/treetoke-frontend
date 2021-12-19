import React from 'react';
import Header from './Header/Header';
import styled from 'styled-components';
import nugg from '../../assets/images/nugg.png';
import {Link} from 'react-router-dom';

const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    margin: 0;
`;

const HeroWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;800&display=swap');

    width: 100%;
    height: 100%;
    z-index: -100;
    /* position: absolute; */
    margin-top: -6em;
    background: #ffffff;
    background: radial-gradient(circle, #f1efef 10%, #b4b4b4 70%, #6C7A89 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1em;
    

    .nuggWrapper {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60%;
        /* width: 70%; */
        padding-top: 6em;
        /* padding-right: 4em; */
        @media (max-width: 600px) {
            flex-direction: column;
        }
        .nugg {
            width: 17em;
            height: 17em;
            object-fit: cover;

        }
    }

    .info {
        max-width: 100%;
        min-width: 16em;
        width: 100%;
        text-align: center;
        padding-right: 2em;

        @media (max-width: 600px) {
            margin-top: -2em;
            margin-bottom: 2em;
            padding: 0;
        }

        h2 {
            color: #3C2109;
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 300;
            font-size: 2em;
        }
        p {
            color: #34515E;
            width: 70%;
            margin: 0 auto;
        }
    }

    .moreInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 40%;
        width: 100%;
        /* background: rgb(242,242,242);
        background: linear-gradient(0deg, rgba(242,242,242,.25) 0%, rgba(171,171,171,.5) 28%, rgba(54,54,54,.35) 100%); */

        h4 {
            margin: 0;
            font-size: 1.1em;
            color: #3C2109;
        }

        p {
            font-size: .9em;
            color: #34515E;
        }

        a {
            color: white;
            text-transform: uppercase;
            text-decoration: none;
        }

        button {
            border: none;
            border-radius: .5em;
            background: #856514;
            width: 10em;
            height: 3em;

            :hover {
                background: #AA8F00;
            }

        }
        
    }
    
`;

const MainInfo = styled.div`
    background: #20603C;
    width: 100%;
    height: 40%;
`;

function Home(props) {
    return (
        <HomeWrapper>
            <Header />

            <HeroWrapper>
                <div className='nuggWrapper'>
                    <img className='nugg' src={nugg} alt='nugg'/>
                    <div className='info'>
                        <h2>Quality Marijuana With Medicinal Benefits</h2>
                        <p>
                            Cannabis has tremendous medicinal effects on the mind and body. 
                            Whether you are looking for a body high or a head high, there is 
                            strain out there for you!
                        </p>
                    </div>
                </div>

                <div className='moreInfo'>
                    <h4>Want to know more?</h4>
                    <img src="https://img.icons8.com/color/48/000000/marijuana-leaf.png"/>
                    <p>Here is a complete list of strains</p>
                    <button><Link to='/strains'>View More</Link></button>
                </div>

            </HeroWrapper>

            <MainInfo>

            </MainInfo>
        </HomeWrapper>
    );
}

export default Home;