import React from 'react';
import './Card.scss'
class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
    }
    componentDidMount() {
    }
    toLink(url) {
        window.location.href = url
    }
    render() {
        const { title, source, imgsrc } = this.props.item
        return (
            // onClick={() => this.toLink(display_url)} 
            <div className="card-info"  >
                <div className="card-top" >
                    <div className="card-title" >
                        {title}
                    </div>
                    <div className="card-image" >
                        <img src={imgsrc} />
                    </div>
                </div>
                <div className="card-bottom" >
                    {source}
                </div>
            </div>
        )
    }
}
export default Card