constructor(props) {
  super(props);
  this.inputField = React.createRef();
}
  
render() {
  return (
    <div>
      <input type="text" ref={this.inputField} />
    </div>
  );
}