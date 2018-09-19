class ErrorBoundary extends React.Component {
  state = {hasError: false}

  componentDidCatch(error, info) {
    this.setState({hasError: true})
    logErrorToBugsnag(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
