import React from 'react';
import PintSold from './PintSold';
import GrowlerSold from './GrowlerSold';
import LgGrowlerSold from './LgGrowlerSold';

function SellKegButtons(){

  return (
    <div>
      <PintSold />
      <GrowlerSold />
      <LgGrowlerSold />
    </div>
  );
}

export default SellKegButtons;
