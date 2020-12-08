import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export function FilterProvider(props) {
    const [selected, setSelected] = useState('CAKES');

    return (
        <FilterContext.Provider value={[selected, setSelected]}>
            {props.children}
        </FilterContext.Provider>
    )
}