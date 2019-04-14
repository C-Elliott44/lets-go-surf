import React, {Component} from "react";
import "../Styles/Nav.css"
import "../Styles/Header.css"
import "../Styles/Map.css"
import Map from "../components/Map"

export default class Secret extends Component {
    constructor(props) {
        super(props);
        this.state = {address: '',
                      place_id: '',
                      details: '',
                      zoom: 12,
                      center: {
                        lat: 32.6858853,
                        lng: -117.18308910000002
                      }
                    };
      };

    render() {
        return (
            <div className="Container">
                <header>
                    <h1>Lets Go Surf</h1>
                </header>
                <div className="NavBar">
                    <div className="Avatar">"Profile Picture"</div>
                    <div className="NavItem">Lets Surf</div>
                    <div className="NavItem">Profile</div>
                    <div className="NavItem">Messages</div>
                    <div className="NavItem">Settings</div>
                    <div className="NavItem">Filter</div>
                    <div></div>
                    <div className="NavItem" onClick={this.props.auth.logout}>Logout</div>
                </div>
                <Map 
                    center = {this.state.center}
                    zoom = {this.state.zoom}
                />
            </div>
        )
    }
}