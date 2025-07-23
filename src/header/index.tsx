import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <div>
        <h2>Alison Araújo</h2>
      </div>

      <div className="menu">
        <button>
          <a href="#sobre">Sobre</a>
        </button>
        <button>
          <a href="#projetos">Projetos</a>
        </button>
        <button>
          <a href="#contato">Contato</a>
        </button>
        <button>
          <a href="#formação">Formação</a>
        </button>
      </div>
    </div>
  );
}
