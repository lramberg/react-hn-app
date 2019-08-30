import React, { Component } from 'react';
import axios from 'axios';

import NavBar from '../../components/NavBar/NavBar';
import PostsDisplay from '../../components/PostsDisplay/PostsDisplay';

class HackerNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: []
        }
    }

    componentDidMount() {
        var promises = [];
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(res => {
            var response = res.data.splice(0, 100)
            return response
        })
        .then(response => {
            response.forEach( item => {
                promises.push(axios.get("https://hacker-news.firebaseio.com/v0/item/" + item + ".json?print=pretty"))
            });
            return Promise.all(promises)
        })
        .then(results => {
            var storyData = results.map(result => {
                return result.data;
            })
            this.setState({ stories: storyData});
        })
    }

    // componentDidMount() {
    //     var self = this;
    //     var stories = [];
    //     axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    //     .then(res => {
    //         var response = res.data.splice(0, 100)
    //         return response
    //     })
    //     .then(response => {
    //         response.forEach(item => {
    //             axios.get("https://hacker-news.firebaseio.com/v0/item/" + item + ".json?print=pretty")
    //             .then(response => {
    //                 stories.push(response.data);
    //                 return stories
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    //     self.setState({ stories: stories, isLoaded: true })
    // }


    render() {
        console.log('state', this.state.stories)
        var story = this.state.stories.map((story, idx) => {
            return(
                <li key={idx}>
                    <a href={story.url}>{story.title}</a>
                </li>
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