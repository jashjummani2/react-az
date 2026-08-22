import './navbar.css';

function NavItem({text}){
  return (
    <li className="nav-item">
      <div className="nav-item-link">{text}</div>
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
        <NavItem text="Home"/>
        <NavItem text="About"/>
        <NavItem text="Contact"/>
      </ul>
    
    </div>
  );
}

export default Navbar