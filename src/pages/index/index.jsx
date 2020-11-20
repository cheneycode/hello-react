import Header from './component/Header'
import Table from './component/Table'
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
<<<<<<< HEAD
                <Route path="/" exact render={(props) => <Link1 id="111" {...props} />} />
                <Route path="/link2" component={link2} />
                <Route path="/link3" component={link3} />
=======
				<Table></Table>
>>>>>>> 8d25955ed6df21f06f65f5f011ca7bd9a7300c8a
            </div>
        )
    }
}
export default Index