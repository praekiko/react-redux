import React, { PureComponent } from 'react'
import { Row, Col, Container, Navbar, Nav, NavItem } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'

import CommonRouter from 'common/router/Router'

class RootPage extends PureComponent {
  render() {
    return (
      <Container>
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
        <Row>
          <Col sm="12">
            <CommonRouter />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(RootPage)
