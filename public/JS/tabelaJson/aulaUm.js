
google.charts.load('current', {packages: ['corechart'], 'language': 'pt'});

function desenharGrafico(){

    let dadosJson = $.ajax({
        url: 'https://gist.githubusercontent.com/isaquelopes047/d9cf908f99c0f58e7cb12efc35e6bf8f/raw/0d71e9b5d355987bb30afd6cd80ace1455858d01/dados.json',
        dataType: 'json',
        async: false
    }).responseText;

    let tabela = new google.visualization.DataTable(dadosJson);

    let opcoes = {
        title: 'Dados Bancarios',
        width: 'auto',
        height: 600,
        vAxis: {
            gridlines: {
                color: 'transparent'
            },
            format: 'currency',
            title: 'Clientes'
        },
        hAxis: {
            format: 'currency',
            title: 'Valores'
        }   
    }

    let grafico = new google.visualization.BarChart(document.getElementById('graficoColuna'));
    grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenharGrafico);
