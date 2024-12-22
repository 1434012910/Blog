var posts=["2024/12/21/hello-world/","2024/12/21/hexo博客搭建过程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };