const listElement = document.querySelector(".posts");

const postTemplate = document.getElementById("single-post");

const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");
function sendHttpRequest(method, url, data) {
  //for sending  get request
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();
  // XPathResult.setRequestHeader("content-type", "application/json");

  //   xhr.open(method, url);

  //   xhr.responseType = "json";
  //   xhr.onload = () => {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  //       reject(new Error("something went wrong"));
  //     }

  //     //   console.log(xhr.response);
  //     //   const listOfPosts = JSON.parse(xhr.response) ; for manually converting into js format
  //   };

  //   xhr.onerror = () => {
  //     reject(new Error("something went wrong"));
  //   };
  //   xhr.send(JSON.stringify(data));
  // });
  // return promise;
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("something went wrong teribelly");
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error("some::thing went wrong");
    });
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    const listOfPosts = responseData;

    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchButton.addEventListener("click", () => {
  fetchPosts();
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;
  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
