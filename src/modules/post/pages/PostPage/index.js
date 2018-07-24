import React, { PureComponent } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import { connect } from 'react-redux'

import PostActions from 'modules/post/actions'
import PostSelectors from 'modules/post/selectors'

class PostPage extends PureComponent {
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props

    this.props.fetchPost(id)
  }

  render() {
    const { post, isFetching } = this.props

    return (
      <Jumbotron fluid>
        <Container fluid>
          {isFetching ? <p>Loading...</p> : <h1 key={post.id}>{post.title}</h1>}
        </Container>
      </Jumbotron>
    )
  }
}

const mapStateToProps = state => ({
  post: PostSelectors.getPost(state),
  isFetching: PostSelectors.getPostIsFetching(state)
})

const mapDispatchToProps = {
  fetchPost: PostActions.fetchPost
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage)
