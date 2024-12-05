var posts=["2024/12/05/hello-world/","2024/12/05/images/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };