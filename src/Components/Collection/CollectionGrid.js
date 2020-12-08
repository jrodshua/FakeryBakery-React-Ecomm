import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
    width: 50%;
    font-size: 0.7rem;
    margin: 0.5rem 0;

    @media (min-width: 300px) {
        font-size: 0.8rem;
    }

    @media (min-width: 500px) {
        font-size: 0.9rem;
    }

    @media (min-width: 700px) {
        font-size: 1rem;
    }

    @media (min-width: 1000px) {
        width: 33%;
    }

    img {
        width: 90%;
        height: auto;
    }

    h3 {
        width: 90%;
        margin: 0 auto;
        padding: 0.2rem;
        font-weight: bold;

        @media (min-width: 700px) {
            margin: 0.5rem auto;

        }
    }

    p {
        width: 90%;
        margin: 0 auto;
    }
`;



export function CollectionGrid({ name, src, price, zoom }) {
    return (
        <Div>
            <img src={src} alt={name} />
            <h3>{name}</h3>
            <p>From ${price}.00</p>
        </Div>
    )
}