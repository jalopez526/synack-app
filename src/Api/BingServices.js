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
  