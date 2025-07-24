function handleNewPost(post) {
  //perform some processing on the post
  sevePostToDatabase(post);
  displayNewPost(post);
}

function sevePostToDatabase(post) {
  //save the post data to the database
}

function displayNewPost(post) {
  //display new post in the users feed
}

const newPost = {
  user: "sanaz",
  content: "just practiced javascript",
  timestamp: Date.now(),
};

handleNewPost(newPost);
