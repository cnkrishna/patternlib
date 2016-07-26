import React from 'react';
import { Link, browserHistory } from 'react-router';
import assetsContainer from '../container/assetsContainer';
import AddAnAsset from './AddAnAsset'

export default function App({ children }) {

 let child = <div style={{ marginTop: '1.5em' }}>{children}</div>;

  return (
    <div>
    <AddAnAsset children={children} />    
    </div>
  )
}

export default App
