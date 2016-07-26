import React from 'react';
// var Paginate = require('react-paginate-component');
import Paginator from 'react-pagify';
import segmentize from 'segmentize';

class paging extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      maxVisible: 5,
      pagination: {
        page: 1,
        perPage: 10,
      }
    };
  }

  selectPage(page) {
    const state = this.state;
    const pagination = state.pagination || {};
    const pages = 10;

    pagination.page = Math.min(Math.max(page, 1), pages);

    this.setState({
      pagination: pagination
    });
  }

  render() {
    return (
      <div>
          <Paginator.Context className="pagify-pagination"
            segments={segmentize({
              page: this.state.pagination.page,
              pages: 10,
              sidePages: 4,
              centerPage: [this.state.currentPage]
            })} onSelect={this.selectPage.bind(this)}>
            <Paginator.Button page={this.state.pagination.page - 1}>Previous</Paginator.Button>
            <Paginator.Segment field="previousPages" />
            <Paginator.Segment field="centerPage" className="selected" />
            <Paginator.Segment field="nextPages" />
            <Paginator.Button page={this.state.pagination.page + 1}>Next</Paginator.Button>
          </Paginator.Context>
      </div>
    );
  }
}

module.exports = paging;