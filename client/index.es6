const React = require('react');
const ReactDOM = require('react-dom');

const {HelloWorld} = require('./HelloWorld');

require('./styles.less');

ReactDOM.render(<HelloWorld/>, document.getElementById('app'));
