import React, { PureComponent, Fragment } from 'react'
import { Row, Col, Container, Navbar, Nav, NavItem } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'

import Routes from 'common/routes'

class RootPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Navbar color="light" light expand="md">
          <Nav navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/posts">Posts</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Container>
          <Row>
            <Col sm="12">
              <Routes />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default withRouter(RootPage)
