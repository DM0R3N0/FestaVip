//Projeto - Segurança Virtual

/*
 *Pegar nome da pessoa que está tentando entrar na festa
 * Perguntar quem convidou para a festa
 * Criar botão na tela para quando clicar acessar o codigo js para verificar se a pessoa pode entrar
 * Caso pessoa esteja autoizado exibir msg "Você pode entrar!"
 * Caso não esteja autorizado exibir a msg "Você não pode entrar!"
 */


function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadoSophia = ['Simone', 'Daniel', 'Anne'];
    ConvidadoJhuly = ['Si', 'Dani', 'Elise'];

    if (ConvidadoSophia.includes(NomeConvidado) || ConvidadoJhuly.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!'
    } else
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!'
}