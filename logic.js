// The module that manages our posts logic
// Storing all our twits (not the same as tweets)
// Posting a twit
// Commenting on twits
// Removing twits
// Removing comments


const Tweeter = function(){
    const posts = []
    let postIdCounter = 0
    let commentIdCounter = 0
    const getPosts = function(){
        return posts
    }
    const addPost = function(text){
        posts.push({id:`p${postIdCounter}`,text,comments : []})
        postIdCounter++
    }
    const removePost = function(postId){
        for(postIndex in posts){
            if(posts[postIndex].id === postId){
                posts.splice(postIndex,1)
            }
        }
    }
    return {addPost,removePost,getPosts}

}

const test = Tweeter()
test.addPost('kdhfsds')
test.addPost('kjdhjdkjds')
test.addPost('eeeeeee')
console.log(test.getPosts())
test.removePost('p0')
console.log(test.getPosts())