function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container">
        <a class="navbar-brand me-4" href="javascript:;">App de Vacinas</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="javascript:;">Cadastro</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="javascript:;">Configurações</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar