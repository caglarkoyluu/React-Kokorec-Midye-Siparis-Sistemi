import React from 'react';
import Data from '../helpers/Data'; 
import MenuItem from './MenuItem';

const Midye = () => {
  const midyeItems = Data.filter(item => item.category === 'midye');

  return (
    <div className='menu-page'>
      <h1 className='menuTitle'>Midyelerimiz</h1>
      <div className='menu-items'>
        {midyeItems.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            content={menuItem.content}
            price={menuItem.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Midye;
