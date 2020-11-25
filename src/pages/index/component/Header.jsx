import React from 'react';
import './Header.scss'
class Header extends React.Component {

    constructor() {
        super()
        this.state = {};
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className="header" >
                <div className="top-bar">
                    <div className="abs-l" ></div>
                    <div className="abs-c" ></div>
                    <div className="abs-r" ></div>
                </div>
            </div>
        )
    }
}
export default Header