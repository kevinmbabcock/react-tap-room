import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Keg from './Keg';
import EditKegLink from './EditKegLink';
import SellKegButtons from './SellKegButtons';

const availableKegs = [
  {
    name: 'Manny\'s Pale Ale',
    brand: 'Georgetown Brewing Co.',
    price: '$6.00',
    abv: '5.4%',
    pints: '124'
  },
  {
    name: 'Pyramid Hefeweizen',
    brand: 'Pyramid Brewing Co.',
    price: '$5.00',
    abv: '5.2%',
    pints: '124'
  },
  {
    name: 'Red Hook ESB',
    brand: 'Red Hook Ale Brewery',
    price: '$5.00',
    abv: '5.8%',
    pints: '124'
  },
  {
    name: 'Interurban IPA',
    brand: 'Fremont Brewing',
    price: '$6.50',
    abv: '6.2%',
    pints: '124'
  },
  {
    name: 'Lucille IPA',
    brand: 'Georgetown Brewing Co.',
    price: '$6.50',
    abv: '7.0%',
    pints: '124'
  }
];

function KegList(){

  return (
    <div>
      {availableKegs.map((keg, index) =>
        <div>
          <Keg
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            pints={keg.pints}
            key={index}/>
          <Switch>
            <Route path='/edit-kegs' component={EditKegLink} />
            <Route path='/view-kegs' component={SellKegButtons} />
          </Switch>
          <hr />
        </div>
      )}
    </div>
  );
}

export default KegList;
