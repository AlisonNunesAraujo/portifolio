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
            <div>
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

            <div>
              <img src="https://github.com/AlisonNunesAraujo/walletApp/blob/main/assets/app.jpg?raw=true" />
              <h3>Site Controle de gastos</h3>
              <p>
                Esse site tem como objetivo ajudar as pessoas a gerenciar suas
                financas pessoais, registrando seus gastos e receitas , na
                versão web
              </p>
              <a href="https://wallet-web-flame.vercel.app/">Acessar</a>
            </div>
            <div>
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

        

        <div className="areaSkills">
          <div className="areaFront">
            <h2>Minhas Skills</h2>
            <img src="https://camo.githubusercontent.com/426c1121b29abc64a6b1af1e3aa3091abb38e39c87054720b765af1425c74e7f/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667" />{" "}
            <h3>JavaScript</h3>
            <img src="https://camo.githubusercontent.com/a07203131922e3fa0d6d0cd787edb5597771b30d712574bbc70a3c7aaa0161ea/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d6f726967696e616c2e737667" />{" "}
            <h3>TypeScript</h3>
            <img src="https://camo.githubusercontent.com/34b891c76d258e4b0ee593443e5cbc2506cdbb7d3cd6bc0e4beffa87a9c1611b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" />{" "}
            <h3>ReactJs</h3>
            <img src="https://camo.githubusercontent.com/34b891c76d258e4b0ee593443e5cbc2506cdbb7d3cd6bc0e4beffa87a9c1611b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" />{" "}
            <h3>React Native</h3>
            <img src="data:image/png;base64,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" />
            <h3>Firebase</h3>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAe1BMVEX///8QEBAAAADa2toLCwtmZmYUFBTJycmUlJSYmJitra2RkZF7e3vMzMwJCQlNTU1YWFjn5+eIiIjX19fz8/OlpaXh4eGfn5/5+fnw8PC0tLQuLi5DQ0O7u7s9PT13d3cmJiYfHx9ra2tcXFx6eno2NjaEhIRTU1M+Pj4JwLQJAAAGWUlEQVR4nO2be3eiPBCHIbUXa4uK1lpbe3PV/f6f8OWiMhNCMpGEPec9v+ev3YYQ8gBDkolJAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8WS5uLiy8as5JTRkdzd7MnRdJDl6Qo32vYPHm1cPkXhFyn5oH5Qut/UkLVvaW1ik9eN0UeF/Bq08HSzlpg9p41MxpTQGjEat+l11KsnTd0UbNtGlppOhj5nkFqXrx6F+iyUnVjbvGmZ5y5qS6mtoaOtAjt7RkWDmZst9DSk85yZb2+dDdzoYeN2FFw8pJ1Ye4Zl85yYT2uvOFvqFH7XjZwHJS9SSt2VtOsqP97nih16qJTepbKxxaTqoehTX7y0m+m1N0vdAfXcH4n8hJlXC408gZiciy1inmatQ0a3yhv+jDda+XqqzdDL0bOv3lSIPyRc7oTkT6Y29dfbXLH2l5e5Ci0nYzjZ12WX85qforqvlwril91EyMae9bL/SClt7Kzni5Zcp9rAuDHOM9bNPIee7R/i3tv2b5jQbjd+EJ48ihVyl5/MLISd5pxF2yoj0tkk6LoshRXzQ6Ct6UQHLeaLN7WsKCsbiNOHJen/1uVCA5yTN18Nv8/dX3Ua6JI2dMo6PgFQ8lp8NClzMXseTQ6Oj+OASTk/wa3h/2tn16nCyaHBodnWsf4eSYIu/7NcG4JJ4cdr8cfQ4oZ0mbrV5o2xfeTjw5CQvK9uXLgHL4aG+nhSHpZK8mohx6Wa1JMCekHD5PGLNgLF4mqIkphwXlna1mUDl8UEP/LV9gqokqhwXliaVmWDl0bYKQjeRLkzVx5bCg3FolaAgy8Wygq1rkwfFY1K6JK4dGR1tQbuR8PUxs5M68VMWN4dHxSofURJZDo6MyLMKcuMhJXdki4d1/bNnxDcYlseXQ6KiOXTUfjEHCgPjVeNLXs32DcUl0OTQ6dqZBw8uh2bvUL0/UEF/Oki4zbc01I8jhQdmVJTYTXw7PFpkvMoKcZCVOg3YygBwaHTse7xhyxGnQboaQk/whYccYGKPIYdmwKz7kA8lhQdn0SQ3+Ka+ZCdKgNoaRwxKxhplxMwi8fbLyJRsEJqfR+I87DWpjGDk8OrbvYeDpQ/J7Go2706BWBpJDo2OmZU2S4BPPF5X9aJfU9UJbGUoOjY7tNGhYOeWE7vzxZntT/Ja6BpSTHIkdPQ0aVE69UHr+eLO9KZ4v7XBy1iQ66rmjoHJOS+znjzdpVk+DuhhODo+OXEJIOZfkzCnwd6dBnQwohwZl7R4GlNMsXGdp3ca1Kb1h5dDoyNOg4eQwE6dFAJZ/8Nk+7CFntjvWAW27K4aq+0krPeaUQ6MjS4MGk2N+h1jmyqMFDzmFkXLgufx7Hsrr6w9uOXTnHr2HweR0JDevzHn6yBlVcor+qenhVxX/1b6MAjlz84p7KDldj8iVQdlbThFVaylHpWb8AIEcOmQlK+6B5NDJPR8tsFAk3PR2hZyDOg3hVj97bceCRA7bm/Ld6lUvObYtky+0zHJ5DG85uercBCmSY0yDBpHDfgHRmmXaN9qa8ZZzX4Yccxdkclga9KH+UyMnf5RhOC9bn2gPhT9lKTTWY185xQh0VHypjq/t1WChHEMaVL7YdaZ92iN9NAwrW2yhvzuFxnrsLad4fWs+dP1COYa9KeJl0nO19vZ+9/Sb7U2ZmY5o9dhfTmEh35dfcv3+SOXQ6Fjfw/5y2Gr6H3OzbG+KbV/DpcfXyClYPmYjfSekWA7duVelQXvLWVmD8RkWlDtSaKzHV8qprkcbbMrl0OhYzoD6ylmn5IeMlsViujdFkOcTyNnkeSWlkPNcTSJW56pa0PeQo6VB+8qZCjtNF/qzO+eKu13OdjyvRjblg7qon5RiZlXvB8gLWfz0HnJ4dJyP+8lhv9y0JqhY9tWZBrXK2VTfzOKEarZ5LVyU4+5y+nB3GE/2qpVGbH46/eCUU0THhp9+P53e0ALHT7bZsa4Vd9vIobwj5cOSV+WZuqtGVpPynxX6jpLF7rZmJ0kvTm57QNes5vtpg3Mxa3KcXfhwjMd3l/YMhfOslrutftaen16ixW+lZioI9/9vLkFlzj5Mbyth5hEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGPgPhpFSDmJayZUAAAAASUVORK5CYII=" />
            <h3>NextJs</h3>
            <img src="data:image/png;base64,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" />
            <h3>Testes unitários</h3>
          </div>
        </div>

        <div className="contato">
          <div className="areaContato">
            <h2>Redes sociais</h2>
            <div>
              
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
