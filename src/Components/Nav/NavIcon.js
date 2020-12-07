import React from 'react';
import styled from 'styled-components';
import { RiMenuLine } from 'react-icons/ri';
import { AiFillCloseSquare } from 'react-icons/ai';

const Button = styled.button`
    border: none;
    background-color: inherit;
    color: ${props => props.color || '#F7268A'};
    padding: 0;
    cursor: pointer;
    position: absolute;


    @media (min-width: 700px) {
        display: none;
    }
`;



export function NavIcon(props) {
    const { open, toggle } = props;

    return (
        <Button onClick={toggle} >
            {!open ? <RiMenuLine/> : <AiFillCloseSquare/>}
        </Button>
    )
}
