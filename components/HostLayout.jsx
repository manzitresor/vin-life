import { NavLink, Outlet  } from "react-router-dom";

export default function HostLayout() {

  const styledActive = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
  }
  return (
    <>
    <nav className="host-nav">
      <NavLink 
              to="."
              end
              style={({isActive})=> isActive ? styledActive : null} 
              >
                Dashboard
              </NavLink>
      <NavLink 
              to="/host/income" 
              style={({isActive})=> isActive ? styledActive : null}
              >
                Income
              </NavLink>
      <NavLink 
              to="/host/vans" 
              style={({isActive})=> isActive ? styledActive : null}
              >
                vans
              </NavLink>
      <NavLink 
              to="/host/reviews"
              style={({isActive})=> isActive ? styledActive : null}
              >
                Reviews
              </NavLink>
    </nav>
    <Outlet />
    
    </>
  )
}
