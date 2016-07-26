import React, { Component, PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AssetsContainer from '../../container/AssetsContainer';

class AssetFilters extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pe-assetFilters">
         <Tabs  id="filterAssets" selectedIndex={0}>
          <TabList>
            <Tab selected>All</Tab>
            <Tab>Image</Tab>
            <Tab>Video</Tab>
            <Tab>Audio</Tab>
          </TabList>
          <TabPanel>
            <AssetsContainer filter="all"/>
          </TabPanel>
           <TabPanel>
            Image
          </TabPanel>
          <TabPanel>
            video
          </TabPanel>
          <TabPanel>
            audio
           </TabPanel>
        </Tabs>
    </div>
    )
  }
}


module.exports = AssetFilters;