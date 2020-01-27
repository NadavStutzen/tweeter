const tweet = Tweeter();
const rend = Renderer();
rend.renderPosts(tweet.getPosts());

//Listener for click on "Tweet"
$("#post").on("click", function() {
  const postText = $(this)
    .siblings("input")
    .val();
  if (postText.length < 1) {
    alert("Posts must be at least 1 charachter");
  } else {
    tweet.addPost(postText);
    $(this)
      .siblings("input")
      .val("");
    rend.renderPosts(tweet.getPosts());
  }
});

//Listener for click on "Delete Post"
$("div").on("click", ".delete", function() {
  const dataId = $(this)
    .closest(".post")
    .data().id;
  tweet.removePost(dataId);
  rend.renderPosts(tweet.getPosts());
});

//Listener for click on "Add Comment"
$("div").on("click", "button", function() {
  const postId = $(this)
    .closest(".post")
    .data().id;
  const commentText = $(this)
    .siblings("input")
    .val();
  if (commentText.length < 1) {
    alert("Comments must be at least 1 charachter");
  } else {
    tweet.addComment(commentText, postId);
    rend.renderPosts(tweet.getPosts());
  }
});

//Listener for click on "x(delete comment)"
$("#posts").on("click", ".delete-comment", function() {
  const postId = $(this)
    .closest(".post")
    .data().id;
  console.log(postId);
  const commentId = $(this)
    .closest(".post")
    .find(".comments")
    .data().id;
  tweet.removeComment(postId, commentId);
  rend.renderPosts(tweet.getPosts());
});
