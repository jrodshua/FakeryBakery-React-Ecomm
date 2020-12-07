import React from 'react';
import styled from 'styled-components';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff5e9;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0.2rem 0;
    color: #2b2b2b;
    

    button {
        border: none;
        background-color: inherit;
        color: #F7268A;
        font-size: 2rem;
        padding: 0;
        display: flex;
    }
`;

const Wrapper = styled.div`
    background-color: #fff5e9;
    padding: 0.5rem 0;
    color: #2b2b2b;
    width: 100%;
    display: ${({ view }) => view ? 'inherit' : 'none'};

    button {
        border: none;
        background-color: inherit;
        text-align: left;
        margin: 0.4rem 1rem;
        text-transform: uppercase;
        margin-left: 1.5rem;
    }

    @media (max-width: 850px) {
        div.DESSERTS button {
            display: ${({ open }) => (open === 1) ? 'flex' : 'none'};
        }

        div.CELEBRATION button {
            display: ${({ open }) => (open === 2) ? 'flex' : 'none'};
        }

        div.MORE button {
            display: ${({ open }) => (open === 3) ? 'flex' : 'none'};
        }
    }
    
    @media (min-width: 850px) {
        display: ${({ view }) => view ? 'flex' : 'none'};
        width: 100%;
        height: 100%;
        
        div.DESSERTS button,
        div.CELEBRATION button,
        div.MORE button {
            margin: 0;
            height: 100%;
            width: 120px;
            display: flex;
            margin-bottom: 0.5rem;
        }

        div.DESSERTS,
        div.CELEBRATION,
        div.MORE {
            width: 100%;  
            
        }

        div.DESSERTS {
            padding-left: 0.8rem;
        }

        div.CELEBRATION,
        div.MORE {
            border-left: 1px solid lightgray;
            padding-left: 0.8rem;
        }

        div.media-div {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: flex-start;
        }
    }
`;


const Section = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    margin: 0 auto;
    font-weight: bold;
    padding: 0.5rem 0;
    border-bottom: 1px solid black;

    a {
        cursor: pointer;
        margin-right: 1rem;
        padding-top: 0.5rem;
    }

    h2 {
        margin-left: 1rem;
        padding: 0.5rem 0;
    }

    @media (min-width: 850px) {
        margin: 0;
        padding: 0;
        width: 100%;
        border: none;
        width: 100%;
        

        a {
            display: none;
        }

        h2 {
            width: 100%;
            padding: 0.8rem 0 0 0;
            margin-bottom: 1rem;
            text-align: justify;
            margin-left: 0;
        }
    }
`;



export function Filter({ toggle, filter, view, open, openBtn, array }) {
    return (
        <div>
            <Div>
                <h3>view all</h3>
                <button onClick={toggle} >
                    {!view ? <RiArrowDropDownLine/> : <RiArrowDropUpLine/>}
                </button>
            </Div>
            <Wrapper open={open} view={view}>

                {array.map((i, index) => {
                    return (
                        <div key={index} className={i.name}>
                            <Section open={open} key={index}>
                                <h2 key={index}>{i.name}</h2>
                                <a onClick={openBtn} name={i.id}>{!open ? '+' : '-'}</a>
                            </Section>
                            <div className='media-div'>
                                {i.items.map((n, i) => {
                                    return (
                                        <div open={open} key={i}>
                                            <button onClick={filter} value={n} key={n}>{n}</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                
            </Wrapper>
        </div>
    )
}