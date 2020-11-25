import React from 'react';
import { Fragment } from 'react';

import Header from './component/Header.jsx'
import Tabs from './component/Tabs.jsx'
import Card from './component/Card.jsx'
import axios from 'axios'; // 引入axios库
import './css/index.css'
class Index extends React.Component {
    constructor() {
        super()
        this.api_url = "https://api.xiaohuwei.cn/news.php?type="
        this.state = {
            cardList: [],
        };
    }
    componentDidMount() {
        this.tabChange();
    }
    tabChange(e = 'toutiao') {
        axios.get(this.api_url + e)
            .then((res) => {
                this.setState({
                    cardList: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        let { cardList } = this.state;
        return (
            <Fragment>
                <div className="page" >
                    <Header></Header>
                    <Tabs change={(e) => this.tabChange(e)} ></Tabs>
                    <div className="card-list" >
                        {
                            cardList.length ? cardList.map((item, index) => {
                                return <Card key={index} item={item} ></Card>
                            }) : '加载中...'
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Index