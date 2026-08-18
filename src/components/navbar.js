function Navbar(props) {
    // or do Navbar({isloggedProps}) de-constucting the data variable
    console.log(props);
  return (
    
    <p1>{props.isloggedProps ? "Logged In" : "Logged Out"}</p1>
  );
}

export default Navbar