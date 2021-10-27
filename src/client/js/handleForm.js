const postDetails = async (url = "", data = {}) => {
  const urlResponse = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
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

  // check what text was put into the form field
  let url = document.querySelector("#article-url").value;
  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test");
  if (Client.checkURL(url)) {
    console.log(":: form submitted!!! ::");
    postDetails(fetchUrl, { url: url }).then(function (urlData) {
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
export { handleSubmit };
