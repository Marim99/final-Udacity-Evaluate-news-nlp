const postDetails = async (url = "", data = {}) => {
  const urlResponse = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await urlResponse.json();
  } catch (err) {
    `<script>alert(${err})</script>`;
  }
};
const fetchUrl = "http://localhost:8081/add-url";
function handleSubmit(event) {
  event.preventDefault();

  let url = document.querySelector("#article-url").value;
  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test");
  //const checkURL = check(url);
  if (check(url)) {
    console.log(":: form submitted!!! ::");
    postDetails(fetchUrl, { url: url }).then((urlData) => {
      document.querySelector(
        ".results",
      ).innerHTML = `<h4> Agreement is: ${urlData.agreement} </h4>
      <h4> Score Tag is: ${urlData.score_tag} </h4> 
      <h4> Confidence is: ${urlData.confidence} </h4>
      <h4> Subjectivity is: ${urlData.subjectivity} </h4>
      <h4> Irony is: ${urlData.irony} </h4>`;
    });
  } else {
    console.log(":: enter valid url please!!! ::");
  }
}
const check = (url) => {
  if (Client.checkURL(url)) {
    return true;
  } else {
    return false;
  }
};
export { handleSubmit };
