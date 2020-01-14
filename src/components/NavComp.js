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

export class NavComp extends Component {

  render() {
    return (
        <div>
        <Nav
            navStyle="tabs"
            activeKey={this.state.activeTab}
            onSelect={(eventKey, event) => {
                this.setState({ activeTab: eventKey });
            }}
            style={{
                borderBottomColor: 'transparent' // Make a transparent bottom border
            }}
        >
            <NavItem eventKey={1}>Item 1</NavItem>
            <NavItem eventKey={2}>Item 2</NavItem>
            <NavItem eventKey={3}>Item 3</NavItem>
            <NavDropdown eventKey={4} title="NavItem 4">
                <MenuItem eventKey={4.1}>Action</MenuItem>
                <MenuItem eventKey={4.2}>Another action</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.3}>Separated link</MenuItem>
            </NavDropdown>
        </Nav>
        <TabContent activeKey={this.state.activeTab}>
          <TabPane eventKey={1}>Tab 1 content</TabPane>
      <TabPane eventKey={2}>Tab 2 content</TabPane>
      <TabPane eventKey={3}>Tab 3 content</TabPane>
      <TabPane eventKey={4.1}>Tab 4.1 content</TabPane>
      <TabPane eventKey={4.2}>Tab 4.2 content</TabPane>
      <TabPane eventKey={4.3}>Tab 4.3 content</TabPane>
      </TabContent>
        </div>
    )
  }
}



export default NavComp
