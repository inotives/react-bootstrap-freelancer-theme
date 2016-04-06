import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className="text-center">
        <div className="footer-above">
            <div className="container">
                <div className="row">
                    <div className="footer-col col-md-4">
                        <h3>Location</h3>
                        <p>3481 Melrose Place<br>Beverly Hills, CA 90210</p>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>Around the Web</h3>
                        <ul className="list-inline">
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-google-plus"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-dribbble"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>About Freelancer</h3>
                        <p>Freelance is a free to use, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        Copyright &copy; Your Website 2014
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
  }

}

export default Footer
