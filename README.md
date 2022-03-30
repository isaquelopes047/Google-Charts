
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