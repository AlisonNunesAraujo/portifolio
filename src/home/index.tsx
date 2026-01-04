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

          <div>
            <img src="data:image/jpeg;base64,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" />
            <div className="projetoInfo">
              <h3>Intelichat</h3>
              <p>
                Esse chat com IA tem como objetivo auxiliar as pessoas a
                resolverem problemas do dia a dia, por exemplo: problemas com
                celular, computadores, estudos, entre outros.
              </p>
              <a href="https://intelichat.vercel.app" target="_blank">
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
        </div>
      </section>

      <footer id="contato">
        <div className="footerContent">
          <p>© 2025 Alison Araújo — Todos os direitos reservados.</p>
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
