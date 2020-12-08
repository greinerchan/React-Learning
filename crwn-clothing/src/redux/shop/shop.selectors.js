import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])   // Object.keys get all object keys of an object
);  // since collection-overview component need use array of element, so now I need to decompose the object into array. each
// element of array will be the value of each key (key not include, key is used for mapping categoryId to specific collection, quicker than using array.find()) 

// curring function, a funtion return another function
// pass into new selector collection
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);

//Memoize does the same idea of memoization as reselect does for our selectors, 
//except this time we're memoizing the return of our function which returns our selector:

// (collectionUrlParam) =>
//   createSelector(
//     [selectCollections],
//     (collections) => collections[collectionUrlParam]
//  )


// whenever this function gets called and receives collectionUrlParam, I want to memoize the return of this function (in this case we return a selector). If this function gets called again with the same collectionUrlParam, don't rerun this function because we'll return the same value as last time, which we've memoized so just return the selector that's been stored.