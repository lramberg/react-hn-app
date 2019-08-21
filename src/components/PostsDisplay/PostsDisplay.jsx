import React, { Component } from 'react';
import axios from 'axios';

// import { getTopStories } from '../../services/api';

class PostsDisplay extends Component {
    state = {
        stories: []
    }

    componentDidMount() {
        var self = this;
        // var json = getTopStories();
        // self.setState({ stories: json })
        var stories = [];
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(res => {
            var results = res.data.slice(0, 100);
            console.log("res", results)
            results.forEach(item => {
                axios.get(
                    "https://hacker-news.firebaseio.com/v0/item/" + item + ".json?print=pretty"
                )
                .then(res => {
                    stories.push(res.data);
                })
            })
        })
        self.setState({ stories: stories })
    }

    render() {
        console.log('state', this.state.stories)
        var story = this.state.stories.map((story, idx) => {
            return (
                <li key={idx}>
                    {story.title}
                </li>
            )
        })
        return (
            <div>
                <ul>
                    { story }
                </ul>
            </div>
        );
    }
}

export default PostsDisplay;