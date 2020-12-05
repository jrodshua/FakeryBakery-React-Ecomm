import React from 'react';
import styled from 'styled-components';

const BannerDiv = styled.div`
    width: 100%;
    font-size: 0.9rem;
    background-color: #2b2b2b;
    color: #fff5e9;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    @media (min-width: 700px) {
        font-size: 1rem;
    }
`;

const Anchor = styled.a`
    color: #F7268A;
    font-weight: bold;
`;



export function Banner({ name, link }) {

    return (
        <BannerDiv>
            <p>{name} <Anchor>{link}</Anchor></p>
        </BannerDiv>
    )
}