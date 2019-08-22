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

// export function getTopStories() {
//     var stories = [];
//     axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
//     .then(res => {
//         var response = res.data.splice(0, 100)
//         return response
//     })
//     .then(res => {
//         res.forEach(item => {
//             axios.get("https://hacker-news.firebaseio.com/v0/item/" + item + ".json?print=pretty")
//             .then(res => {
//                 stories.push(res.data);
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//         })
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     console.log('stories', stories)
// }
