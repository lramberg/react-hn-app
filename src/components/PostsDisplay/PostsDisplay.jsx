import React, { Component } from 'react';

import { getTopStories } from '../../services/api';

class PostsDisplay extends Component {
    state = {
        stories: [],
        readyToRender: false
    }

    componentDidMount() {
        var self = this;
        var json = getTopStories();
        self.setState({ stories: json, readyToRender: true })
    }

    displayStory() {
        if (this.state.readyToRender) {
            this.state.stories.map((story, idx) => {
                console.log('story', story);
                return (
                    <li key={idx}>
                        {story.title}
                    </li>
                )
            })
        }
    }

    render() {
        console.log('state', this.state.stories)
        return (
            <div>
                <ul>
                    { this.displayStory() }
                </ul>
            </div>
        );
    }
}

export default PostsDisplay;