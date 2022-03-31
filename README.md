
# Setando as opcoes visuais do grafico
    
        'title': 'Tipos de Gastos',
        'heightt': 300,
        'width': 400,
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        is3D: true

Deve ser istanciado da seguinte forma
        
        let opcoes = {
        
        };

E depois inserido do desenho do grafico

        grafico.draw(tabela, opcoes);

> Para dar uma visualização de 'donuts', um grafico com um buraco no meio podemos usar o atributo 'pieHole': 0.3 nas opcoes do grafico, essa opcao não funciona com graficos com opção 3d.
>> 'pieHole': 0.3

>Voce pode adicionar a posição que ficara as legendas do grafico
atribuindo legend ao options do grafico e escolhendo a posição dela
>> 'legend': 'top'

>Para as legendas do grafico ficar do lado de fora de forma mais organizada
podemos utilizar em Legend
>>'legend': 'labeled',

>Para fazermos ao invez da porcentagem aparecer no grafico, podemos usar
numeros ou até mesmo a palavra que representa aquela unidade
>>pirSliceText: 'value' <- valor da unidade

>>pirSliceText: 'label' <- nome da unidade