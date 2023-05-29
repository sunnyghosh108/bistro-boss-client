import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu]=useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
             <Helmet>
             <title>Bistro Boss | Menu</title>
            </Helmet>  

            <Cover img={`https://i.ibb.co/tbBD1nY/menu-bg.jpg`} title="OUR MENU"></Cover>
            {/* main cover */}
            <SectionTitle
            subHeading="Don't Miss" heading="Today's Offer"
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
           {/* dessert menu items */}
           <MenuCategory items={desserts}
           title="dessert"
           img={`https://i.ibb.co/TWJ7nsb/dessert-bg.jpg`}
           >
           </MenuCategory>
           {/* pizza menu items */}
           <MenuCategory items={pizza}
           title={"pizza"}
           img={`https://i.ibb.co/99mGd2h/pizza-bg.jpg`}
           >
           </MenuCategory>
           {/* salad */}
           <MenuCategory items={salad}
           title={"salad"}
           img={`https://i.ibb.co/KznKCZS/salad-bg.jpg`}
           >
           </MenuCategory>
           {/* Soup */}
           <MenuCategory items={soup}
           title={"soup"}
           img={`https://i.ibb.co/m5SwmTR/soup-bg.jpg`}
           >
           </MenuCategory>
            
        </div>
    );
};

export default Menu;