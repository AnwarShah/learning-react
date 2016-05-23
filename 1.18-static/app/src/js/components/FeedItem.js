/**
 * @jsx React.DOM
 */

var React = require('react');

var FeedItem = React.createClass({

  render: function() {
    return (
      <li className="list-group-item">
        <span className="badger badge-success">{this.props.voteCount}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.desc}</span>
        <span className="pull-right">
          <button id="up" className="btn btn-sm btn-primary">&urr;</button>
          <button id="down" className="btn btn-sm btn-primary">&drr;</button>
        </span>
      </li>
    );
  }

});

module.exports = FeedItem;
