import React, { Component } from 'react';

import { getTopStories } from '../../services/api';

class PostsDisplay extends Component {
    state = {
        isLoaded: false,
        stories: [],
        bookmarks: []
    }

    // componentDidMount() {
    //     var self = this;
    //     var json = getTopStories()
    //     self.setState({ stories: json })
    // }

    // displayStory() {
    //     if (this.state.readyToRender === true ) {
    //         this.state.stories.map((story, idx) => {
    //             return (
    //                 <li key={idx}>
    //                     {story[idx]}
    //                 </li>
    //             )
    //         })
    //     } else {
    //         return (
    //             <li>No Stories</li>
    //         )
    //     }
    // }

    // handleBookmark = (e) => {
    //     e.preventDefault();
        
    // }

    render() {
        // var story = this.state.stories.map((story, idx) => {
        //     return (
        //         <li key={idx}>
        //             <a href={story.url}>{story.title}</a>
        //             <p>Score: {story.score}</p>
        //             <p>By: {story.by} </p>
        //             <button>Bookmark</button>
        //         </li>
        //     );
        // })
        return (
            <div>
                <ul>
                    display
                </ul>
            </div>
        );
    }
}

export default PostsDisplay;