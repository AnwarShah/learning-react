/** @jsx React.DOM */

var React = require('react');
var MessageBox = require('./MessageBox');

var reactComponent = React.render(
  <MessageBox />,
  document.getElementById('app')
);