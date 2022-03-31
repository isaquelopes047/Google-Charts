//Legenda de graficos

google.charts.load('current', {packages: ['corechart']});

//Função para acriar a o grafico
function desenharPizza(){

    //instanciar a tabela ao google
    let tabela = new google.visualization.DataTable();

    //criar colunas e linhas
    tabela.addColumn('string', 'Categorias');
    tabela.addColumn('number', 'Valores');
    tabela.addRows([
        ['Educação', 1000],
        ['Transporte', 500],
        ['Lazer', 230],
        ['Saúde', 50],
        ['Cartão de Crédito', 900],
        ['Alimentação', 260],
    ]);

    //Setando as opcoes visuais do grafico
    let opcoes = {
        'title': 'Tipos de Gastos',
        'height': 400,
        'width': 'auto',
        is3D: true,
        'legend': 'labeled',
        pieSliceText: 'value',
        slices:{1:{offset: 0.3}}
    };

    //Instanciar o objeto e pegar no html onde sera apresentada
    let grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    //Desenhar o grafico passando a tabela
    grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenharPizza);

/* Voce pode adicionar a posição que ficara as legendas do grafico
atribuindo legend ao options do grafico e escolhendo a posição dela */

/* Para fazermos ao invez da porcentagem aparecer no grafico, podemos usar
numeros ou até mesmo a palavra que representa aquela unidade
pirSliceText: 'value' */

/* Para definir a cor do nosso grafico podemos usar colors: e passando em 
hezadecimal a cor de cada um, porem se quiser definir a cor somente de um pedaço
usamos slice: 0{''}, 1{''}, 2{''} onde cada numero representa uma unidade do grafico*/

/* Podemos usar junto ao Slide uma forma de destacar parte do grafico 
dentro de slide: 0{offset: 0.4} assim destacamos determinada parte indicando ela
pelo numero */
