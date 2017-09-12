import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
require('../css/header.css');

class Header extends Component {
  renderNav() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">
              <i className="fa fa-google" aria-hidden="true" />oogle
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
      <nav>
        <div className="nav-wrapper container header">
          <Link
            style={{ color: '#3d3f4d', opacity: '.9' }}
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            <i className="fa fa-paper-plane" />
            EMAILY
          </Link>
          <ul className="right">{this.renderNav()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(Header);
