const React = require('react');

class Profile extends React.Component {
  render() {
    return <div className="page-container">
      <div className="profile">
        <img className="photo" src="static/photo.jpg"/>
        <div className="text">
          <h1 className="h1">Hello, world. I'm Kara.</h1>
          <h3 className="h3">
            Timezone aficionado & engineer @
            <a target="_blank" href="https://www.thinkful.com">Thinkful</a>
          </h3>
          <div className="icons">
            <a target="_blank" href="https://www.twitter.com/kalaliana">
              <i className="icon fa fa-twitter fa-2x"/>
            </a>
            <a target="_blank" href="https://github.com/learykara">
              <i className="icon fa fa-github fa-2x"/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/learykara">
              <i className="icon fa fa-linkedin fa-2x"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  }
}


module.exports = {Profile}
