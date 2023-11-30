const form = document.querySelector("#login-form");

//let accessToken = null;

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data.access_token;
  //console.log(accessToken);
  window.localStorage.setItem("token", accessToken);
  //window.sessionStorage.setItem("tokken", accessToken);
  alert("로그인되었습니다!");

  window.location.pathname = "/";
};

form.addEventListener("submit", handleSubmit);

// const btn = document.createElement("button");
// btn.innerText = "상품 가져오기!";
// btn.addEventListener("click", async () => {
//   const res = await fetch("/items", {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   const data = await res.json();
//   console.log(data);
// });
// infoDiv.appendChild(btn);

//  console.log("액세스토큰!!", data);
//console.log("상태코드는", res.status);

// if (res.status === 200) {
//   alert("로그인에 성공했습니다.");
//   window.location.pathname = "/";
//   //console.log(res.status);
// } else if (res.status === 401) {
//   alert("id 혹은 pw가 틀렸습니다.");
// }
