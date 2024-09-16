import React from 'react';
import Data from '../helpers/Data'; 
import MenuItem from './MenuItem';

const Kokorec = () => {

  const kokorecItems = Data.filter(item => item.category === 'kokorec');

  return (
    <div className='menu-page'>
      <h1 className='menuTitle'>Kokoreçlerimiz</h1>
      <div className='menu-items'>
        {kokorecItems.map((menuItem, key) => (
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

export default Kokorec;
