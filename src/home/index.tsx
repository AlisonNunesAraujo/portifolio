import "./styles.css";

export default function App() {
  return (
    <div>
      <section id="sobre" className="conteiner item">
        <div className="desc">
          <div className="areaImg">
            <img
              src="https://avatars.githubusercontent.com/u/166415022?v=4"
              alt="Foto de perfil"
            />
            <h2>Desenvolvedor Mobile</h2>
          </div>

          <div className="textDesc">
            <p>
              Desenvolvedor Mobile com experiência em React Native, focado na
              criação de aplicativos performáticos e escaláveis. Possuo
              conhecimento em Kotlin, integração com APIs e boas práticas de
              desenvolvimento mobile.
            </p>
          </div>
        </div>
      </section>

      <section id="projetos" className="conteinerProjetos conteiner">
        <h2 className="textProjetos">Projetos Recentes</h2>

        <div className="areaProjetos">
          <div>
            <img src="https://lh3.googleusercontent.com/r9hEHCqjHD2gReX5JFTEnIdWFn1BzF2qpXif-_VzjSzT_rT8wdh39UytSfIMsf1c6II" />
            <div className="projetoInfo">
              <h3>Pagina Web para finanças pessoais </h3>
              <p>
                Ao criar um conta do sistema, voçe pode registrar seus gastos e
                lucros, sendo assim voçe terá um controle melhor de suas
                financas!
              </p>
              <a href="https://carteiraweb.vercel.app/" target="_blank">
                Acessar
              </a>
            </div>
          </div>

          <div>
            <img src="https://vetrinariosite.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-dog.e44fd084.webp&w=750&q=100" />
            <div className="projetoInfo">
              <h3>Landing Page PetShop</h3>
              <p>
                Landing Page para PetShop, onde o usuário pode ver os serviços
                oferecidos e entrar em contato com o estabelecimento.
              </p>
              <a href="https://veterinariosite.vercel.app/" target="_blank">
                Acessar
              </a>
            </div>
          </div>

           <div>
            <img src="https://lh3.googleusercontent.com/r9hEHCqjHD2gReX5JFTEnIdWFn1BzF2qpXif-_VzjSzT_rT8wdh39UytSfIMsf1c6II" />
            <div className="projetoInfo">
              <h3>Aplicativo Controle de Gastos</h3>
              <p>
                Esse Aplicativo tem como objetivo ajudar as pessoas a gerenciar
                suas financas pessoais registrando seus gastos e receitas
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.alisonaraujo.Wallet"
                target="_blank"
              >
                Acessar
              </a>
            </div>
          </div> 

          
        </div>
      </section>

      <section id="habilidades" className="conteiner">
        <h2 className="textProjetos">Habilidades</h2>

        <div className="habilidadesGrid">
           <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
              alt="Swift"
            />
            <p>Swift</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React Native"
            />
            <p>React</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React Native"
            />
            <p>React Native</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
            />
            <p>TypeScript</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="NextJS"
            />
            <p>NextJS</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
            />
            <p>Git</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
            />
            <p>GitHub</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="NodeJS"
            />
            <p>NodeJS</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original-wordmark.svg"
              alt="NestJS"
            />
            <p>NestJS</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="Express"
            />
            <p>Express</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              alt="Unit Testing"
            />
            <p>Testes Unitários</p>
          </div>
           <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
              alt="Kotlin"
            />
            <p>Kotlin</p>
          </div>
        
        </div>
      </section>

      <footer id="contato">
        <div className="footerContent">
          <p>© 2026 Alison Araújo — Todos os direitos reservados.</p>
          {/* <p>
            Feito com ❤️ usando{" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </p> */}
        </div>
      </footer>
    </div>
  );
}
