/**
 * Functions to interact with WeDeploy data.
 * https://wedeploy.com/docs/data/saving-data/
 */

import WeDeploy from 'wedeploy';

export const DATA = WeDeploy.data('data-taste.wedeploy.io');

export function createPlace({
  name,
  address,
  city,
  state,
  zip,
  phoneNumber,
  website,
  yelp,
  categories
}) {
  return DATA.create('places', {
    name,
    address,
    city,
    state,
    zip,
    phoneNumber,
    website,
    yelp,
    categories
  });
}
