import axios from 'axios';

export function getTopStories() {
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
    return stories;
}
