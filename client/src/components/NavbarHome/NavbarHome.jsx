import React from 'react';
import { Link, NavLink } from "react-router-dom";

const styles = {

  navbar: {
    fontFamily: "Special Elite, cursive",
    background: " #94b8b8",
   
  },

  title: {

    color: "#FFFFFF",
    fontFamily: "Special Elite, cursive",
    // marginTop: 20,
    // paddingRight: 35
  },
  tab: {
    color: "#FFFFFF",
    fontFamily: "Special Elite, cursive",
    marginTop: 20,
    paddingRight: 35,
   
  }
}

const Navbar = () => {
  
    return (      
        <>
        <div>
          <nav className="navbar is-mobile" role="navigation" aria-label="main navigation" style={styles.navbar}>
            <div className="navbar-brand">
  
              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                href="/"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
  
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                {/* <a className="navbar-item">Home</a> */}
  <Link to="/" className="navbar-item title is-1" style={styles.title}>Tut<i className="fas fa-apple-alt fa-xs" style={{paddingBottom: "12px"}}></i>r Hub</Link>
  
  </div>

  
  
  <ul className="navbar-end">
  <li>
  <NavLink to="/landing" className="navbar-item title is-4" activeClassName="active" style={styles.tab}>Session</NavLink>
  </li>
  <li>
  <NavLink to="/directory" className="navbar-item title is-4" activeClassName="active" style={styles.tab}>Tutors</NavLink>
  </li>
       
       <li>
       <NavLink to="/loginform" className="navbar-item title is-4" activeClassName="active" style={styles.tab}>Sign-in</NavLink>
       </li>
                


              
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
};

export default Navbar;
