import React from 'react'
import PropTypes from 'prop-types'
import style from '../styles/nav.css';
import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function NavBar(props) {
    window.addEventListener('load', function () {

        let nav_toggle = document.getElementById('nav_toggle');
        let nav_ul = document.getElementById('nav_list');
        let close = 0;
        if (nav_toggle) {

            let i = 0;
            nav_toggle.addEventListener('click', () => {

                if (close == 1) {
                    nav_ul.classList.remove("active")
                    nav_toggle.classList.remove("active");
                    close = 0;
                    
                }
                else {
                    nav_ul.classList.add("active")
                    nav_toggle.classList.add("active");
                    close = 1;

                }



            })



        }
    });

    return (
        
        <div style={style}>
            
            <section className="navigation">
                <div className="nav-container">
                    <div className="brand">
                        <Link to="/">News Adda</Link>
                    </div>
                    <nav>
                        <div className="nav-mobile">
                            <button id="nav_toggle" href="#"><span></span></button>
                        </div>
                        <ul className="nav_list" id='nav_list'>
                            {/* <!-- Setting the links to #! will ensure that no action takes place on click. --> */}
                            <li><a href="/">Top News</a></li>

                            <li><a href="/entertainment">Entertainment</a></li>
                            <li><a href="/business">Business</a></li>
                            <li><a href="/science">Science</a></li>
                            <li><a href="/technology">Technology</a></li>
                            <li><a href="/about">About</a></li>
                            {/* <li><a href="/">Contact Me</a></li> */}
                        </ul>
                    </nav>
                </div>
            </section>

        </div>
    )
}





export default NavBar

