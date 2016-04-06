import React from 'react';

class PortfolioListItem extends React.Component {
  render() {
    return (

      <div class="col-sm-4 portfolio-item">
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
              <div class="caption">
                  <div class="caption-content">
                      <i class="fa fa-search-plus fa-3x"></i>
                  </div>
              </div>
              <img src={this.props.imgUrl} class="img-responsive" alt="" />
          </a>
      </div>

    );
  }
}

export default PortfolioListItem;
