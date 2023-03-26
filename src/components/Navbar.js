import { Component } from "react";
import "./NavbarStyles.css";

class Navbar extends Component {
    state = { clicked: false};
    handleClick = () => {
        this.setState ({clicked:!this.state.clicked})
    }
    render() {
    return (
        <nav>
            <a href="index.html">Logo</a>
            <div>
                <ul id="navbar">
                    <li>
                        <a className="active" href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="index.html">Blog</a>
                    </li>
                    <li>
                        <a href="index.html">About</a>
                    </li>
                    <li>
                        <a href="blog.html">Contact</a>
                    </li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
    )
    
}
};

export default Navbar;