import React, { PureComponent } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import { connect } from 'react-redux'

import RootAction from './actions'

class RootPage extends PureComponent {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props
    return (
      <Jumbotron fluid>
        <Container fluid>
          {posts.isFetching ? (
            <div>Loading...</div>
          ) : (
            posts.data.map(post => <p key={post.id}>{post.title}</p>)
          )}
        </Container>
      </Jumbotron>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = {
  fetchPosts: RootAction.fetchPosts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootPage)
