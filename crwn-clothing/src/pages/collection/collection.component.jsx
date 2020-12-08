import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// state is from the top, ownProps is props of component we are wrapping in our connect, current is collecion component props
// props include match/history/location via Route from last component
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state) //this selector need part of state depend on url // /// params, here selectCollection is function reuturn a function, state is props for return function for us to wire  // everything together
});

export default connect(mapStateToProps)(CollectionPage);

