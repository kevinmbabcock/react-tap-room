import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

// const availableKegs = [
//   {
//     name: 'Manny\'s Pale Ale',
//     brand: 'Georgetown Brewing Co.',
//     price: '$6.00',
//     abv: '5.4%',
//     pints: '124'
//   },
//   {
//     name: 'Pyramid Hefeweizen',
//     brand: 'Pyramid Brewing Co.',
//     price: '$5.00',
//     abv: '5.2%',
//     pints: '124'
//   },
//   {
//     name: 'Red Hook ESB',
//     brand: 'Red Hook Ale Brewery',
//     price: '$5.00',
//     abv: '5.8%',
//     pints: '124'
//   },
//   {
//     name: 'Interurban IPA',
//     brand: 'Fremont Brewing',
//     price: '$6.50',
//     abv: '6.2%',
//     pints: '124'
//   },
//   {
//     name: 'Lucille IPA',
//     brand: 'Georgetown Brewing Co.',
//     price: '$6.50',
//     abv: '7.0%',
//     pints: '124'
//   }
// ];

function KegList(props){

  return (
    <div>
      {props.kegList.map((keg, index) =>
        <div>
          <Keg
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            pints={keg.pints}
            currentRouterPath={props.currentRouterPath}
            onChangingSelectedKeg={props.onChangingSelectedKeg}
            currentKeg={props.currentKeg}
            onPintSale={props.onPintSale}
            onGrowlerSale={props.onGrowlerSale}
            onLgGrowlerSale={props.onLgGrowlerSale}
            key={index}/>
          <hr />
        </div>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onChangingSelectedKeg: PropTypes.func,
  currentKeg: PropTypes.object,
  onPintSale: PropTypes.func,
  onGrowlerSale: PropTypes.func,
  onLgGrowlerSale: PropTypes.func
};

export default KegList;
