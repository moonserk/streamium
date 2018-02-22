import React from 'react';

import HomePage from '../HomePage'

import 'bootstrap/dist/css/bootstrap.min.css'

const Home = (props) => (
    <HomePage class={{columns: "card-columns", container: "container-fluid container-margin-top"}}
              url={"/fakedata.json"} />
)

export default Home;