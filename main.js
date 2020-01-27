const tweet = Tweeter()
const rend = Renderer()
rend.renderPosts(tweet.getPosts())

$('#post').on('click',function () {
    const postText = $(this).siblings('input').val()
    tweet.addPost(postText)
    $(this).siblings('input').val("")
    rend.renderPosts(tweet.getPosts())
})

$('div').on('click','.delete',function(){
    const dataId =  $(this).closest('.post').data().id
    tweet.removePost(dataId)
    rend.renderPosts(tweet.getPosts())
})