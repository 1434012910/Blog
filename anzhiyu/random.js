var posts=["2024/12/20/hello-world/","2024/12/21/hexo博客搭建过程/","2024/12/05/images/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };