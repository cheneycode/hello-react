import Header from './component/Header'
import React from 'react';
import { Route } from 'react-router-dom';
import Link1 from './component/link1';
import link2 from './component/link2';
import link3 from './component/link3';
class Index extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Route path="/" exact render={(props) => <Link1 id="111" {...props} />} />
                <Route path="/link2" component={link2} />
                <Route path="/link3" component={link3} />
            </div>
        )
    }
}
export default Index