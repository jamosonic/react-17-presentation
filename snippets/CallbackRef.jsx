render() {
  return (
    <div>
      <input 
        type="text" 
        ref={elem => this.inputField = elem} 
      />
    </div>
  );
}