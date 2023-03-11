import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
   
      <div>
         <div>
<nav className="nav-head navbar navbar-expand-lg  ">
  <div className="container-fluid">
<Link to="/"><img src={logo} alt="MLE-Logo" className='nav-logo' /></Link>
    <button className=" navbar-light navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/*  */}

    {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}

<div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
  <div className="offcanvas-header">
  <img src={logo} alt="MLE-Logo" className='nav-logo' />
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <ul className="nav-tags navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link  active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item dropdown nav-acc-icon">
          <Link className="nav-link accordion-button collapsed" to="" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            SERVICES
          </Link>
          <div className='nav-accordion accordion-collapse collapse' id="flush-collapseOne"  aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <ul className='ss'>
       
        <li><Link className="accordion-body" to="#">FULL STACK</Link></li>
        <li><Link className="accordion-body" to="#">SERVICENOW</Link></li>
        <li><Link className="accordion-body" to="#">PEGA</Link></li>
        <li><Link className="accordion-body" to="#">MULESOFT</Link></li>
    </ul>
    <ul>
        
        <li><Link className="accordion-body" to="#">MACHINE LEARNING</Link></li>
        <li><Link className="accordion-body" to="#">CLOUD SERVICES</Link></li>
        <li><Link className="accordion-body" to="#">DATA ANALYTICS</Link></li>
        <li><Link className="accordion-body" to="#">BLOCKCHAIN</Link></li>
    </ul>
    <ul>
       
        <li><Link className="accordion-body" to="#">SALESFORCE</Link></li>
        <li><Link className="accordion-body" to="#">MICROSOFT DYNAMICS 365</Link></li>
        <li><Link className="accordion-body" to="#">SAP</Link></li>
        <li><Link className="accordion-body" to="#">ORACLE</Link></li>
    </ul>
    </div>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="#">CASE STUDIES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
        <li className="nav-item nav-acc-icon">
         
          <Link className="nav-link accordion-button collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#flush-collapseOTHER" aria-expanded="false" aria-controls="flush-collapseOTHER">
            OTHER
          </Link>
         
          {/*  */}
          <div className="accordion-collapse collapse  nav-accordion" id="flush-collapseOTHER"  aria-labelledby="flush-headingOTHER" data-bs-parent="#accordionFlushExample">
        <ul>
        <li><Link className="accordion-body " to="#">BLOG</Link></li>
        <li><Link className="accordion-body" to="#">NEWS</Link></li>
        <li className='nav-acc-icon'><Link className="accordion-body  accordion-button collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#flush-collapsePARTNER" aria-expanded="false" aria-controls="flush-collapsePARTNER">
            PARTNER
          </Link></li>
          </ul>
          <div className=" accordion-collapse collapse nav-accordion nav-accordion" id="flush-collapsePARTNER" aria-labelledby="flush-headingPARTNER" data-bs-parent="#accordionFlushExample">
          <ul>
       
        <li><Link className="accordion-body" to="#">CREATE AN ORDER</Link></li>
        <li><Link className="accordion-body" to="#">HIRE A TEAM</Link></li>
        <li><Link className="accordion-body" to="#">HIRE A RESOURCE</Link></li>
    </ul></div>
            {/* <Link className="dropdown-item dropdown-toggle " to="#" id="dropdown-layouts" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-haspopup="true"  aria-expanded="false">PARTNER</Link> */}
           {/*  */}
           
           {/*  */}
                      
        </div>
          
        </li>
      </ul>
  </div>
</div>


    {/*  */}
    <div className="nav-content collapse navbar-collapse" id="navbarText">
      <ul className="nav-tags navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">ABOUT</Link>
        </li>
        <li className="nav-item dropdown nav-services">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SERVICES
          </Link>
          <div className="dropdown-menu dropdown-menu-services" aria-labelledby="navbarDropdown">
          <ul>
       
        <li><Link className="dropdown-item" to="#">FULL STACK</Link></li>
        <li><Link className="dropdown-item" to="#">SERVICENOW</Link></li>
        <li><Link className="dropdown-item" to="#">PEGA</Link></li>
        <li><Link className="dropdown-item" to="#">MULESOFT</Link></li>
    </ul>
    <ul>
        
        <li><Link className="dropdown-item" to="#">MACHINE LEARNING</Link></li>
        <li><Link className="dropdown-item" to="#">CLOUD SERVICES</Link></li>
        <li><Link className="dropdown-item" to="#">DATA ANALYTICS</Link></li>
        <li><Link className="dropdown-item" to="#">BLOCKCHAIN</Link></li>
    </ul>
    <ul>
       
        <li><Link className="dropdown-item" to="#">SALESFORCE</Link></li>
        <li><Link className="dropdown-item" to="#">MICROSOFT DYNAMICS 365</Link></li>
        <li><Link className="dropdown-item" to="#">SAP</Link></li>
        <li><Link className="dropdown-item" to="#">ORACLE</Link></li>
    </ul>
    </div>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="#">CASE STUDIES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
        <li className="nav-item nav-other dropdown">
          <Link className="nav-link  dropdown-toggle " to="#" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" data-bs-auto-close="true"  aria-haspopup="true" aria-expanded="false" >
            OTHERS
          </Link>
          <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
        
        <Link className="dropdown-item " to="#">BLOG</Link>
        <Link className="dropdown-item " to="#">NEWS</Link>
        <div className=" dropdown dropend">
            <Link className="dropdown-item dropdown-toggle " to="#" id="dropdown-layouts" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-haspopup="true"  aria-expanded="false">PARTNER</Link>
            {/* <Link class="dropdown-item dropdown-toggle "  to="#"  id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-haspopup="false"  aria-expanded="false">PARTNER</Link> */}
            <div className="dropdown-menu" aria-labelledby="dropdown-layouts">
                <Link className="dropdown-item " to="#">CREATE AN ORDER</Link>
                <Link className="dropdown-item " to="#">HIRE A TEAM</Link>
                <Link className="dropdown-item " to="#">HIRE A RESOURCE</Link>
                
                
               
                
            </div>
        </div>
       
      
    </div>
          
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>



      </div>
  )
}

export default Navbar