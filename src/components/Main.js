import React, {Component} from "react";

export default class Main extends Component {
    
    componentWillMount() {
        this.props.auth.isAuthenticated() ? console.log("Login") : this.props.auth.login();
    }
    render() {
        return (
            <div>
                <p>Hello, {this.props.name}<br />
                Do you want to see the secret area? <a href="/secret">Click Here</a>
                </p>
                {!this.props.auth.isAuthenticated() &&
                <div>
                    <hr />
                    Please login first
                    <hr />
                    <button onClick={this.props.auth.login}>Login</button>
                </div>
                }
            </div>
        )
    }
}
