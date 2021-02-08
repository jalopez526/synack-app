export const searchOnGoogle = (query) => {
  const key = process.env.REACT_APP_GOOGLE_API;
  const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=67d932cbdc7ca6c87&q=${query}`;
  console.log(url)
  return fetch(
    url
  ).then((res) => res.json());
};

export const searchOnBing = (query) => {
  const key = process.env.REACT_APP_BING_API;
  const url = `https://api.bing.microsoft.com/v7.0/search?q=${query}`;
  console.log(url)
  return fetch(
    url, {
      method: "GET",
      headers: {
        "Ocp-Apim-Subscription-Key" : key
      }
    }
  ).then((res) => res.json());
};
