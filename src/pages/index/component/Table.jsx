import React from 'react';
import List from './List'
import '../css/table.css'
const tableData = [{
	id:1,
	name:'apple 1',
	count:10,
	desc:'描述'
},{
	id:2,
	name:'apple 2',
	count:12,
	desc:'描述'
},{
	id:3,
	name:'apple 3',
	count:12,
	desc:'描述'
}]

class Table extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data:tableData
		};
	}
	getData(){
		if(tableData.length>0){
			return this.state.data.map((item,index)=>{
					   return <List key={index} data={item} onDel={this.del.bind(this)} ></List>
				   })
		}else{
			return <div>暂无数据</div>
		}
	}
	
	del = (id) => {
		this.setState({
			data:this.state.data.slice(1,id)
		})
		
		console.log('id',id,this.state.data);
	}
    render() {
        return (
            <div>
                <div className="table" >
					{
						this.getData()
					}
                </div>
            </div>
        )
    }
}
export default Table