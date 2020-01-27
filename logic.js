

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
        for(let i in posts){
            if(posts[i].id === postId){
                posts.splice(i,1)
                break
            }
        }
    }
    
    const addComment = function(text,postId){
        for(post of posts){
            if(post.id === postId){
                post.comments.push({id : `c${commentIdCounter}`,text})
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
