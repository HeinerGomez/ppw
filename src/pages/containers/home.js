import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';

class Home extends Component {
    render() {
        return (
            <HomeLayout>
                <p>Dentro del container</p>
            </HomeLayout>
        );
    }
}

export default Home;