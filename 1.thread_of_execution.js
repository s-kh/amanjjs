function handleNewPost(post) {
  //perform some processing on the post
  sevePostToDatabase(post);
  displayNewPost(post);
}

function sevePostToDatabase(post) {
  //save the post data to the database
  console.log("save post to database");
}

function displayNewPost(post) {
  //display new post in the users feed
  console.log("dislay new post");
}

const newPost = {
  user: "sanaz",
  content: "just practiced javascript",
  timestamp: Date.now(),
};

handleNewPost(newPost);
