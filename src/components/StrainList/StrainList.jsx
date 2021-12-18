import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
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

function StrainList({strainList, getStrainName}) {

    // const [searchTerm, setSearchTerm] = useState('');
    // const [info, setInfo] = useState([]);
    // const [images, setImages] = useState([]);
    // const uri = `https://customsearch.googleapis.com/customsearch/v1?cx=42449c2b27b1e4156&key=AIzaSyDO4oLEdtbANZzBVYyiV5OqEL88AFuajqw&tbm=isch&q=${encodeURIComponent(searchTerm.trim())}`;
    // useEffect(() => {
       
    //     fetch(uri)
    //     .then(res => res.json())
    //     .then(data => {setInfo(data.items)})
    //     // console.log(info)
    // },[searchTerm])

    // function getDetails(event) {
        
    //     console.log(searchTerm)
    //     setSearchTerm(event.target.textContent);
        
    //     let pageMap = info.map(map => map.pagemap)
    //     let cse = pageMap.map(item => {
    //        let images = item.cse_image;
    //        let image = images.map(item => item.src);
    //        return image
    //     })
    //     console.log(cse)
    // }

    // console.log(strainList.length / 20)

 

    return (
        <Container>
            {(strainList !== undefined) ? strainList.slice(1000,1100).map(strain => {

                return (
                    <StrainCard key={strain.id}>
                        <div>
                            <h3><Link to={strain.name} onClick={getStrainName} >{strain.name}</Link></h3>
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
