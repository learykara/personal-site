const React = require('react');
const ReactDOM = require('react-dom');

const {Profile} = require('./Profile');

require('./styles.less');

ReactDOM.render(<Profile/>, document.getElementById('app'));
