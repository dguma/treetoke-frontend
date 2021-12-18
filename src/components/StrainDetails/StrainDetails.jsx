import React, { useEffect, useState } from 'react';
import styles from './StrainDetails.module.css';

function StrainDetails({strains, strainName}) {

    let strainDetail = strains.filter(item => item.name === strainName);
    console.log(strainDetail)

    return (
        <div>
            {
                (strainDetail !== undefined) ? strainDetail.map(strain => {
                        return (
                            <div className={styles.cardContainer} key={strain.id}>
                                <h3>{strain.name}</h3>
                                <div className={styles.mainInfo}>
                                    
                                    <ul>
                                        <li>
                                            <h4>Type: </h4>
                                            <p>
                                                {(strain.type === 'NULL') ? 'No description is avaiable at this time' : strain.type}
                                            </p>      
                                        </li>
                                        <li>
                                            <h4>Flavor: </h4>
                                            <p>
                                                {(strain.flavor === 'NULL') ? 'No information is avaiable at this time' : strain.flavor}
                                            </p>      
                                        </li>
                                        <li>
                                            <h4>Origin: </h4>
                                            <p>
                                                {(strain.location === 'NULL') ? 'No description is avaiable at this time' : strain.location}
                                            </p>      
                                        </li>
                                        <li>
                                            <h4>Breeder: </h4>
                                            <p>
                                                {(strain.bredder === 'NULL') ? 'No information is avaiable at this time' : strain.breeder}
                                            </p>      
                                        </li>
                                        <li>
                                            <h4>Cross-Bread: </h4>
                                            <p>
                                                {(strain.crosses === 'NULL' | ',') ? 'No information is avaiable at this time' : strain.crosses}
                                            </p>      
                                        </li>
                                        <li>
                                            <h4>Description: </h4>
                                            <p>
                                                {(strain.description === 'NULL') ? 'No description is avaiable at this time' : strain.description}
                                            </p>      
                                        </li>
                                    </ul>
                                </div>

                                <div className={styles.moreInfo}>
                                    <h3>Body Effects</h3>
                                    <ul>
                                        <li>
                                            <h4>Side Effects: </h4>
                                            <p>{(strain.effects === 'NULL') ? 'No description is avaiable at this time' : strain.effects}</p>
                                        </li>
                                        <li>
                                            <h4>Medicinal Effects: </h4>

                                            <p>{(strain.ailment === 'NULL') ? 'No description is avaiable at this time' : strain.ailment}</p>
                                        </li>
                                    </ul>
 
                                </div>
                            </div>
                        )
                }) : ''
            }
        </div>
    );
}

export default StrainDetails;