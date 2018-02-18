/**
 * Functions to interact with WeDeploy data.
 * https://wedeploy.com/docs/data/saving-data/
 */

import WeDeploy from 'wedeploy';
import { currentUser } from './auth';

export const DATA = WeDeploy.data('data-taste.wedeploy.io');

/**
 * Used to convert an array of objects into an array of just the value property.
 * @param {Array} objectArray The object array to convert.
 * @return {Array} The value array.
 */
function convertToValueArray(objectArray = []) {
  return objectArray.map(item => item.value);
}

/**
 * Creates a new place.
 */
export function createPlace({
  name,
  address1,
  address2,
  city,
  state,
  zip,
  phoneNumber,
  website,
  yelp,
  categories
}) {
  const categoriesValuesArray = convertToValueArray(categories);

  return DATA.auth(currentUser).create('places', {
    name,
    address1,
    address2,
    city,
    state,
    zip,
    phoneNumber,
    website,
    yelp,
    categories: categoriesValuesArray
  });
}
