

google.charts.load('current', {packages: ['corechart']});

//Função para acriar a o grafico
function desenharPizza(){

    //instanciar a tabela ao google
    let tabela = new google.visualization.DataTable();

    //criar colunas e linhas
    tabela.addColumn('string', 'Categorias');
    tabela.addColumn('number', 'Valores');
    tabela.addRows([
        ['Educação', 3000],
        ['Transporte', 500],
        ['Lazer', 230],
        ['Saúde', 50],
        ['Cartão de Crédito', 900],
        ['Alimentação', 260],
    ]);

    //Setando as opcoes visuais do grafico
    let opcoes = {
        'title': 'Tipos de Gastos',
        'height': 300,
        'width': 400,
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        'pieHole': 0.3,
    };

    //Instanciar o objeto e pegar no html onde sera apresentada
    let grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    //Desenhar o grafico passando a tabela
    grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenharPizza);