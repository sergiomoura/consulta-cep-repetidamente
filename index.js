const CepAPI = require("./services/CepAPI");



function fazConsulta(){
    CepAPI.get('04548000')
    .then(
        response => {console.log(response.data)}
    ).catch(
        err => {console.error(err)}
    );
}

setInterval(fazConsulta, 5000);