// By Zhiyi Jin
function CreatePost() {
  const newPost = {};

  newPost.submit = () => {
    let submitButton = document.getElementById("newPostBtn");
    let form = document.getElementById("newPostForm");

    submitButton.addEventListener("click", async (event) => {
      event.preventDefault();
      console.log("form submit");
      let formData = new FormData(form);
      let user = JSON.parse(sessionStorage.getItem("user"));

      formData.append("userEmail", user.email);
      formData.append("createdAt", new Date().getTime());

      console.log("fetch /api/posts");
      let res = await fetch("/api/posts", {
        method: "post",
        body: formData,
      });

      console.log("res", res);
      if (res.ok) {
        let json = await res.json();
        setTimeout(() => {
          window.location.replace(`/posts/${json.postId}`);
        }, 2000);
      }
    });
  };

  return newPost;
}

const newPost = CreatePost();
newPost.submit();
