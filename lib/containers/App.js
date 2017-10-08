import React from 'react';
import { connect } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Icon,
  Navigator,
  Page,
  List,
  ListItem,
  Toolbar,
  ToolbarButton,
  Splitter,
  SplitterSide,
  SplitterContent,
  Button,
  BackButton,
} from 'react-onsenui';
import ons from 'onsenui';

@connect(
  state => ({ ready: state.device.ready })
)
export default class App extends React.Component {

  static propTypes = {
    ready: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  }

  renderToolbar(route) {
    return (
      <Toolbar>
        <div className='left'>
          <ToolbarButton onClick={this.showMenu.bind(this)}>
            <Icon icon='ion-navicon, material:md-menu' />
          </ToolbarButton>
        </div>
        <div className='center'>{route.title}</div>
      </Toolbar>
    );
  }

  hideMenu() {
    this.setState({ isOpen: false });
  }

  showMenu() {
    this.setState({ isOpen: true });
  }

  load(route) {
    this.hideMenu();
    this.navi.replacePage(route, { animation: 'fade' });
  }

  renderPage(route, navi) {
    return (
      <Page
        key={route.title}
        renderToolbar={this.renderToolbar.bind(this, route)}
      >
        <section className="wrapper">
          <p>
            Welcome to the {route.title} page. Swipe right to open the menu.
          </p>
        </section>
      </Page>
    );
  }

  render() {
    return (
      <Splitter>
        <SplitterSide
          side='left'
          width={200}
          collapse={true}
          isSwipeable={true}
          isOpen={this.state.isOpen}
        >
          <Page>
            <List
              dataSource={['Home', 'Settings', 'About']}
              renderRow={title => (
                <ListItem key={title} onClick={this.load.bind(this, { title: title })} tappable>{title}</ListItem>
              )}
            />
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Navigator
            ref={navi => this.navi = navi}
            renderPage={this.renderPage.bind(this)}
            initialRoute={{ title: 'Home' }} />
        </SplitterContent>
      </Splitter>
    );
  }

}
