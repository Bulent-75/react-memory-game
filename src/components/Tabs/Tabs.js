import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import Tab from '@bit/semantic-org.semantic-ui-react.tab'

const Tabs = () => (
  <div className="Tabs">
    Tabs Component
  </div>
);
const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane attached='top'>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane attached='top'>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane attached='top'>Tab 3 Content</Tab.Pane> },
]
const TabExampleAttachedBottom = () => <Tab menu={{ attached: 'bottom' }} panes={panes} />

export default () => (<div>{style}<TabExampleAttachedBottom/></div>)
