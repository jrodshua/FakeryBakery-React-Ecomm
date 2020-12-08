import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    font-size: 0.8rem;

    @media (min-width: 300px) {
        font-size: 0.9rem;
    }

    @media (min-width: 500px) {
        font-size: 1rem;
    }


    h2 {
        font-weight: bold;
        margin-bottom: 0.25rem;

        @media (min-width: 700px) {
            font-size: 1.5rem;
            font-weight: bolder;
            margin-bottom: 1rem;
        }
    }
`;


export function CollectionHead({ secName, description }) {
    

    return (
        <Div>
            <h2>{secName}</h2>
            <p>{description}</p>
        </Div>
    )
}