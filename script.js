const API_KEY = "72f0872c-959c-424f-8201-3745eb62a6d6";

fetch(
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" +
    API_KEY
)
  .then((response) => {
    if (!response.ok)
      throw new Error(
        "Erro ao executar a requisição, status " + response.status
      );

    return response.json;
  })
  .then((api) => console.log(api))
  .catch((error) => console.error(error.message));
