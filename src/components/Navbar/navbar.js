import './navbar.css';

function NavItem(props){
  return (
    <li className="nav-item">
      <div className="nav-item-link">{props.children}</div>
    </li>
  );
}

function Navbar(props) {
    // or do Navbar({isloggedProps}) de-constucting the data variable
    console.log(props);
  return (
    <div className="navbar-wrapper">
  
      <p>{props.isloggedProps ? "Logged In" : "Logged Out"}</p>
      <ul className="navbar">
        <NavItem>About</NavItem>
        {/* <NavItem text="About"/>
        <NavItem text="Contact"/> */}
      </ul>
    
    </div>
  );
}

export default Navbar