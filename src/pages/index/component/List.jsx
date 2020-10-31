import React from 'react';
import '../css/list.css'
class List extends React.Component {
	constructor(props){
		super(props)
		this.state = {};
	}
    render() {
        return (
            <div className="row" >
            	<div className="col">
					{this.props.data.id}
				</div>
				<div className="col">
					{this.props.data.name}
				</div>
				<div className="col">
					{this.props.data.count}
				</div>
				<div className="col">
					<button onClick={()=>{this.props.onDel(this.props.data.id)}} >删除</button>
				</div>
            </div>
        )
    }
}
export default List