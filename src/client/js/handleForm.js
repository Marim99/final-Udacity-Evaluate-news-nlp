function handleSubmit(e) {
  e.preventDefault();
  let url = document.querySelector("#article-url").value;
  showData(url);
}

const post = async (url = "", data = {}) => {
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
    console.log(err);
  }
};

const showData = (url) => {
  if (Client.checkURL(url)) {
    console.log(":: form submitted!!! ::");
    post("http://localhost:8081/add-url", { url: url }).then((urlData) => {
      document.querySelector(
        "#article-text",
      ).innerHTML = `Text of the article: ${urlData.sentence_list[0].text}`;
      document.querySelector(
        "#article-agreement",
      ).innerHTML = `Agreement of the article: ${urlData.agreement}`;
      document.querySelector(
        "#article-subjectivity",
      ).innerHTML = `Subjectivity of the article: ${urlData.subjectivity}`;
      document.querySelector(
        "#article-confidence",
      ).innerHTML = `Confidence of the article: ${urlData.confidence}`;
      document.querySelector(
        "#article-score_tag",
      ).innerHTML = `Score_tag of the article: ${urlData.score_tag}`;
    });
  } else {
    alert("invaild URL,Please Enter New URL");
  }
};
export { handleSubmit };
