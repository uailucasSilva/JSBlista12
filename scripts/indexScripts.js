function validaDtNas() {
    DtNas = document.getElementById("txtDtNas").value.trim();
    var padrao = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
    if (padrao.test(DtNas))
        alert("Data de nascimento válida!");
    else
        alert("Data de nascimento inválida!");
}

function validaCpf() {
    cpf = document.getElementById("txtCpf").value.trim();
    var padrao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (padrao.test(cpf))
        alert("CPF válido!");
    else
        alert("CPF inválido!");
}

function validaMat() {
    var mat = document.getElementById("txtMat").value.trim();
    var padrao = /^iftm-\d{3}\/\d{3}-\w{2}$/i;
    if (padrao.test(mat))
        alert("Matrícula do aluno válida!");
    else
        alert("Matrícula do aluno inválida!");
}

function validaCdgIF() {
    var cdgIF = document.getElementById("txtCdgIF").value.trim();
    var padrao = /^MT-\d{2}\.\d{3}-IFTM$/i;
    if (padrao.test(cdgIF))
        alert("Código da disciplina válido!");
    else
        alert("Código da disciplina inválido!");
}

function validaCdgIFII() {
    var cdgIFII = document.getElementById("txtCdgIFII").value.trim();
    var padrao = /^MT-\d{2}\.\d{3}-(I|i)(F|f)(T|t)(M|m)$/;
    if (padrao.test(cdgIFII))
        alert("Código da disciplina (versão 2) válido!");
    else
        alert("Código da disciplina (versão 2) inválido!");
}

function validaCdgIFIII() {
    var cdgIFIII = document.getElementById("txtCdgIFIII").value.trim();
    var padrao = /^M\s?T-\d{2}\.\d{3}-I\s?F\s?T\s?M$/i;
    if (padrao.test(cdgIFIII))
        alert("Código da disciplina (versão 3) válido!");
    else
        alert("Código da disciplina (versão 3) inválido!");
}

function validaCdgIFIV() {
    var cdgIFIV = document.getElementById("txtCdgIFIV").value.trim();
    var padrao = /^(M|m)\s?(T|t)-\d{2}\.\d{3}-(I|i)\s?(F|f)\s?(T|t)\s?(M|m)\sUberlândia(\sCentro)?$/;
    if (padrao.test(cdgIFIV))
        alert("Código da disciplina (versão 4) válido!");
    else
        alert("Código da disciplina (versão 4) inválido!");
}

function validaNomeCampus() {
    var nomeCampus = document.getElementById("txtNomeCampus").value.trim();
    var padrao = /^IFTM\scampus\sUberlândia(\sCentro)?$/;
    if (padrao.test(nomeCampus))
        alert("Nome de campus do IFTM válido!");
    else
        alert("Nome de campus do IFTM inválido!");
}

function validaTelefone() {
    var telefone = document.getElementById("txtTelefone").value.trim();
    var padrao = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
    if (padrao.test(telefone))
        alert("Telefone válido!");
    else
        alert("Telefone inválido!");
}

function validaTelefone2() {
    var telefone2 = document.getElementById("txtTelefone2").value.trim();
    var padrao = /^\(\d{2,3}\)\d{5}-\d{4}$/;
    if (padrao.test(telefone2))
        alert("Telefone válido!");
    else
        alert("Telefone inválido!");
}

function validaAltura() {
    var altura = document.getElementById("txtAltura").value.trim();
    var padrao = /^((1(\.|,)[3-9])|(2(\.|,)[0-5]))[0-9]?$/;
    if (padrao.test(altura))
        alert("Altura válida!");
    else
        alert("Altura inválida!");
}

function validaFaturamento() {
    var faturamento = document.getElementById("txtFaturamento").value.trim();
    var padrao = /^R\$(([0-9][0-9]{0,2}(.[0-9]{3}){0,3})|0)?(,[0-9]{1,2})?$/;
    if (padrao.test(faturamento))
        alert("Faturamento válido!");
    else
        alert("Faturamento inválido!");
}

function validaCron() {
    var cron = document.getElementById("txtCron").value.trim();
    var padrao = /^[0-2][0-3](:[0-5][0-9]){2}:\d{2}$/;
    if (padrao.test(cron))
        alert("Hora válida!");
    else
        alert("Hora inválida!");
}

function validaSenha() {
    var senha = document.getElementById("txtSenha").value.trim();
    var padrao = /^[A-z0-9.-_]{5,}&([A-P]|[a-p]){1,}\.[aeiou]{1,}(\.([A-z0-5]{1,}))?-\D{1,},[!"#$%'&*()+-_./?<>=;:]{2}\.[^ab01]{1,}$/;
    if (padrao.test(senha))
        alert("Senha válida!");
    else
        alert("Senha inválida!");
}
