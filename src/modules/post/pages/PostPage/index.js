import React, { PureComponent } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import { connect } from 'react-redux'

import PostAction from 'modules/post/actions'

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
    const { post } = this.props

    return (
      <Jumbotron fluid>
        <Container fluid>
          {post.isFetching ? (
            <p>Loading...</p>
          ) : (
            <h1 key={post.data.id}>{post.data.title}</h1>
          )}
        </Container>
      </Jumbotron>
    )
  }
}

const mapStateToProps = ({ post }) => ({ post })

const mapDispatchToProps = {
  fetchPost: PostAction.fetchPost
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage)
