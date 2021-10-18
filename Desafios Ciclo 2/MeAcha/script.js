window.onload = () => {


   
  function resultadoCep(dadosCep) {
    for (let campo in dadosCep) {
      if (document.querySelector(`#${campo}`)) {
        document.querySelector(`#${campo}`).value = dadosCep[campo];
      }
    }
  }

  let dadosCep = async function (cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      let dadosFetch = await fetch(url);
      let dadosJson = await dadosFetch.json();
      resultadoCep(dadosJson);
    } catch (error) {
      alert(error);
    }
  };

  
  const CEP_ = document.querySelector("#cep");
  const rua = document.querySelector("#logradouro");
  const bairro = document.querySelector("#bairro");
  const cidade = document.querySelector("#cidade");
  const estado = document.querySelector("#estado");
  const btnBuscar = document.querySelector("#enviar");



  btnBuscar.addEventListener("click", function(){
    dadosCep(CEP_.value);
  });
};
