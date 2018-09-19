class BodyDiv extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  render() {
    return ReactDOM.createPortal(
      'z-index 10,000 is not the answer.',
      this.el,
    )
  }
}
