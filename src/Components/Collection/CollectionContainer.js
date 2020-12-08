import React, { useContext } from 'react';
import { CollectionHead } from './CollectionHead';
import { CollectionGrid } from './CollectionGrid';
import { FilterContext } from '../../FilterContext';
import styled from 'styled-components';


const Div = styled.div`
    width: 95%;
    margin: 0 auto;

    @media (min-width: 700px) {
        display: flex;
    }
`;

const Head = styled.div`
    width: 100%;
    padding: 0.25rem;

    @media (min-width: 700px) {
        width: 35%;
        padding: 0.7rem 0;
    }
`;

const Grid = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding: 0.25rem;
    
`;



export function CollectionContainer() {
    const [selected, setSelected] = useContext(FilterContext);

    const cakes = [
        {
            name: 'Peppermint Bark Cake',
            description: `Peppy is officially back in action! Enjoy this decadent winter wonder!`,
            review: '4 out of 5 Stars (180 Reviews)',
            price: 55,
            src: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/01_Hero_PEPPERMINT-BARK_CA_360x360.jpg?v=1605731547',
            id: '3i7H97ZZGEpzpTDPtHjB',
            zoom: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/02_Rollover_PEPPERMINT-BARK_360x360.jpg?v=1605731547'
        },
        {
            name: 'Chocolate Birthday Cake',
            description: `The classic Birthday Cake, but make it chocolate.`,
            review: '4.1 out of 5 Stars (1242 Reviews)',
            price: 50,
            src: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/01_Hero_CHOC-BDAY_CA_360x360.jpg?v=1605730964',
            id: 'CqhjpkvYqqTlBlAdp32X',
            zoom: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/02_Rollover_CHOC-BDAY_CA_360x360.jpg?v=1605730977'
        },
        {
            name: 'Classic Birthday Cake',
            description: `Our bestselling Birthday Cake is inspired by the supermarket stuff we grew up with, and it took us over two years to get it just right.`,
            review: '4.2 out of 5 Stars (4555 Reviews)',
            price: 50,
            src: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/01_Hero_BDAY_CA_360x360.jpg?v=1605730699',
            id: 'H2KYW1qOSS9ihePp6jr6',
            zoom: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/02_Rollover_BDAY_CA_360x360.jpg?v=1605730713'
        },
        {
            name: 'Pumpkin Dulce De Leche Cake',
            description: `When it gets chilly outside and cozy inside, it's pumpkin time. This seasonal stunner is back by popular demand in all its glory.`,
            review: '4.3 out of 5 Stars (393 Reviews)',
            price: 55,
            src: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/PDDL-PDP_0002_09022020_PDDL-PDP_FALLCAMPAIGN1776_jpg_360x360.jpg?v=1600396463',
            id: 'nH8rRJv1xaGXFVZjNTly',
            zoom: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/PDDL-PDP_0000_09022020_PDDL-PDP_FALLCAMPAIGN1770_jpg_360x360.jpg?v=1600396477'
        }
    ];

    const truffles = [
        {
            name: 'Peppermint Bark Cake',
            description: `Peppy is back (with Truffles to match)!`,
            review: '4 out of 5 Stars (180 Reviews)',
            price: 24,
            src: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/09212020_PDP-OVERHAUL5965_360x360.jpg?v=1605732939',
            id: 'l7ZjIBuujdPQm0ec2g9U',
            zoom: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/09212020_PDP-OVERHAUL5927_360x360.jpg?v=1605732939'
        },
        {
            name: 'Pumpkin Dulce De Leche Cake',
            description: `Big pumpkin flavor in one tasty bite.`,
            review: '4.3 out of 5 Stars (393 Reviews)',
            price: 24,
            src: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/09212020_PDP-OVERHAUL5956_CA_360x360.jpg?v=1605732936',
            id: 'n0ykL3Lwfvp33TgReg8w',
            zoom: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/09212020_PDP-OVERHAUL5923_CA_360x360.jpg?v=1605732936'
        },
        {
            name: 'Chocolate Birthday Cake',
            description: `Like eating the batter and the cake all at once.`,
            review: '4.1 out of 5 Stars (1242 Reviews)',
            price: 24,
            src: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/09212020_PDP-OVERHAUL5948_CA_GOO_360x360.jpg?v=1605732934',
            id: 'nTizzVjpuN1XaeKKkSRD',
            zoom: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/09212020_PDP-OVERHAUL5939_CA_GOO_360x360.jpg?v=1605732934'
        },
        {
            name: 'Birthday Cake',
            description: `We rolled all the childhood flavor of our signature cake into a single bite, no utensils needed.`,
            review: '4.2 out of 5 Stars (4555 Reviews)',
            price: 24,
            src: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/09212020_PDP-OVERHAUL5969-1050x1050_360x360.jpg?v=1605732930',
            id: 'sQAqugpX72qhIRKHLRU0',
            zoom: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/09212020_PDP-OVERHAUL5932-1050x1050_360x360.jpg?v=1605732930'
        }
    ];

    const pies = [
        {
            name: 'Milk Bar Pie',
            description: `The iconic dessert was a happy accident born in the kitchen of wd-50 when there wasnâ€™t much in the fridge`,
            review: '4.4 out of 5 Stars (1402 Reviews)',
            price: 45,
            src: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/Milk-Bar-Pie_360x360.jpg?v=1579811518',
            id: 'lej2PtHT0pOqOrD0EYXt',
            zoom: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/09212020_PDP-OVERHAUL6083_360x360.jpg?v=1606756437'
        }
    ];

    const cookies = [
        {
            name: 'Peppermint Pretzel Snap Tin',
            description: `Oh snap, it's back! Sure, technically, itâ€™s a 'cookie,' but this bestselling treat is so much more than that.`,
            review: '3.6 out of 5 Stars (30 Reviews)',
            price: 30,
            src: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/09212020_PDP-OVERHAUL5213_Crop_RT_1f314541-7edb-447d-b44d-5d148dd84a61_360x360.jpg?v=1604077770',
            id: 'UNLi4fBqauLolwPfcyd8',
            zoom: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/09212020_PDP-OVERHAUL5597_RT_4506969a-e1fc-4e05-b829-a1c5ebc2ae49_360x360.jpg?v=1606760239'
        },
        {
            name: 'Assorted Cookie Tin',
            description: `Sometimes the correct answer is 'one of each,' but we think 'two of each' is right the rest of the time.`,
            review: '4.4 out of 5 Stars (789 Reviews)',
            price: 20,
            src: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/1x1_0007_Curves1copy7_360x360.jpg?v=1597076796',
            id: 'Xj6cO0B7kadYSgVYEaj7',
            zoom: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/04_360x360.jpg?v=1606756678'
        },
        {
            name: 'Candy Bar Snap Tin',
            description: `Once upon a time, there was a Milk Bar creation called Candy Bar Pie.`,
            review: '0 out of 5 Stars (0 Reviews)',
            price: 30,
            src: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/PDP_0001_08122020_CandyBarSnap2000-RTcopy_8ac83953-e80b-4fc7-b6db-5b9de217d893_360x360.jpg?v=1606760178',
            id: 'fni4mEfqMKB37OOhgVpr',
            zoom: 'https://cdn.shopify.com/s/files/1/0034/7550/5225/products/PDP_0000_08122020_CandyBarSnap2043-RT_d26620e8-e6ac-4f5e-a86c-48a31d940855_360x360.jpg?v=1606760178'
        }
    ];

    const sections = [
        {
            name: 'CAKES',
            description: `Layers of frosting, cake crumbs and see-through-sides make these easy-to-spot-cakes darn near impossible to resist.`,
            id: '46np6P8wznLjG8HDeiD1'
        },
        {
            name: 'CAKE TRUFFLES',
            description: `Born out of leftover cake scraps and accidental ingenuity, these bite sized morsels are packed with miles of flavor.`,
            id: '5J9ZhpgZ3tIz4hJ0YwO2'
        },
        {
            name: 'COOKIES',
            description: `Every cookie has a texture and flavor story to tell your taste buds. From sweet and salty, to fruity, corny, chewy, crispy, fudgy, chocolatey, vanilla-y and confetti-y, consider yourself covered.`,
            id: '5NT0Z0z6YoLnZN8kYPv1'
        },
        {
            name: 'PIES',
            description: `Meet the cult following pie filled with gooey buttery goodness.`,
            id: 'd1zctX7tTnlcQikazQ8J'
        }
    ];
 
    let item;
    if (selected === 'CAKES') {
        item = cakes;
    } else if (selected === 'CAKE TRUFFLES') {
        item = truffles;
    } else if (selected === 'COOKIES') {
        item = cookies;
    } else if (selected === 'PIES') {
        item = pies;
    };
    


    return (
        <Div>
            <Head>
                {sections.map((sec) => {
                    if (sec.name === selected) {
                        return <CollectionHead
                                    secName={sec.name}
                                    description={sec.description}
                                    key={sec.id} />
                    }
                })}
            </Head>
            <Grid>
                {item.map((i) => {
                    return <CollectionGrid
                                name={i.name}
                                src={i.src}
                                price={i.price}
                                zoom={i.zoom}
                                key={i.id} />
                })}
            </Grid>
        </Div>
    )
}