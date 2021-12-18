import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled, { css } from 'styled-components';
import logo from '../../assets/treetoke_logo.png';

const DisplayHor = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const DisplayVer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: radial-gradient(rgba(225,255,200,1), rgba(10,50,0,.7));
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    form {
        ${DisplayVer};

        .dob {
            ${DisplayHor};
            width: 100%;
            margin: 2em 0;

            div {
                ${DisplayVer}
                width: 15em;
                margin: 0 .25em;
                font-size: 1.2em;
                width: 100%;

                label {
                    color: rgba(100,100,50,1);
                    margin-bottom: .25em;
                    font-size: .9em;
                }

                .message {
                    width: 75%;
                    text-align: center;
                    font-size: .7em;
                }
            }
        }

        input {
            width: 60%;
            height: 2.7em;
            border: thin darkgreen solid;
            border-radius: .5em;
            padding-left: 1em;
            background: rgba(245,245,245.25);

            ::placeholder {
                /* text-align: center; */
                margin: 0 auto;
            }
        }

        button {
            width: 10em;
            height: 3em;
            border: none;
            border-radius: .5em;
            background: rgba(10,50,0,.7);
            color: white;
            text-transform: uppercase;

            :hover {
                background: rgba(125,155,100,.7);
            }
        }
    }

    .textContainer {
        ${DisplayVer};

        h1, h4, p {
            margin: .25em 0;
        }

        h1 {
            font-size: 3em;
            color: rgba(10,50,0,.7);
        }

        h4 {
            color: rgba(125,155,130,1);
        }

        p {
            color: rgba(100,100,50,1);
            font-weight: 500;
        }
    }

    .logo {
        width: 70%;
        margin-top: 7em;
    }
`;

function AgeCheck(props) {

    const[month, setMonth] = useState(0);
    const[day, setDay] = useState(0);
    const[year, setYear] = useState(0);

    return (
        <StyledWrapper>

            <img src={logo} alt='Treetoke' className='logo' />

            <div className='textContainer'>
                <h1>Age Restricted</h1>
                <h4>You must be 21 years of age or older</h4>
                <p>Please confirm your age</p>
            </div>

            <form onSubmit={props.checkAge}>
                <div className='dob'>
                    <div>
                        <label>Month</label>
                        <input type='number' placeholder='Month' maxLength='12' onChange={event => setMonth(event.target.value)}></input>
                        {(month > 12 || month < 0) ? <p className='message' >Please enter a valid calender month number</p> : null}  
                    </div>
                    <div>
                        <label>Day</label>
                        <input type='number' placeholder='Day' maxLength='31' onChange={event => setDay(event.target.value)}></input>
                        {(day > 31 || day < 0) ? <p className='message'>Please enter a valid calender day number</p> : null}   
                    </div>
                    <div>
                        <label>Year</label>
                        <input type='number' placeholder='Year' maxLength='3000' onChange={event => setYear(event.target.value)}></input>
                        {(year > 2000 || year < 0) ? <p className='message'>You must be 21 years of age or older</p> : null}   
                    </div>  
                </div>
                
                <button>Verify</button>
            </form>
        </StyledWrapper>
    );
}

export default AgeCheck;