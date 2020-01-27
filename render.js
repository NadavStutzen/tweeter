const Renderer = function(){
    const renderPosts = function(posts){
        $('#posts').empty()
        //Running through posts and for each post > Running through comments
        for(let post of posts){
            const newPost = $(`<div data-id="${post.id}" class="post"><p class="post-text">${post.text}</p></div>`)
            for(let comment of post.comments){
                const newComment = $(`<div data-id="${comment.id}"class="comments"><span class=delete-comment>x</span>${comment.text }</div>`)
                $(newPost).append(newComment)
            }
            //After appending all comments >Appending "active" comment div + "Delete Post" button
            const activeCommentDiv = $(`<div class="add-comment"><input type="text" placeholder="Got somthing to say?"/><button>Comment</button>`)
            $(newPost).append(activeCommentDiv)
            const delButton = $(`<div class="delete">Delete Post</div>`)
            $(newPost).append(delButton)
            //Appending "ready" post div and his children to the related div
            $('#posts').append(newPost)
        }
    }
    return{renderPosts}
}
