import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return(
      <div>
        <div>
        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
        <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}}></div>
            <h1 id="colorlib-logo"><a href="index.html">Jackson Ford</a></h1>
            <span className="position"><a href="#">UI/UX/Designer</a> in Philippines</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li><a href="#"><i className="icon-facebook2"></i></a></li>
                <li><a href="#"><i className="icon-twitter2"></i></a></li>
                <li><a href="#"><i className="icon-instagram"></i></a></li>
                <li><a href="#"><i className="icon-linkedin2"></i></a></li>
              </ul>
            </div>
          </nav>
          <div className="colorlib-footer">
              <p><small>
                  Thanks <a href="https://colorlib.com" target="_blank">Colorlib</a> for inspiration
              </small></p>
              <p><small>
              </small></p>
            </div>
        </aside>
        </div>
      </div>
    )
  }
}
