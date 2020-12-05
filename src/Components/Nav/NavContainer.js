import React, { useState } from 'react';
import { Nav } from './Nav';
import styled from 'styled-components';

const Overlay = styled.div`
  ${'' /* background-color: rgba(0,0,0,0.2); */}
  background: rgba(0,0,0,.5);
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 0;

  @media (min-width: 700px) {
      background-color: rgba(0,0,0,0);
  }
`;


export function NavContainer() {
    const [open, setOpen] = useState(false)

    function handleToggle() {
    !open ? setOpen(true) : setOpen(false); 
    }

    return (
        <div>
            <Nav open={open}
                toggle={handleToggle} />
            {open && <Overlay></Overlay>}
        </div> 
    )
}