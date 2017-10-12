import React from 'react';
import RequestListRow from './RequestListRow';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class RequestList extends React.Component{

  requestRow(request, index) {
    return <div key={index}>{request.title}</div>;
  }

  render() {
    return (
      <div>
        <h2>Book List</h2>

        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Donor</th>
              <th>Location</th>
              <th></th>
            </tr>
          </thead>
          <ReactCSSTransitionGroup
            transitionName="request-item"
            transitionLeave={true}
            transitionAppear={true}
            transitionAppearTimeout={700}
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}
            component="tbody"
          >
            {this.props.requests.map(request=>
                <RequestListRow key={request.id} request={request} removeRequest={this.props.removeRequest} />
            )}
          </ReactCSSTransitionGroup>
        </table>
      </div>
    )
  }

}

export default RequestList;
