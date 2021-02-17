import React from 'react';
import { connect } from 'react-redux'; 

import ReactAux from '../ReactAux/ReactAux';

const Layout: React.FC = (props) => {

    return(
        <ReactAux>
            <main>
              {props.children}
            </main>
        </ReactAux>
    )

}

const mapStateToProps = () => {
    return {
        
    }
}

export default connect(mapStateToProps)(Layout);