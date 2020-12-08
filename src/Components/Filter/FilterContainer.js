import React, { useState, useContext } from 'react';
import { Filter } from './Filter';
import { FilterContext } from '../../FilterContext';





export function FilterContainer() {
    const [view, setView] = useState(false);
    const [open, setOpen] = useState(0)
    const [selected, setSelected] = useContext(FilterContext);


    const arrayFilter = [
        {
            name: 'DESSERTS',
            items: ['CAKES', 'CAKE TRUFFLES', 'PIES', 'COOKIES'],
            id: 1
        },
        {
            name: 'CELEBRATION',
            items: ['holiday shop', 'care package central', 'birthday shop', 'moments & milestones', 'party packs'],
            id: 2
        },
        {
            name: 'MORE',
            items: ['cookie gifts', 'gift cards', 'gifts under $50', 'cookbooks', 'gifts under $100', 'corporate gifts'],
            id: 3
        }
    ]




    function handleViewToggle() {
        if (view === false) {
            setView(true);
        } else {
            setView(false);
        }
    }

    function handleFilter(e) {
        if (selected === e.target.value) {
            return;
        } else {
            setSelected(e.target.value);
        }
    }

    


    function handleOpen({ target }) {
        let name = target.name;
        if (name === '1' && open === 0) {
            setOpen(1)
        } else if (name === '2' && open === 0) {
            setOpen(2)
        } else if (name === '3' && open === 0) {
            setOpen(3)
        } else if (name === '1' && open === 1 || name === '2' && open === 2 || name === '3' && open === 3) {
            setOpen(0)
        }
    }


    return (
            <Filter 
                toggle={handleViewToggle}
                filter={handleFilter}
                view={view}
                open={open}
                openBtn={handleOpen}
                array={arrayFilter}
            />
    )
}