import 'cssBootstrap';
import 'cssFreelancer';
import React from 'react';
import ReactDOM from 'reactDom';
import NavBar from './components/NavBar.jsx';
import WideSectionHeader from './components/WideSectionHeader';
import PortfolioList from './components/PortfolioList';

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <WideSectionHeader />
        <PortfolioList />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
