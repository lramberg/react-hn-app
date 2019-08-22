import React, { Component } from 'react';
import axios from 'axios';

import NavBar from '../../components/NavBar/NavBar';
import PostsDisplay from '../../components/PostsDisplay/PostsDisplay';

class HackerNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            stories: []
        }
    }

    componentDidMount() {
        var self = this;
        var stories = [];
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(res => {
            var response = res.data.splice(0, 100)
            return response
        })
        .then(res => {
            res.forEach(item => {
                axios.get("https://hacker-news.firebaseio.com/v0/item/" + item + ".json?print=pretty")
                .then(res => {
                    stories.push(res.data);
                    return stories
                })
                .catch(err => {
                    console.log(err)
                })
            })
        })
        .catch(err => {
            console.log(err)
        })
        self.setState({ stories: stories })
    }

    // getStoryIds = async () => {
    //     try {
    //         await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    //         .then(res => {
                
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    render() {
        console.log('state', this.state.stories)
        console.log('loaded', this.state.isLoaded)
        var story = this.state.stories.map((story, idx) => {
            return(
                <li key={idx}>{story}</li>
            )
        })
        return (
            <div>
                <NavBar />
                <PostsDisplay />
                <ul>
                    {story}
                </ul>
            </div>
        );
    }
}

export default HackerNews;