
google.charts.load('current', {packages: ['corechart'], 'language': 'pt'});

//Função para acriar o grafico
function desenharPizza(){

    //Passando os dados da tabela para um array a propria API monta linhas e colunas
    let tabela = google.visualization.arrayToDataTable(
        [
            ['Mês', 'Entrada', 'Saída'],
            ['jan', 2500, 1000],
            ['fev', 2000, 500],
            ['mar', 3000, 1300],
            ['abr', 1500, 1700],
            ['mai', 5000, 2250],
            ['jun', 3567, 3000],
            ['jul', 3452, 1468],
            ['ago', 1833, 5250],
            ['set', 3803, 5500],
            ['out', 1800, 1000 ],
            ['nov', 3569, 1500],
            ['dez', 3000, 1740]   
        ]);

        let opcoes = {
            title: 'Entradas e saídas da conta',
            width: 800,
            height: 400,
            vAxis: {
                gridlines: {
                    color: 'transparent'
                },
                format: 'currency',
                title: 'Valores'
            },
            hAxis: {
                title: 'Mês'
            }   
        }

    let grafico = new google.visualization.ColumnChart(document.getElementById('graficoColuna'));
    grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenharPizza);
