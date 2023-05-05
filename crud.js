document.querySelector("#salvar").addEventListener("click", cadastrar)

function cadastrar(){
const cliente = document.querySelector("#cliente").value
const descricao = document.querySelector("#descricao").value
const categoria = document.querySelector("#categoria").value

const serviço = {
    cliente: cliente,
    descricao: descricao,
    categoria: categoria,
}
function validar(valor, campo){
if(serviço.cliente ==""){
    document.querySelector("#cliente").classList.add("is-invalid")
    document.querySelector("#cliente").classList.remove("is-valid")
    return
}else{
    document.querySelector("#cliente").classList.remove("is-invalid")
    document.querySelector("#cliente").classList.add("is-valid")

    }
}

document.querySelector("#cliente").innerHTML += createCard(cliente)
    
}

function validar(valor, campo){
    if(valor.cliente ==""){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }
        campo.classList.remove("is-invalid")
        campo.classList.add("is-valid")
        return true
    
        }
    

function createCard(serviço){
    return `
    <div class="col-lg-3 col-md-6 col-12">
    <div class="card">
        <div class="card-header">
            ${cliente}
        </div>
        <div class="card-body">
            <p class="card-text">Terminar até ##:## - ##/##/####</p>
            <p>
                <span class="badge text-bg-warning">Pendente</span>
            </p>
            <a href="#" class="btn btn-success">
                <i class="bi bi-check-lg"></i>
            </a>
            <a href="#" class="btn btn-danger">
                <i class="bi bi-trash"></i>
            </a>
        </div>
    </div> <!-- card -->
</div> <!-- col -->
    ` //template literals
}