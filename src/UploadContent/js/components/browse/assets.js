"use strict";
var React = require('react');

class assets extends React.Component {
  render () {
     var item = this.props.productTemp;

     return (
          <div key={item.id} className="card-item">
                <input type="checkbox" />
                <div className="thumbnail card-body">
                    <img src={item.url} className="card-img" alt="product image" />
                </div>
               <footer className="card-footer">
                <div className="browseDescWrap">
                  <p>{item.desc}</p>
                </div>
                <div className="footer-icon">
                    <i className= {item.type + " image icon-accessibility"}></i>
                </div>
               </footer>
          </div>
    );
  }
}

module.exports = assets;