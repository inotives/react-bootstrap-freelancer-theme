import 'cssBootstrap';
import 'cssFreelancer';
import 'cssFontawesome';

import React from 'react';
import ReactDOM from 'reactDom';

import NavBar from './components/NavBar.jsx';
import WideSectionHeader from './components/WideSectionHeader';
import PortfolioList from './components/PortfolioList';
import About from './components/About.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <WideSectionHeader />
        <PortfolioList />
        <About />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
