// The module that manages our posts logic
// Storing all our twits (not the same as tweets)
// Posting a twit
// Commenting on twits
// Removing twits
// Removing comments


const Tweeter = function(){
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" },
                { id: "c4", text: "Third comment on firdsfdsfdsfdfst post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    
    let postIdCounter = 3
    let commentIdCounter = 7
    const getPosts = function(){
        return posts
    }
    const addPost = function(text){
        posts.unshift({id:`p${postIdCounter}`,text,comments : []})
        postIdCounter++
    }
    const removePost = function(postId){
        for(postIndex in posts){
            if(posts[postIndex].id === postId){
                posts.splice(postIndex,1)
                break
            }
        }
    }
    
    const addComment = function(text,postId){
        for(postIndex in posts){
            if(posts[postIndex].id === postId){
                posts[postIndex].comments.push({id : `c${commentIdCounter}`,text})
                commentIdCounter++
                
            }
        }
    }

    const removeComment = function(postId,commentId){
        for(post of posts){
            if(post.id === postId){
                for(commentIndex in post.comments){
                    if(post.comments[commentIndex].id === commentId){
                        post.comments.splice(commentIndex,1)
                    }
                }
            }
        }
    }
    return {addPost,removePost,getPosts,addComment,removeComment}

}

const tweeter = Tweeter()
//console.log(tweeter.getPosts())
tweeter.addPost("This is my own post!")
//console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
//console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
 console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
 console.log(tweeter.getPosts())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}
