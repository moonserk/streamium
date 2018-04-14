import React from 'react';

import HomePage from '../HomePage'

import 'bootstrap/dist/css/bootstrap.min.css'

const Home = (props) => (
    <HomePage class={{columns: "mx-auto", container: "feed-container container-margin-top"}}
              url={"fakedata.json"}
              filterText={props.filterText} />
)

export default Home;