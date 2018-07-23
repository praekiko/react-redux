import React, { PureComponent } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import PostAction from 'modules/post/actions'

class PostsPage extends PureComponent {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props

    return (
      <Jumbotron fluid>
        <Container fluid>
          {posts.isFetching ? (
            <p>Loading...</p>
          ) : (
            posts.data.map(post => (
              <div key={post.id}>
                <Link to={`/posts/${post.id}`}>
                  <Button color="secondary">{post.title}</Button>
                </Link>
              </div>
            ))
          )}
        </Container>
      </Jumbotron>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = {
  fetchPosts: PostAction.fetchPosts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage)
