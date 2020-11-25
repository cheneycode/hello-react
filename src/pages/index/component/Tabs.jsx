import React from 'react';
import './Tabs.scss'
class Tabs extends React.Component {

    constructor() {
        super()
        this.state = {
            current: "hot",
            menus: [{
                key: "精选",
                val: "hot"
            }, {
                key: "娱乐",
                val: "yule"
            }, {
                key: "头条",
                val: "toutiao"
            }, {
                key: "运动",
                val: "motion"
            }]
        };
        this.handClick = this.handClick.bind(this);
    }
    componentDidMount() {
    }
    handClick(e) {
        this.props.change(e)
        this.setState({
            current: e
        })
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    render() {
        const { menus, current } = this.state;
        return (
            <div className="top-menu-bar" >
                <div className="top-menu-more" >
                    <div className="list-shadow" ></div>
                    <a className="more-btn" href="#1" >
                        +
                    </a>
                </div>
                <div className="top-menu-list">
                    {
                        menus.map((item, index) => {
                            return <a className={["btn-link", current === item.val ? 'active' : ''].join(' ')} href="#1" key={index} onClick={() => this.handClick(item.val)} >{item.key}</a>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Tabs