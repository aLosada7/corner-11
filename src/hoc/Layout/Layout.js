import React from 'react';
import { connect } from 'react-redux'; 

import ReactAux from '../ReactAux/ReactAux';

const Layout = (props) => {

    return(
        <ReactAux>
            <main>
              {props.children}
            </main>
        </ReactAux>
    )

}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps)(Layout);