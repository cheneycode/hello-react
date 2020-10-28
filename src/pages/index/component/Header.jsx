import React from 'react';
import '../css/index.css'
class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header" >
                    <input  className="search" type="text"/>
                </div>
            </div>
        )
    }
}
export default Header