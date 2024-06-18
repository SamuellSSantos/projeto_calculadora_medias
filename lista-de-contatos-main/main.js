const form = document.getElementById('agenda-contatos');
console.log(form);
linhas = '';
const listaTelefonica = [];
const listaDecontatos = [];

form.addEventListener('submit', function(e){

    e.preventDefault();
    AdicionaContatos();
})

function AdicionaContatos(){
    const nomeContato = document.getElementById('nome-contato');
    const telContato = document.getElementById('telefone-contato');
    if(listaDecontatos.includes(telContato.value)){
        alert("O numero de contato já existe em nossa lista de contatos, favor informar um numero valido")
    } else{
        listaDecontatos.push(telContato.value);
        let linha = '';
        linha +='<tr>';
        linha += `<td> ${nomeContato.value}</td>`;
        linha += `<td> ${telContato.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
}