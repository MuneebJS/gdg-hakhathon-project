import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import AddShare from './AddShare'
import MyShare from './MyShare'

export default class CompanyDashboard extends Component {
  state = { value: 'AddShare' }
  screens = { AddShare, MyShare }
  activeRoute = AddShare
  render() {
    return (
      <div style={{ padding: 30 }}>
        <Nav bsStyle="tabs" value activeKey={this.state.value} onSelect={value => {
          this.setState({ value })
          this.activeRoute = this.screens[value]
        }}>
          <NavItem eventKey="AddShare">MyShare</NavItem>
          <NavItem eventKey="MyShare">MyShare</NavItem>
        </Nav>
        <div style={{ padding: 30 }}>
          <this.activeRoute />
        </div>        
      </div>
    )
  }
}
