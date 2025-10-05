class Myblog {
  constructor() {
    this.blogList = document.querySelector(".blog-list");
    this.blogs = this.getBlogsFromStorage();
    this.displayBlogs();
  }

  getBlogsFromStorage() {
    let blogs = localStorage.getItem("blogs");

    if (blogs) {
      blogs = JSON.parse(blogs);
    } else {
      blogs = [];
    }

    return blogs;
  }

  displayBlogs() {
    this.blogList.innerHTML = "";

    this.blogs.forEach((blog) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <img src="${blog.image}">
        <h2>${blog.title}</h2>
        <p>${blog.body}</p>
        <p><b>${blog.author}</b></p>
        <p>${blog.date}</p>
        <hr>
      `;
      this.blogList.appendChild(div);
    });
  }
}

const app = new Myblog();


