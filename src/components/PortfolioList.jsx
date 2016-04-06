import React from 'react';
import PortfolioListItem from './PortfolioListItem.jsx';

class PortfolioList extends React.Component {

  constructor(props){
    super(props);
    this.state.portfolioList = [
      "http://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/cabin.png",
      "http://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/cake.png",
      "http://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/circus.png",
      "http://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/game.png",
      "http://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/safe.png",
      "http://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/submarine.png"
    ]
  }

  render () {
    if(this.state.portfolioList == "") return "loading...";
    return (
      <section id="portfolio">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2>Portfolio</h2>
                      <hr className="star-primary" />
                  </div>
              </div>
              <div class="row">
                {
                  this.state.portfolioList.map((list) => {return <PortfolioListItem imgUrl={list} key={list} />})
                }
              </div>
          </div>
      </section>


    );
  }

}

export default PortfolioList
