import React from 'react';

class WideSectionHeader extends React.Component {
  render(){
    return (
      <header>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <img className="img-responsive" src="img/profile.png" alt="" />
                      <div className="intro-text">
                          <span className="name">Start Bootstrap</span>
                          <hr className="star-light" />
                          <span className="skills">Web Developer - Graphic Artist - User Experience Designer</span>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    );
  }
}

export default WideSectionHeader
