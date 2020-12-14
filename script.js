function consultaCep() {
    // $( "barra-progresso" ).show();
    var cep = document.getElementById("cep").value;
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';
    console.log(url); 

    $.ajax({
        url: 'https://viacep.com.br/ws/20081-902/json/',
        type: 'GET',
        success: function (response) {
            console.log(response);
            // via DOM
            // document.getElementById('logradouro').innerHTML = response.logradouro;
            // via jquery
            $('#logradouro').html(response.logradouro);
            $('#bairro').html(response.bairro);
            $('#localidade').html(response.localidade);
            $('#uf').html(response.uf);
            $('#titulo-cep').html("CEP " + response.cep);
            // $( ".cep" ).show();
            // $( "barra-progresso" ).hide();
        }
    })
}

// esconde elementos

// $(function () {
//     $( '.cep' ).hide();
//     $( "barra-progresso" ).hide();
// });