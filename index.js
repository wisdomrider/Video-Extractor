const links = [];

chrome.runtime.onMessage.addListener((request) => {
  if (request.command === "next-episode") {
    document
      .querySelector(
        "#wrapper_bg > section > section.content_left > div:nth-child(1) > div.anime_video_body > div.anime_video_body_episodes > div.anime_video_body_episodes_r > a"
      )
      .click();
  } else if (request.command === "prev-episode") {
    document
      .querySelector(
        "#wrapper_bg > section > section.content_left > div:nth-child(1) > div.anime_video_body > div.anime_video_body_episodes > div.anime_video_body_episodes_l > a"
      )
      .click();
  } else if (request.command == "video-src") {
    if (!links.includes(request.url)) {
      console.log(request.url);
      links.push(request.url);
    }
  }
});
window.onload = () => {
  if (document.URL.includes("gogoanime")) {
    setTimeout(() => {
      window.scrollTo(-1, 400);
    }, 2999);
  }
};
