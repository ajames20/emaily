import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderNav() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
          <li key="3">
            <a href="/api/logout">Log Out</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
            EMAILY
          </Link>
          <ul className="right">{this.renderNav()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Header);
