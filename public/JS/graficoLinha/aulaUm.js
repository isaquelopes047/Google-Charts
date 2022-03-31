
google.charts.load('current', {packages: ['corechart'], 'language': 'pt'});

//Função para acriar a o grafico
function desenharPizza(){

    let tabelaLinhas = new google.visualization.DataTable();
    tabelaLinhas.addColumn('string', 'Mês');
    tabelaLinhas.addColumn('number', 'Gastos');
    tabelaLinhas.addColumn('number', 'Ganhos');
    tabelaLinhas.addRows([

        ['jan', 800, 1200],
        ['fev', 400, 1500],
        ['mar', 1100, 1400],
        ['abr', 400, 1200],
        ['mai', 500, 1300],
        ['jun', 750, 1000],
        ['jul', 2500, 1500],
        ['ago', 650, 1200],
        ['set', 850, 1000],
        ['out', 400, 1600],
        ['nov', 1000, 1700],
        ['dez', 720, 1900],
        
    ]);

    let opcoes = {
        title: 'Gastos por Mês',
        width: 'auto',
        height: 300, 
        vAxis: {
            format: 'currency',
            gridlines: {count:4},
        },
        curveType: 'function'
    }

    let graficoLinhas = new google.visualization.LineChart(document.getElementById('graficoLinhas'));
    graficoLinhas.draw(tabelaLinhas, opcoes);
}

google.charts.setOnLoadCallback(desenharPizza);
