import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  // const [getColor, setColor] = useState('light')

  // const colorPallete=(color)=>{
  //   if(color==="red"){
  //     document.body.style.backgroundColor = 'blue'
  //     document.body.style.color = 'white'
  //     props.showAlert("Red pallete has been enabled" , "success")
  //   }
  //   else if(color==="green"){
  //     document.body.style.backgroundColor = 'green'
  //     document.body.style.color = 'white'
  //     props.showAlert("Green pallete has been enabled" , "success")
  //   }
  //   else if(color==="pink"){
  //     document.body.style.backgroundColor = 'pink'
  //     document.body.style.color = 'black'
  //     props.showAlert("Pink pallete has been enabled" , "success")
  //   }
  //   else{
  //     document.body.style.backgroundColor = 'light'
  //     document.body.style.color = 'black'
  //     props.showAlert("light mode has been enabled" , "success")
  //   }
  // }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* <div class="nav-item dropdown ">
            <a
              class="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Color Palette
            </a>
            <ul
              class={`dropdown-menu bg-${props.mode === "light" ? "light" : "dark"
                } text-${props.mode === "light" ? "dark" : "light"} `}
            >
              <li style={{backgroundColor: "#c90505",
                  color:"white"}}>
                <div
                  class={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"
                    } mx-3`}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    onClick={colorPallete("red")}
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    Red Mode
                  </label>
                </div>
              </li>
              <li style={{backgroundColor: "green",color:"white"}} >
                <div
                  class={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"} mx-3`} >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    onClick={colorPallete("green")}
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    Green Mode
                  </label>
                </div>
              </li>
              <li style={{backgroundColor: "lightpink"}} >
                <div
                  class={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"
                    } mx-3`}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    onClick={colorPallete("pink")}
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    Pink Mode
                  </label>
                </div>
              </li>
            </ul>
          </div> */}
          <div
            class={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"
              } mx-3`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.togglemode}
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Mode Switch
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
};
