import React from 'react';
import '../styles/navbarStyle.css'
import '../styles/lines.css'

const Navbar = () => {
    return(
        <nav>
            <div className="row">
                <div className="col">
                    <section className="p15">
                        <div class="lines">
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <a href="">İlhan Ünlü
                            <div className="t1">
                                <div className="in"></div>
                            </div>
                            <div className="t2">
                                <div className="in"></div>
                            </div>
                        </a>
	                </section>
                    <div className="p15-text">
                        <p>Software Developer</p>
                    </div>
                    <div className="p15">
                        <ul className="social-network social-circle">
                        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" className="icoGoogle" title="İnstagram"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;