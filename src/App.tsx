import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export type State = {
  selectedTab: Tab,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  setSelectedTab = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is
          {this.state.selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTab.id}
          onTabSelected={this.setSelectedTab}
        />
      </div>
    );
  }
}

export default App;