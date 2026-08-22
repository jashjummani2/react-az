import './navbar.css';

function NavItem({onNavItemClick, children}){
  
  return (
    <li className="nav-item" onClick={() =>onNavItemClick(children)}>
      <div className="nav-item-link">{children}</div>
    </li>
  );
}

function Navbar(props) {
    // or do Navbar({isloggedProps}) de-constucting the data variable
    // console.log(props);
    function handleClick(text){
    console.log("HELLO WORLD"+text);
    // console.log(props.children);
  }
  return (
    <div className="navbar-wrapper">
  
      <p>{props.isloggedProps ? "Logged In" : "Logged Out"}</p>
      <ul className="navbar">
        <NavItem onNavItemClick ={handleClick}>About</NavItem>
        <NavItem onNavItemClick ={handleClick}>Contact</NavItem>
        <NavItem onNavItemClick ={handleClick}>Projects</NavItem>
        {/* <NavItem text="About"/>
        <NavItem text="Contact"/> */}
      </ul>
    
    </div>
  );
}

export default Navbar