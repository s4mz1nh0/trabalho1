let Funcionarios, index;


function cadFuncionario(nome, sobrenome, email, sexo, funcao) {
    Funcionarios = document.getElementById("tbFuncionarios");    
    let qtdlLinhas = Funcionarios.rows.length;
    let linha = Funcionarios.insertRow(qtdlLinhas);
    let linhaParam;
    

    let cellCodigo = linha.insertCell(0);
    let cellNome = linha.insertCell(1);
    let cellSobrenome = linha.insertCell(2);
    let cellEmail = linha.insertCell(3);
    let cellSexo = linha.insertCell(4);
    let cellFuncao = linha.insertCell(5);

    cellCodigo.innerHTML = qtdlLinhas;
    cellNome.innerHTML = nome;
    cellSobrenome.innerHTML = sobrenome;
    cellEmail.innerHTML = email;
    cellSexo.innerHTML = sexo;
    cellFuncao.innerHTML = funcao;

    preencheCamposForm();

}

function altFuncionario(nome, sobrenome, email, sexo, funcao) {

    Funcionarios.rows[index].cells[1].innerHTML = nome;
    Funcionarios.rows[index].cells[2].innerHTML = sobrenome;
    Funcionarios.rows[index].cells[3].innerHTML = email;
    Funcionarios.rows[index].cells[4].innerHTML = sexo;
    Funcionarios.rows[index].cells[5].innerHTML = funcao;

}

function preencheCamposForm() {

    for(let i = 0; i < Funcionarios.rows.length; i++) 
    {
        Funcionarios.rows[i].onclick = function() 
        {
            index = this.rowIndex;
            document.getElementById("txtCodigo").value = Funcionarios.rows[index].cells[0].innerText;
            document.getElementById("txtNome").value = Funcionarios.rows[index].cells[1].innerText;
            document.getElementById("txtSobrenome").value = Funcionarios.rows[index].cells[2].innerText;
            document.getElementById("txtEmail").value = Funcionarios.rows[index].cells[3].innerText;
            document.getElementById("slSexo").value = Funcionarios.rows[index].cells[4].innerText;
            document.getElementById("txtFuncao").value = Funcionarios.rows[index].cells[5].innerText;
        }
    }
}



function delRegistro() {

    for(let i = 0; i < Funcionarios.rows.length; i++) 
    {
        if (index == i) {
            Funcionarios.deleteRow(index);
            return;
        }
    }
}

