import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import { RiShoppingBag2Fill } from 'react-icons/ri'
import { NavIcon } from './NavIcon';
import { NavMenu } from './NavMenu';

const NavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border-bottom: 1px solid #2b2b2b;

    img {
        margin: 0 auto;
        max-width: 100%;
        height: auto;
    }

    button {
        border: none;
        background-color: inherit;
        font-size: 1.7rem;
        color: ${props => props.color || '#F7268A'};
        padding: 0;
        cursor: pointer;
    }

    @media (min-width: 700px) {
        padding: 0 0.5rem;
        img {
            padding: 0;
        }
        button {
            padding: 0 0.5rem;
        }
    }
`;


export function Nav(props) {
    const { open, toggle } = props;

    return (
        <NavDiv>
            <img src={logo} alt='logo' style={{ width: 150, height: 45 }} />
            <NavIcon open={open}
                     toggle={toggle} />
            <NavMenu open={open} />
            <button>
                <RiShoppingBag2Fill />
            </button>
        </NavDiv>
    )
}