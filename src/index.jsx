import 'cssBootstrap';
import 'cssFreelancer';
import 'cssFontawesome';

import React from 'react';
import ReactDOM from 'reactDom';

import NavBar from './components/NavBar.jsx';
import WideSectionHeader from './components/WideSectionHeader';
import PortfolioList from './components/PortfolioList';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <WideSectionHeader />
        <PortfolioList />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
