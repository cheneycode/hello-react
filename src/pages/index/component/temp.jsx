import React from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios'; // 引入axios库
import '../css/index.css'
class Temp extends React.Component {

    constructor() {
        super()
        //this.ipt = React.createRef();
        this.api_url = "/api/list.json"
    }

    // componentWillMount() { //在渲染前调用,在客户端也在服务端。
    //     console.log('---->componentWillMount')
    // }

    componentDidMount() {
        console.log('---->componentDidMount')

        // axios.get(this.api_url)
        //     .then((res) => {
        //         // const { goodlists } = res.data;
        //         // this.setState({
        //         //     list: goodlists,
        //         // });
        //         console.log(res)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    } //在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。

    // componentWillReceiveProps() {
    //     console.log('---->componentWillReceiveProps')
    // } //在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

    // shouldComponentUpdate() {
    //     console.log('---->shouldComponentUpdate')
    //     return true;
    // } //返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。可以在你确认不需要更新组件时使用。

    // componentWillUpdate() {
    //     console.log('---->componentWillUpdate')
    // }  //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

    // componentDidUpdate() {
    //     console.log('---->componentDidUpdate')
    // } //在组件完成更新后立即调用。在初始化时不会被调用。

    // componentWillUnmount() {
    //     console.log('---->componentWillUnmount')
    // } //
    render() {
        return (
            <div>
                <div className="header" >
                    {/* <input ref={this.ipt} className="search" type="text" /> */}
                    {/* <Link to="/">111111</Link>
                    <Link to="/link2">222222</Link>
                    <Link to="/link3">333333</Link> */}
                </div>
            </div>
        )
    }
}
export default Temp