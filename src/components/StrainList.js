import React from 'react';
import styled from 'styled-components';

const StrainCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 20em;
    border: dotted thin;
    height: 10em;
    margin: 1em;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`;

function StrainList({strainList}) {
    return (
        <Container>
            {(strainList !== undefined) ? strainList.map(strain => {

                return (
                    <StrainCard key={strain.id}>
                        <div>
                            <h3>{strain.name}</h3>
                        </div>
                        <div>
                            <p>THC: {strain.thc}</p>
                            <p>Effects: {strain.effects}</p>
                        </div>
                    </StrainCard>
                );
            }) : '' 
            }
        </Container>
    );
}

export default StrainList;
