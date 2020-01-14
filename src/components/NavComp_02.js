import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Nav,
    NavItem,
    NavDropdown, // optional
    MenuItem, // optional
    TabContent,
    TabPane
} from '@trendmicro/react-navs';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-navs/dist/react-navs.css';

// [Optional] Include react-dropdown.css when using NavDropdown
import '@trendmicro/react-dropdown/dist/react-dropdown.css'

export class NavComp_02 extends Component {



  render() {

      const mystyle = {
          background: '#00aa50',
          padding: '5px',
          borderBottom: '5px #ccc dotted'
      };

      const mystyle_02 = {
          background: '#f4f4f4',
          padding: '5px',
          borderBottom: '1px #ccc dotted'
      }

    return (
        <div><svg width={1800} height={200} style={mystyle}>
        <rect x={0} y={2} width={28} height={28} />
            <g x={100} y={0} width={28} height={28}  style={mystyle} />
            <g x={0} y={0} width={28} height={28}  style={mystyle_02} />

        </svg>
        </div>
  )
  }
}



export default NavComp_02
