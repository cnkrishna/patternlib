import React from 'react';
import AddAnAsset from './AddAnAsset';
import AssetsContainer from '../container/AssetsContainer';
import FolderTree from '../container/TreePaneContainer';
export default function BrowseAssets({ children }) {
  return (
    <div>
        <div>
            <span>Browsing in: The Humanities: Culture, Continuity and Change, VolumeIII</span>
        </div>
        <div className="row">
            <div className="col-md-4 seperator">
                <FolderTree/>
            </div>
            <div className="col-md-8">
                <AssetsContainer />
            </div>
        </div>
    </div>
  )
}

module.exports = BrowseAssets;

