import "./styles.css";
import Header from "../header";

export default function Home() {
  return (
    <div className="conteiner">
      <Header />

      <div className="item">
        <div className="desc">
          <h2 className="subtitle">Olá, meu nome é Alison Araújo</h2>
          <div>
            <h3 className="textDesc">
              Eu sou desenvolvedor Mobile/front-end, Apaixonado por tecnologia e
              programação, atuo como desenvolvedor mobile e front-end júnior
              Gosto de construir soluções inovadoras que facilitam a vida das
              pessoas. Tenho experiência em desenvolvimento de aplicativos para
              Android e Ios, e criação de sistemas web. Sou Apaixonado, por
              tecnologia e busco constantemente me aprimorar nessa área.
            </h3>
          </div>

          <div className="areaImg">
            <img
              src="https://avatars.githubusercontent.com/u/166415022?v=4"
              alt="img"
            />
          </div>
        </div>

        <div className="conteinerProjetos">
          <div className="projetos">
            <h2 className="textProjetos">Projetos</h2>
          </div>

          <div className="areaProjetos">
            <div >
              <img src="https://github.com/AlisonNunesAraujo/walletApp/blob/main/assets/app.jpg?raw=true" />
              <h3>Aplicativo Controle de Gastos</h3>
              <p>
                Esse Aplicativo tem como objetivo ajudar as pessoas a gerenciar
                suas financas pessoais registrando seus gastos e receitas
              </p>
              <a href="https://github.com/AlisonNunesAraujo/walletApp">
                Acessar
              </a>
            </div>

            <div >
              <img src="https://github.com/AlisonNunesAraujo/walletApp/blob/main/assets/app.jpg?raw=true" />
              <h3>Site Controle de gastos</h3>
              <p>
                Esse site tem como objetivo ajudar as pessoas a gerenciar suas
                financas pessoais, registrando seus gastos e receitas , na
                versão web
              </p>
              <a href="https://carteiraweb.vercel.app/">Acessar</a>
            </div>
            <div >
              <img src="https://github.com/AlisonNunesAraujo/appcompras/blob/main/assets/app.jpg?raw=true" />
              <h3>Aplicativo lista de compras</h3>
              <p>
                Esse Aplicativo bem simples pode auxiliar na hora de fazer
                compras, podendo armazenar sua lista de compras
              </p>
              <a href="https://github.com/AlisonNunesAraujo/appcompras">
                Acessar
              </a>
            </div>
          </div>
        </div>

        <div className="textSkills">
          <h3>Skills</h3>
        </div>

        <div className="areaSkills">
          <div className="areaFront">
            <h2>Front-End</h2>
            <img src="https://camo.githubusercontent.com/426c1121b29abc64a6b1af1e3aa3091abb38e39c87054720b765af1425c74e7f/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667" />{" "}
            <h3>JavaScript</h3>
            <img src="https://camo.githubusercontent.com/a07203131922e3fa0d6d0cd787edb5597771b30d712574bbc70a3c7aaa0161ea/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d6f726967696e616c2e737667" />{" "}
            <h3>TypeScript</h3>
            <img src="https://camo.githubusercontent.com/34b891c76d258e4b0ee593443e5cbc2506cdbb7d3cd6bc0e4beffa87a9c1611b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" />{" "}
            <h3>ReactJs</h3>
          </div>

          <div className="areaMobile">
            <h2>Mobile</h2>
            <img src="https://camo.githubusercontent.com/34b891c76d258e4b0ee593443e5cbc2506cdbb7d3cd6bc0e4beffa87a9c1611b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" />{" "}
            <h3>React Native</h3>
            <img src="https://camo.githubusercontent.com/a07203131922e3fa0d6d0cd787edb5597771b30d712574bbc70a3c7aaa0161ea/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d6f726967696e616c2e737667" />
            <h3>TypeScript</h3>
          </div>
        </div>

        <div className="contato">
          <div className="areaContato">
            <h2>Redes sociais</h2>
            <div>
              <a href="https://www.instagram.com/alisonaraujo_dev/">Instagram</a>
              <a href="https://www.linkedin.com/in/alisonara%C3%BAjo/">
                Linkedin
              </a>
              <a href="https://github.com/AlisonNunesAraujo">Github</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
