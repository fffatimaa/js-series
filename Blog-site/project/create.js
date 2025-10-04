class Blog{
    constructor(image , title, body, author){
        this.image = image;
        this.title = title;
        this.body = body;
        this.author = author;
        this.date = new Date().toLocaleDateString();
    }
}
let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let image = document.getElementById("image").value;
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  let author = document.getElementById("author").value;
  if(image==="" || title==="" || body==="" || author===""){
    alert(" fill all");
    return;
  }
  
  let blog = new Blog(image,title,body,author);

  let blogs = localStorage.getItem("blogs");
  if(blogs){
    blogs = JSON.parse(blogs);
  } else {
    blogs = [];
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));

  window.location = "index.html";
 
});

