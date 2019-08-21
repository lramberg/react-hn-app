import React, { Component } from 'react';

import NavBar from '../../components/NavBar/NavBar';
import PostsDisplay from '../../components/PostsDisplay/PostsDisplay';

class HackerNews extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <PostsDisplay />
            </div>
        );
    }
}

export default HackerNews;