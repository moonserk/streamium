import React from 'react';

import HomePage from '../HomePage'

import 'bootstrap/dist/css/bootstrap.min.css'

const Feed = (props) => (
    /*
    //    <HomePage class={{columns: "col-md-6 mx-auto", container: "container-margin-top"}}
    //    url={"/fakedata.json"} />
    */
        <HomePage class={{columns: " mx-auto", container: "feed-container container-margin-top"}} 
                  url={"/fakedata.json"} />
)

export default Feed;