import React from 'react';
import styled from 'styled-components';

const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 80%;
    text-align: left;
    padding: 1rem;
    width: 90%;
    margin-top: 5rem;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    transition: ${({ open }) => open ? 'transform 0.3s ease-in-out' : 'transform 0 ease-in-out'};
    background-color: white;

    a {
        font-size: 1rem;
        text-transform: uppercase;
        padding: 0.5rem 0;
        font-weight: bold;
        color: #2b2b2b;
        text-decoration: none;
        transition: color 0.3s linear;
        margin: 1rem 0;
        width: 30%;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #2b2b2b;
    }

    button {
        border: none;
        background-color: inherit;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
    }

    @media (min-width: 700px) {
        position: static;
        flex-direction: row;
        height: 100%;
        justify-content: space-evenly;
        align-items: center;
        transform: translateX(0);
        transition: transform 0 ease-in-out;
        margin: 0;
        padding: 0.7rem 0;
        button {
            display: none;
        }
        div {
            border: none;
        }
        a { 
            width: 100%;
            margin: 0;
        }
        
    }

`;



export function NavMenu(props) {
    const { open } = props;

    return (
        <Menu open={open}>
            <div>
                <a>desserts</a>
                <button>+</button>
            </div>
            <div>
                <a>blog</a>
                <button>+</button>
            </div>
            <div>
                <a>recipes</a>
                <button>+</button>
            </div>
            <div>
                <a>about</a>
                <button>+</button>
            </div>
            <div>
                <a>contact</a>
                <button>+</button>
            </div>
        </Menu>
    )
}