import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import '../css/header.css';

class Header extends Component {
  renderNav() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">
              Login with <i className="fa fa-google" aria-hidden="true" />oogle
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: '0 10px', color: '#3d3f4d', opacity: '.9' }}>
            Credits: <span style={{ color: '#fdfdfd', fontSize: '19px' }}>{this.props.auth.credits}</span>
          </li>,
          <li key="3">
            <a href="/api/logout" style={{ color: '#3d3f4d', opacity: '.9' }}>
              Log Out
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="header">
          <div className="nav-wrapper">
            <Link
              style={{ color: '#3d3f4d', opacity: '.9' }}
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo"
            >
              <i className="fa fa-paper-plane" />
              EMAILY
            </Link>
            <ul className="right right hide-on-med-and-down">{this.renderNav()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(Header);
