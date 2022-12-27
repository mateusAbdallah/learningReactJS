function Form (){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastro feito com sucesso!")
    }


    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite nome"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastro"></input>
                </div>
            </form>
        </div>
    )
}

export default Form