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

    return response.json();
  })
  .then((api) => {
    let texto = `
    <div class="container" style="background-color:green;">
        <div class="row" style="padding-top: 8px;" >
          <div class="col-lg-3" >
              <h5 class="mt-2">Nome</h5>
          </div>
          <div class="col-lg-3"">
              <h5 class="mt-2">Símbolo</h5>
          </div>
          <div class="col-lg-6">
              <h5 class="mt-2">Primeiros Dados Históricos em</h5>
          </div>
        </div>
      </div>  
    `;

    for (let contador = 0; contador < 10; contador++) {
      const moeda = api.data[contador];

      let data = new Date(moeda.first_historical_data);
      let dataFormatada =
        data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

      const backgroundColor = contador % 2 == 0 ? "white" : "lightgray";

      texto =
        texto +
        `
      <div class="container" style="background-color:${backgroundColor};">
        <div class="row" style="padding-top: 8px;" >
          <div class="col-lg-3" >
              <p style="padding-top: 6px;">${moeda.name}</p>
          </div>
          <div class="col-lg-3"">
              <p style="padding-top: 6px;">${moeda.symbol}</p>
          </div>
          <div class="col-lg-6">
              <p style="padding-top: 6px;">${dataFormatada}</ṕ>
          </div>
        </div>
      </div>  
      `;
    }
    document.getElementById("coins").innerHTML = texto;
  })
  .catch((error) => console.error(error.message));
