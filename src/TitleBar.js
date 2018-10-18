import React, { Component } from 'react';


class TitleBar extends Component {
  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
          <tr>
            <td>
              <img className="logo" alt="app icon" width="50" src={this.props.logo}/>
            </td>
            <td className="title">
              <h1>{this.props.appName}</h1>
            </td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default TitleBar;