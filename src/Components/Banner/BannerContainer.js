import React, { useState, useEffect } from 'react';
import { Banner } from './Banner';

export function BannerContainer() {
    const [text, setText] = useState([
        {
            name: 'we ship nationwide!',
            id: 0,
            link: 'send treats'

        },
        {
            name: 'free shipping on orders $85+',
            id: 1,
            link: 'shop now'
        },
        {
            name: 'schedule order up to 30 days in advance',
            id: 2,
            link: ''
        }
    ]);

    const [count, setCount] = useState(0);
    useEffect(() => {
        const banTime = 7000;
        const intervalId = setInterval(() => {
            (count === 0)
            ? setCount(1)
            : (count === 1)
            ? setCount(2)
            : setCount(0);
        }, banTime)
        return () => {
            clearInterval(intervalId);
        }
    }, [count]);

    let name;
    let link;
    text.forEach((i) => {
        if (i.id === count) {
            name = i.name;
            link = i.link;
        }
    })

    return (
        <Banner
            name={name}
            link={link} />
    )
}