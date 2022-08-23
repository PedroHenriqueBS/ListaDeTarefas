let contador = 0;
let input = document.getElementById('campoTarefa');
let btnAdd = document.getElementById('campoAdd');
let areaLista = document.getElementById('areaLista');

function adicionar(){

    //PEGAR O VALOR DGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NULO, NEM INDEFINIDO
    if (valorInput !== "" && valorInput !== null && valorInput !== undefined){
        
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
        
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        
        </div>   
        <div class="item-btn">
            <button onclick="deletar(${contador})" class="deletar"><i class="mdi mdi-delete"></i>Deletar</button>
        
        </div>   
    </div>  `

    //ADICIONAR NOVO ITEM NO MAIN
    areaLista.innerHTML += novoItem;

    //ZERAR OS CAMPOS
    input.value = "";
    input.focus();

    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
  }

  function marcarTarefa(id) {

    var item = document.getElementById(id);
    var classe = item.getAttribute("class");

    if (classe == "item") {
        item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
    } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
    }
  };

  input.addEventListener("keyup", function (event) {
      
      //SE TECLOU ENTER (13)
      if (event.keyCode === 13) {
      event.preventDefault();
      btnAdd.click();
    }
  });
