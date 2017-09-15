import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="row" key={survey._id}>
          <div className="col s10 push-s1">
            <div className="card darken-1 black-text" style={{ padding: '20px 35px 30px 35px' }}>
              <div className="card-content">
                <p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
                <span className="card-title">{survey.title}</span>
                <p>{survey.body}</p>
              </div>
              <div className="card-action">
                <a style={{ color: '#81c784' }} href="#">
                  Yes: {survey.yes}
                </a>
                <a style={{ color: '#ef5350' }} href="#">
                  No: {survey.no}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
