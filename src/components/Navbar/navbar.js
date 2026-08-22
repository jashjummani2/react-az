import './navbar.css';

function NavItem({onNavItemClick, children}){
  
  return (
    <li className="nav-item" onClick={onNavItemClick}>
      <div className="nav-item-link">{children}</div>
    </li>
  );
}

function Navbar(props) {
    // or do Navbar({isloggedProps}) de-constucting the data variable
    // console.log(props);
    function handleClick(){
    console.log("HELLO WORLD");
    // console.log(props.children);
  }
  return (
    <div className="navbar-wrapper">
  
      <p>{props.isloggedProps ? "Logged In" : "Logged Out"}</p>
      <ul className="navbar">
        <NavItem onNavItemClick ={handleClick}>About</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Projects</NavItem>
        {/* <NavItem text="About"/>
        <NavItem text="Contact"/> */}
      </ul>
    
    </div>
  );
}

export default Navbar