export class ShortenLinkService {
  async shortenLink(linkToShorten: string) {
    const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '70bd0a71d1mshbedc52a2ed6104fp15fedajsn2cf17b5bd061',
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
      },
      body: new URLSearchParams({
        url: linkToShorten,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.result_url;
    } catch (error) {
      console.error(error);
    }
  }
}
