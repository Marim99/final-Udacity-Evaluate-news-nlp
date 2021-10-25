function handleSubmit(e) {
  e.preventDefault();
  let url = document.getElementById("article-url").value;
  if (Client.checkURL(url)) {
    console.log("form submitted");
    postData("http://localhost:8081/add-url", { url }).then((data) => {
      document.getElementById(
        "article-text",
      ).innerHTML = `text: ${data.sentence_list[0].text}`;
      document.getElementById(
        "article-agreement",
      ).innerHTML = `agreement: ${data.agreement}`;
      document.getElementById(
        "article-subjectivity",
      ).innerHTML = `subjectivity: ${data.subjectivity}`;
      document.getElementById(
        "article-confidence",
      ).innerHTML = `confidence: ${data.confidence}`;
      document.getElementById(
        "article-irony",
      ).innerHTML = `irony: ${data.irony}`;
      document.getElementById(
        "article-score_tag",
      ).innerHTML = `score_tag: ${data.score_tag}`;
    });
  } else {
    alert("invaild URL,Please Enter New URL");
  }
}
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
export { handleSubmit };
