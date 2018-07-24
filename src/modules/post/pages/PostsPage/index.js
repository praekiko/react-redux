import React, { PureComponent } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import PostActions from 'modules/post/actions'
import PostSelectors from 'modules/post/selectors'

class PostsPage extends PureComponent {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts, isFetching } = this.props

    return (
      <Jumbotron fluid>
        <Container fluid>
          {isFetching ? (
            <p>Loading...</p>
          ) : (
            posts.map(post => (
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

const mapStateToProps = state => ({
  posts: PostSelectors.getPosts(state),
  isFetching: PostSelectors.getPostsIsFetching(state)
})

const mapDispatchToProps = {
  fetchPosts: PostActions.fetchPosts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage)
