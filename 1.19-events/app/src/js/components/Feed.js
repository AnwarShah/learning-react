/** @jsx React.DOM */

var React         = require('react');
var ShowAddButton = require('./ShowAddButton');
var FeedForm      = require('./FeedForm');
var FeedList      = require('./FeedList');

var PropTypes = React.PropTypes;

var Feed = React.createClass({

  getInitialState: function() {
    var FEED_ITEMS = [
      {key: '1', title: 'Realtime data!', description: 'Firebase is cool', voteCount: 49},
      {key: '2', title: 'Javascript is fun', description: 'Lexical scoping FTW', voteCount: 34},
      {key: '3', title: 'Coffee makes you awake', description: 'Drink responsibly', voteCount: 10}
    ];

    return {
      items: FEED_ITEMS,
      formDisplayed: false
    }
  },

  onToggleForm: function () {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    })
  },

  onNewItem: function (newItem) {
    var newItems = this.state.items.concat([newItem]);
    this.setState({
      items: newItems,
      formDisplayed: false
    });
  },

  onVote: function(item) {
    console.log(item);
  },

  render: function() {
    return (
      <div>

        <div className="container">
          <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
        </div>

        <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem}/>

        <br />
        <br />

        <FeedList items={this.state.items} onVote={this.onVote}/>

      </div>
    );
  }

});

module.exports = Feed;
