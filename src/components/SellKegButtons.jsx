import React from 'react';
import PintSold from './PintSold';
import GrowlerSold from './GrowlerSold';
import LgGrowlerSold from './LgGrowlerSold';

function SellKegButtons(){

  return (
    <div>
      <div className="row">
        <div className="col">
          <PintSold />
        </div>
        <div className="col">
          <GrowlerSold />
        </div>
        <div className="col">
          <LgGrowlerSold />
        </div>
      </div>
    </div>
  );
}

export default SellKegButtons;
