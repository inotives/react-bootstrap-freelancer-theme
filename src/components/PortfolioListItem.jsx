import React from 'react';
import PortfolioItemDetailModal from './PortfolioItemDetailModal.jsx';

class PortfolioListItem extends React.Component {
  render() {
    return (
      <div>
        <div className="col-sm-4 portfolio-item">
            <a href={'#'+this.props.modalName} className="portfolio-link" data-toggle="modal">
                <div className="caption">
                    <div className="caption-content">
                        <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                </div>
                <img src={this.props.imgUrl} className="img-responsive" alt="" />
            </a>
        </div>
        <PortfolioItemDetailModal imgUrl={this.props.imgUrl} modalName={this.props.modalName}/>
      </div>

    );
  }
}

export default PortfolioListItem;
