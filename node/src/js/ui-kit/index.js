import React, { Component } from 'react';

import * as Kit from '*';

const req = require.context('.', false, /\w+Kit.js$/);

const kits = req.keys().map((kit, id) => ({
	component: req(kit, id).default,
	id,
	name: kit.replace('./', '').replace('Kit.js', '')
}));

class UIKit extends Component {
  render() {
    return (
      <div>
        <h1>UI Kit</h1>
      </div>
    )
  }
}

export default UIKit;
