function Form() {
  return (
    <>
      <h5 className="mt-4 mb-3">Registro de Vacinação</h5>

      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Nome</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">CPF</label>
      </div>
    </>
  )
}

export default Form