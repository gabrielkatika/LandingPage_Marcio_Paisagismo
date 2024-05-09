document.getElementById('form-servicos').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeServico = this['nome-servico'].value;
    const descricaoServico = this['descricao-servico'].value;

    console.log('Adicionar/Editar Serviço:', nomeServico, descricaoServico);
});

document.getElementById('form-imagens').addEventListener('submit', function (event) {
    event.preventDefault();
    const urlImagem = this['url-imagem'].value;

    console.log('Adicionar/Editar Imagem:', urlImagem);

});

const selectServico = document.getElementById('selecione-servico');
const servicoLista = document.getElementById('servico-lista');

const dadosServicos = [
    { id: 1, nome: 'MONTAGEM E FORMAÇÃO DE JARDIM', descricao: 'Transformamos seu espaço em um jardim encantador, cheio de vida e beleza.' },
    { id: 2, nome: 'MANUTENÇÃO DE JARDIM', descricao: 'Restauramos a natureza, trazendo vida de volta ao seu ambiente.' },
    { id: 3, nome: 'CRIAÇÃO DE LAGOS ARTIFICIAIS', descricao: 'Criamos lagos artificiais que refletem tranquilidade e harmonia.' },
    { id: 3, nome: 'CRIAÇÃO DE PERGOLADOS E DECKS', descricao: 'Nossos pergolados proporcionam sombra e elegância ao seu refúgio natural.' },
];

dadosServicos.forEach(servico => {
    const option = document.createElement('option');
    option.value = servico.id;
    option.text = servico.nome;
    selectServico.add(option);
});

function exibirInformacoesServico(idServico) {
    const servicoSelecionado = dadosServicos.find(servico => servico.id == idServico);

    if (servicoSelecionado) {
        const servicoItem = document.createElement('div');
        servicoItem.classList.add('servico-item');
        servicoItem.innerHTML = `
            <h3>${servicoSelecionado.nome}</h3>
            <p>${servicoSelecionado.descricao}</p>
            <button onclick="editarServico(${servicoSelecionado.id})">Editar</button>
            <button onclick="excluirServico(${servicoSelecionado.id})">Excluir</button>
        `;

        servicoLista.appendChild(servicoItem);
    }
}

selectServico.addEventListener('change', function () {
    const idSelecionado = this.value;

    servicoLista.innerHTML = '';

    if (idSelecionado !== '') {
        exibirInformacoesServico(idSelecionado);
    }
});

function excluirServico(idServico) {
    alert(`Excluir serviço com ID ${idServico}`);
}

const imagemLista = document.getElementById('imagem-lista');
const imagemListaCadastradas = document.getElementById('imagem-lista-cadastradas');

const dadosImagens = [
    { id: 1, url: 'https://th.bing.com/th/id/OIP.sLL_CaIrkF2NBOVv1eBMgwHaFk?w=260&h=195&c=7&r=0&o=5&pid=1.7' },
    { id: 2, url: 'https://th.bing.com/th/id/OIP.7pcU1tqieVwVcd1JEUJMCwHaFj?w=241&h=181&c=7&r=0&o=5&pid=1.7' },
    { id: 3, url: 'https://th.bing.com/th/id/OIP.qmPKswEunGqtN4aBLaNjgwHaFk?w=259&h=195&c=7&r=0&o=5&pid=1.7' },
];

dadosImagens.forEach(imagem => {
    const imagemItem = document.createElement('div');
    imagemItem.classList.add('imagem-item');
    imagemItem.innerHTML = `
        <img src="${imagem.url}" alt="Imagem ${imagem.id}">
        <button onclick="excluirImagem(${imagem.id})">Excluir Imagem</button>
    `;

    imagemListaCadastradas.appendChild(imagemItem);
});

function excluirImagem(idImagem) {
    alert(`Excluir imagem com ID ${idImagem}`);
}