
  const RSS_URL = `https://help.gulshankumar.net/latest.rss`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
        <article>
          <img src="https://discourse-og-image-serverless.vercel.app/api?url=${el.querySelector("link").innerHTML}/image/large.png" alt="">
          
        </article>
      `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  });
