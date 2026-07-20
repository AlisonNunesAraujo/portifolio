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
            <h2>Desenvolvedor</h2>
          </div>

          <div className="textDesc">
            <p>
              Desenvolvedor com experiência em React, React Native e Node.js
              (NestJS/Express), focado na criação de aplicações mobile e backend
              performáticas e escaláveis. Também possuo conhecimento em
              Swift, Kotlin e Java/Spring Boot.
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
              <h3>Carteira Web — Controle Financeiro</h3>
              <p>
                Aplicação web para controle de finanças pessoais, construída
                com React, React Hook Form, Zod e Firebase. O usuário cria
                uma conta, registra receitas e despesas e acompanha o saldo
                de forma consolidada.
              </p>
            </div>
            <a href="https://carteiraweb.vercel.app/" target="_blank">
              Acessar
            </a>
          </div>

          <div>
            <img src="https://vetrinariosite.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-dog.e44fd084.webp&w=750&q=100" />
            <div className="projetoInfo">
              <h3>Landing Page PetShop</h3>
              <p>
                Landing Page para PetShop, onde o usuário pode ver os serviços
                oferecidos e entrar em contato com o estabelecimento.
              </p>
            </div>
            <a href="https://veterinariosite.vercel.app/" target="_blank">
              Acessar
            </a>
          </div>

           <div>
            <img src="https://lh3.googleusercontent.com/r9hEHCqjHD2gReX5JFTEnIdWFn1BzF2qpXif-_VzjSzT_rT8wdh39UytSfIMsf1c6II" />
            <div className="projetoInfo">
              <h3>Aplicativo Controle de Gastos</h3>
              <p>
                Esse aplicativo tem como objetivo ajudar as pessoas a gerenciar
                suas finanças pessoais, registrando seus gastos e receitas.
              </p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.alisonaraujo.Wallet"
              target="_blank"
            >
              Acessar
            </a>
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
              alt="SwiftUI"
              style={{
                background: "linear-gradient(135deg, #1e293b, #0f172a)",
                padding: "2rem",
                objectFit: "contain",
                borderRadius: "0.75rem",
              }}
            />
            <div className="projetoInfo">
              <h3>SwiftUi</h3>
              <p>
                Projeto básico feito do zero em SwiftUI para praticar
                fundamentos de iOS: telas construídas com NavigationStack,
                animações de transição e componentes interativos como grids
                e botões.
              </p>
            </div>
            <a
              href="https://github.com/AlisonNunesAraujo/swift-studing"
              target="_blank"
            >
              Acessar
            </a>
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              alt="Spring Boot"
              style={{
                background: "linear-gradient(135deg, #1e293b, #0f172a)",
                padding: "2rem",
                objectFit: "contain",
                borderRadius: "0.75rem",
              }}
            />
            <div className="projetoInfo">
              <h3>Spring Boot Student</h3>
              <p>
                Projeto de estudos em Java com Spring Boot, ainda em
                desenvolvimento. Por enquanto conta com a camada de
                Controller para APIs REST, com Service, Repository e
                persistência de dados sendo adicionados conforme avanço nos
                estudos.
              </p>
            </div>
            <a
              href="https://github.com/AlisonNunesAraujo/spring-boot-student"
              target="_blank"
            >
              Acessar
            </a>
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
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="Java"
            />
            <p>Java</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              alt="Spring Boot"
            />
            <p>Spring Boot</p>
          </div>
          <div className="skill">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              alt="AWS"
            />
            <p>AWS</p>
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
