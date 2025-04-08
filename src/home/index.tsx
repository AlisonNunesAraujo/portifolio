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
              <img src="https://lh3.googleusercontent.com/r9hEHCqjHD2gReX5JFTEnIdWFn1BzF2qpXif-_VzjSzT_rT8wdh39UytSfIMsf1c6II" />
              <h3>Aplicativo Controle de Gastos</h3>
              <p>
                Esse Aplicativo tem como objetivo ajudar as pessoas a gerenciar
                suas financas pessoais registrando seus gastos e receitas
              </p>
              <a
                href="https://github.com/AlisonNunesAraujo/walletApp"
                target="_blank"
              >
                Acessar
              </a>
            </div>

            <div>
              <img src="https://lh3.googleusercontent.com/r9hEHCqjHD2gReX5JFTEnIdWFn1BzF2qpXif-_VzjSzT_rT8wdh39UytSfIMsf1c6II" />
              <h3>Site Controle de gastos</h3>
              <p>
                Esse site tem como objetivo ajudar as pessoas a gerenciar suas
                financas pessoais, registrando seus gastos e receitas , na
                versão web
              </p>
              <a href="https://wallet-web-flame.vercel.app/" target="_blank">
                Acessar
              </a>
            </div>
            <div>
              <img src="https://github.com/AlisonNunesAraujo/appcompras/blob/main/assets/app.jpg?raw=true" />
              <h3>Aplicativo lista de compras</h3>
              <p>
                Esse Aplicativo bem simples pode auxiliar na hora de fazer
                compras, podendo armazenar sua lista de compras
              </p>
              <a
                href="https://github.com/AlisonNunesAraujo/appcompras"
                target="_blank"
              >
                Acessar
              </a>
            </div>
            <div>
              <img src="https://github.com/AlisonNunesAraujo/portifolio/blob/main/public/appstore.png?raw=true" />
              <h3>Sistema web de controle de agendas para barbeiros</h3>
              <p>
                Voçe pode controlar sua agendas de cortes ou demais serviços com
                esse sistema web que foi desenvolvido para ajudar o barbeiro!
              </p>
              <a
                href="https://barber-web-eosin.vercel.app/"
                target="_blank"
              >
                Acessar
              </a>
            </div>
          </div>
        </div>

        <div className="formacao">
          <div>
            <h3>Formação</h3>
            <h4>Cursando Análise e Desenvolvimento de Sistemas</h4>
            <h4>Fabrica de Aplicativos - Sujeito Programador</h4>
            <h4>AWS: Academy Cloud Foundations</h4>
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
            <img src="data:image/png;base64,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" />
            <h3>NextJs</h3>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADsCAMAAAA/3KjXAAAAvVBMVEX////GPRT+/v702M/AHwDDMADGPBLDLwDENADCKwDBJgD9+PbFOQ/BJQD++/r45+H89PH03dfLOAD57enHPADdlYbdjnjswrfENgfjqJruyb/45d/MWD/RalPHPQzvzcXbkIDWc1bNXkbKUDTWfGnYfWTgn5HHRinntarUblHLTCTYgWvHQiLekXvquq3lraDRYT+8AADLTCPMUy3Scl7PWjnWd13ZgWnfm43PZE7JTC7UcFLYhXPQZUfSbVnXn71YAAASPklEQVR4nO1dCXPiOhLGGMkSiGsNwQYChBBCAoHZyTGER+b//6yFhMQtW5fBFtSr7Zqacows9aez1d1qFQqZULGYTT4ZUWbc/B/W/+lIyrCOL6m5/qWwMqQLgpUlKxc0xWfKyb8U1sVQxqhAdhXXNlmBVXf+W7JJ//0AbGTdB6P8Km3kWCTsdYS1mzWsQodhi7CCTc8OrN44sAjL21byQ8X1apu9EAd59sGz9cKg38wVFqDGxl4vRFuAJY/WAnlele3BWuaKisvUrdrqhcF9I2dYgCrPtnohvcsdFch2RC3BKuU7D8aydQfMCqrgd0XOT/aw/GtiBZb3VIuKz39PUpt6NlBh0hXWarYEMu46Nnph0M9THhRk3LDSC9G6JucmO1gA19rCXIid/OfBWNYuzX9FDsZ127AKz/mL8fRJUnbWsGAvzF8uLA+toOIyb6K858Lgt7jkXGE1PvLuhXRrCRWX/crLd9LAnissN2dyF/n2QvLL3p4EyoUvKVfklLXgTWuiYnOnMN3gGqST+hm2NQ/GCnDv0/BJrju3qdL/9fPGIoZVSyUXorBwlUbgQlOLqLgVeVoy5zLY1AvNkvnciR0bexJhEfUUmppqe/fBnXlzkY+KsEwLsAq/jCcN1trP1k3zWaO6zh+KDNfKuPbpJ5eVremmGletKXOT1DOt/eDxa5vbNV3Cg0dQjBVYYNJo3Jn1QozCr49qW8NuS6fCAnPFFT3OiNGkEdkHhsyoudjAfh+EK7LZCutF4//GaHQhuBbbh1WZmKzIjEUKJNdk7cJeWBQVly8sOBeajJXPNeub7gyai92fY08C98gGUxsbAE1LYUj0X5AXi3YSYUE3+uaisLEKjYn+C8/+PBgraaaVC4NNk/u6o914Mecs+2JOpdHSMYmmvGq2pm0u9CEuyya9aaaA4LYZ+6Kj05xWwyixVVSgsKWGSXqV+PpV3VzMs6PMVVJPbfZnqJ74pFtW1oT3ABYtu7CAC9RIWfflZGMVasrpE9OZqBwrBHthoKh7NugJvu6oREn2eL49CVyRbxW9kI5EFir/r0LmQpOGqBgrBMtT7A3ja9Y3KdyLMDlfH4zNhfKab4vNiRW50ordnmctThToS8UGvJA5pC6lwgm6s2FYlRGced9kzVWewy84XL9lzVVeiQuxRNDsL1mHGK3LPpGu4ozY30BCgnLho3gupPNYevjNu7i5vAdxGdYoKrN2JZwLWQAXoBiswkxsHquecx6MFdoVLq8enAaL8W/qwsmQOeftg3qnZLaBM3UCVmEmgsU5HJ/74EVN5JSMtonG4qjxmsSFSSeZ0DLBFTkpNeBgKEgL4YXJtYvbnJ2pseCKnOyF9I8oKWS1lpxAkVCEPB8lnJKZB6VBsdZvFV+7MMvb4diE4FwY71CJNUtA9X5sdAW3F7Av5gpu8R2KDZLTYPKjMLZ2iTuudYKu8bxc6I2kxkS4dsWGpAWHYxMCRQ+5imcL0TSY/CvkKoO18nc4Tkk+p07yJvI1C/7pO7C5LDi9mxGQC9dALsRUdfAP/r2uwq/sGvflBHsh2EzSN8OPCv7vqLmCV5sOJioSi67MU5/SBG+KYbR2wWnm3OJgRJFc6E3UPhVwwm/+aE/zPoCWhuCK7BzqnTN4CBmE76bftUHeL2EtThRfGR96IdnqjG7w5Y+aEY3yYfEYgv3p6Usu5LzXJdUO37YP4uQF9UHe7P/lAoXe9Exxk2H1cwoNNucwrMoIMvC874W4ZHJYHb7/krvKlpzezShxQINTHck/A8+9/YqHy+dU5iYJ9sIW261ZcmlQ8lmt7dk5gJaG4B75b5XQidkQga3s3gdBaWT0mQE/xd2/4uH/k7L5eXTbfzdd+Jvqu+ixNqL9CbeZPpKfIq8Q3/9xTFbJ+vBd0/mMW7uWTV6HUTymqiVrSUb5mP6u/TodP/Lk6TI6dboyWN3Mi1AnNc/IIOVpjWlaillWWeWT1eJjlEtG3BhV4unNaZooo9XbrGvoU5mxk1UHO72gQ7KsavGkn41TZjStZMSOQKfQ6LnDpp8sPV0+xUazs1p13Ea6fBJU84fL1bJbr6TJJykPtH8NaLVcJs/zTr2mTiz/qdac3bTK1T21HlZN43ziddlw28/kMxv6OO/GVVBGIvOOKssXQhHDDsYs8Lz+tKdKLWent95Q78u4hRmij23ea8aUnUJngin5zGfPD7qeNVSpZT/0Xhj0BMYE9XkzoOFwX/Y96MiFA+92xiWQbiO5Hxojhzvui0lwzdezJB8+m6WTMLOT8hNXQUYr07acMLwFVd4LRsYP/MMdl+N+ONjjNCJG2ayYwIKNy1tf9oH4deNK5KqPS/OG5APJ2+FG5P9AnJnwUy4bmM8yEHqHYM7SJtGEQQXaWnLw2BtpccGXdSGqXbtjrQaLUx2IUe3reSX6VpZPR+anz9BM8omIahOZxxRxUujkG+9Sj1LmaPQQsLHqLal3JGc3Fk0+8FUod9ujb2oXCEgrhQ8q0igi4Ku5IgIDZzFR86PyHeUVqQJ2oqyVMX8YGypy4TjsqY6K6I7jA/VHqPI311QzeCN2T/omb2t64FwdtIWOQOEqfirPqpNSDCurJ3pTmysPGQSDaJQqRUVNiB11uBXwYqh2iafTojwbWDsS178DYWVAEaja2yiPlnAmcVU+bXWMFPSg6D2g3nue+qRLFR4xUrCjibyIicodBrzQnCmEul4VrK7mYDd0+FANrpXmrCcKFV+DnwReapDgUQ4VrKUmMI73jwILyFgXVAIGnqpVdlTbU4IzgTcXR5hGK6AK1qqqzIazd6g6T4g0rRUd2ip2tjsatXe0nu4pjKYlzVDfjXUzWNrWujGDtTKHVWuXCSH/iagE1PSa+I3Y64lKT8By1RMqd4BHBUt5XoY/UVG5inXYEphONOGH2EBx3gQKGZpzpJxzvQLWcKGExYDYkzjjCQ/TaYKjkl8q8QCsW+pYEHCIJgkKuupIyDAarv8Rm+1gj1iqxzp9MpN6imqhh7yqHJu5GLTKBQeBrVv9d6yDIDB+/YGqejBSekFB8UB1PBZT1XLD90LlkcgyEL278ZTQx7P2pKpm8u6Lyha8aqhCO3DHrTQbnA9Fc6FXsFFKMM6FmRmqqpmEyXIluFSROOhavW+DvXBYleaDoRdnISmjw6BAlZG8ekhfc4QBvmtLRykZ605CgJe1trQbUujYLwi5wIVw6sX9kH+IlXV2aPiuIus+AdI6isCX/oskH3QNdRCCKZwxyO+QipudUW2UHW5Wa/aF/ATBkvtEnBF47vWFw93jjoXXRZt6eJJkHzpPhAvTJ5jIQDHnvgoWQcLpi4zUn/7v5H4Al1ucPlYoE7MW566wQsl+yEpXJupY7rU/92IbC0b7rjy9jCpbxsuGmASc8rPgijUw9IPLxx1TXhhjaMF1HbnSm/9rNUYRQzigi5H8vB//A/dLrfPX8753lJh53vuS8/GpSWJ2Yyju7shfb+iPWLdjx9nGKtnQtlCozz68MkUkIF65/Nh24+4esmzi+fidu0G5TD2PlsuDt2XsAH9XJoKScawam+HrjhFvl0+VPo6GcQcoU1i7hbkZ3v16fn69aXcbKc7hJBBX/E77zz//3LWXfpyZhvS8qoNGscTFRnP29PZwMw9dETtmFhwN68ofjUto3Mglo52clhFLxuxoEpriUsdmYLYP1mm5NsT1pN7bBY5ahWzMlRk3JqlM0mwTtrgErqU+l4yYMUykTdW70wd/DrxpQ5ePnrEsJpOfvDSZdcYmsdIY3YqihETkG5xCNoCVArkqqd92zKKdYtRXmVK74zbQwRuIheIUaVDJF0h/6mj0W7AjVh+7YufjivtWoi2tQRLwUWkKckrloiRN7LvhY9L+ryJEH2YJfmr1zqS129BpQz7Bl53b7co1dOiQwBK9rPW605eFl/ZGGkzQjp9h1C4Nd9l+J5+eGmkCdFW2HiGL/ts6xTwUQwVLcN+u1tPp+unu/dZB5JhLrHCw5+dm/jSdTtvzt/F9gA47DOaotSuQke4+UiULSn+Veh1TVP57le6dnsreUZAiaOgrG4oCsOB56l4IR9bBIqk01hhTbZpruHt4/5balc79EmoyOt3mLnK93Ul9WA2+OETE4eNZpADCpa1o4rydSkouucY6KCCCMTCyHL0OX2kMZqcSZoZ9anvYBJHjZgw+6dIssO4JsAyDdP3Y6MnkmPgofEJl/LRsYKFQajThlLHfMigHyxQVT3UjgfY0gvHK5LCaPzcJnA6rKHUuy5Dkh6zhX9MfTo6AFUsWpojGny+sRhTyID2sWCo7l31KYcE/1lFwFRhq+JhO2MVWblmEHh4yWPDCR+hudYT+wt1YuXAWI0lUbvi8BKykjG8Y1wr37VyjK1234MiC99+wVFdqxFG9W7mKUHHxh8zAipHKB0NNzWtLqKR9CggQ0VL8Scg4DFv817o1VLyIB2FFjz4v6nBBUlSw4qj8a1tXsu7q/krMB3ic8UZsDM+pm5t+Cr13e6gcT+xvCXmK28K5KNlS7WL8B1flkZE1sYVYowaYqsdN6sFAGx4g2YjurUVUnEe9eMIQxAOELnBax4cv6m7s3J37RZwxVtIHHxIMkb7ykEuyqWorzyYqB32IsYBH9z4pmQYqDXiyqRptiWtIToQlEwZ8XgnqOXbTmkzmOlB9YhcVz554ThPeOsRJGvBTUR7DV42DbtbEqWcksIRBYneToeiMpiiHRkitDitnvwBJZgnwLHHcgxcbfH4hib/RnFvugHsjrOxUIxQxJD2oauRIMOtb7oB7vztpF4z+kLojMqY3TNfv0pmssiDGmwgksGQRvXfTzUbjSODPni0KgQfCXPTQ2BIa/eHLjz2gW95vKkbDF2S9qXYC0FxhfItgNRW+Hyhx3w1oqqeF9VG1F5puOHE1Pq39PCov5iEL3g/uhxprqnMayYMYMQ3yrDgHuyO0EElRvdXrOUA5yFnxWwu5klpzmCNACUNyPRwLnE3zJ1Z+jc1hCrOW9PaKA2HvnZs46u1blLeRR8gHCp58KYrEC/31qR79yc8f/qH2Vypnv1g5L/FpOSn0gDeaY22feZbHq/reeyV8J9YlpT0FdLDtGLizgleOSeWTYLyaTTbI4LLAzInR0mDbTCxW6j17UXsF3Sdhgk7zrjiKMCOI3b8tBQuwUO4Gmk8zWNYJswChYPPSjvtkK1BdNqwdIEq9wesk7LgSPzSJku8iYe0aiNByqURbv/6Ew54v9VaXKmQvC9YeD9qt8Pf963l7KWshAwJ4lWcQbUAintfaXE/Ws12XMxH4FEYB8NPvM8LCu05HPrarYbNu6uqnNuBEj+aXtGcMKfAoer3q+JVUBz5MYenuGM0HE0FOfztTe08LQOkSRI8aCT4PCigarzupMaUK17iyrI5gXsm56sYj6WWAqcA1p/r4c8aEibe4SQitekzGKX8e6wNrCxdD7DpUxQYQY0phlQcKtV+WdrqMOtuO8VJbPDGMc0VxxWh2hEmpddUz633HIYrByt9P87P3va8MMB0Cmx+FKA5LE5kpA1DUmSx1oE5oIjE1JrkOLkbJfKhWxGaJJqIwx8EV7ECJjuN8Y8q2hbgaitxZMwdFbq+Em9sfUJli4mEV/uQjaAT0dipfpXLAVODFxmEerrVB1Vn3pPvbfIZTjB6yHl27XcdiKlt6c8UE83ZZpqMLB6i/lo6pnFsKeuoq4r6kp4A+h5Jdh4XOB0vI8OxEUHLCnph7OyOKc0GWRPhNSZiQ21CyTOUz9alhFUYZbJJ3u6n3UDam7GAqxPpE4+/JixehrzMxKFsNdSgN/tEbn4Rrt/N4nkkcMi3fJs0X1zvBf5gh51rmnGL/imy+wPr1kWoN5gXbjkRIP8u93zFc82Ps90G1tZXsPGx3v6hg7q9KyFJulRnxHtt1mV3mTKCS5L6ncPjZCUnOZCbbIl4Mpj354cbQ6s08+tqWxH64gJaKlV/rbav6IcZQyfvoJOI3fWd5dlCiztK82nhym/7eyEYWNyu5yu8CQBWEg6A5vXZEyD6vSMH97UrhkXcZoAriwV0fhh8DSj3EGN4TY/ugapQ8z8Nu/GYcmNWlYJJSrdHrth8eW/toFWXqkcHzTbvT9JP3D0V0caAU/DTqvWavZ2AFvThQhQxWmUsEtadT2LqEGV1GR7N2wZg+6Rj2iheP6ph6v3xMX2TO5iUPqCQZ2s1OMq+dhfTNcJrN8JwkND1lbjM8BxXjdOETxP8ADwwoGnOLWAcAAAAASUVORK5CYII=" />
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
