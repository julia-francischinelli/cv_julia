var curriculo  = React.createClass({
  render: function() {
    return (
      <div>
        {/*Metadados*/}
        <meta charSet="utf-8" />
        <meta name="author" content="Desenvolvido por Maria Júlia 
		e Júlia" />
        <meta name="descritipion" content="Venham e conheçam 
		um pouco sobre mim. Curriculo Vitae De Maju e Júlia, 
		apresentando seus projetos e aplicações na area de 
		informatica." />
        <meta name="Keywords" content="cv, curriculo, vitae, 
		informatica, web designer, desenvolvedor, Maju e Júlia " />
        <meta name="viewport" content="width=device-width,
		initial-scale=1.0" />
        {/*Links*/}
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libx/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/fonts.css" />
        <link rel="stylesheet" href="css/larguras.css" />
        <link rel="shortout icon" href="img/icon.png" />
        {/*Título da Página*/}
        <title>Curriculo Vitae | Maria Júlia e Júlia</title>
        {/*Conteiner da Pagina*/}
        <div className="w3-content w3-margin-top larg-pagina">
          {/*Grid da Pagina*/}
          <div className="w3-row-padding">
            {/*Coluna da esquerda*/}
            <div className="w3-third">
              {/*Bloco da esquerda*/}
              <div className="w3-content w3-card w3-white w3-margin-bottom">
                {/*Display da imagem*/}
                <div className="w3-display-container">
                  {/*Imagem do Perfil*/}
                  <img src="img/pessoa.jpg" alt="Maria Júlia e Júlia" className="larg-img-perfil" />
                  {/*Nome do perfil*/}
                  <div className="w3-display-bottomleft w3-container w3-text-teal">
                    <h2>Maria Júlia e Júlia</h2>
                  </div>
                </div>
                {/*Conteudo da esquerda*/}
                <div className="w3-container">
                  {/*Profissão ou estado de formação*/}
                  <p><i className="fa fa-brifcase fa-fw w3-margin-right w3-text-teal">
                    </i>Estudante de informatica</p>
                  {/*Residencia*/}
                  <p><i className="fa fa-home fa-fw w3-margin-right w3-text-teal">
                    </i>Itu/sp, Brasil</p>
                  {/*Endereço de email*/}
                  <p><i className="fa fa-envelope fa-fw w3-margin-right w3-text-teal">
                    </i>gtgt94@gmail.com</p>
                  {/*Telefone*/}
                  <p><i className="fa fa-phone fa-fw w3-margin-right w3-text-teal">
                    </i>(11)98856-7480</p>
                  <hr />
                  {/*Subtitulo de habilidades*/}
                  <p className="W3-large">
                    <b><i className="fa fa-briefcase fa-fw w3-margin-right w3-text-teal" />Habilidades</b>
                  </p>
                  {/*2°Habilidade*/}
                  <p>Adobe Ilustrator</p>
                  {/*Barrinha cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*Barrinha verde*/}
                    <div className="w3-container w3-center w3-round-xlarge w3-teal segunda-habilidade">
                      80%</div>
                  </div>
                  {/*3°Habilidade*/}
                  <p>Adobe Premiere</p>
                  {/*Barrinha cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*Barrinha verde*/}
                    <div className="w3-container w3-center w3-round-xlarge w3-teal terceira-habilidade">
                      70%</div>
                  </div>
                  {/*4°Habilidade*/}
                  <p>HTML e CSS</p>
                  {/*Barrinha cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*Barrinha verde*/}
                    <div className="w3-container w3-center w3-round-xlarge w3-teal quarta-habilidade">
                      30%</div>
                  </div>
                  {/*Subtitulo de habilidades*/}
                  <p className="W3-large">
                    <b><i className="fa fa-briefcase fa-fw w3-margin-right w3-text-teal" />Idiomas</b>
                  </p>
                  {/*1°idioma*/}
                  <p>Inglês</p>
                  {/*Barrinha cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*Barrinha verde*/}
                    <div className="w3-container w3-center w3-round-xlarge w3-teal primeiro-idioma">
                      50%</div>
                  </div>
                  {/*2°Idioma*/}
                  <p>Espanhol</p>
                  {/*Barrinha cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*Barrinha verde*/}
                    <div className="w3-container w3-center w3-round-xlarge w3-teal segundo-idioma">
                      90%</div>
                  </div>
                  <br />
                </div>
                <br />
              </div>
            </div>
            {/*coluna da direita*/}
            <div className="w3-twothird">
              {/*Bloco da direita*/}
              <div className="w3-content w3-card w3-white w3-margin-bottom">
                {/*Experiências*/}
                <h2 className="w3-text-grey w3-padding-16">
                  {/*Icone Experiência*/}
                  <i className="fa fa-suitcase fa-fv w3-margin-right w3-xxlarge w3-text-teal" />
                  Experiências
                </h2> 
                {/*Container das experiencias*/}
                <div className="w3-container">
                  <h5><b>Estudante de Informática | Microcamp</b></h5>
                  <h6>
                    <i className=" fa fa-calender fa-fw w3-text-teal" />
                    Out-2022
                    {/*Box verde*/}
                    <span className="w3-round w3-tag w3-teal">atualmente</span>
                  </h6>
                  {/*Descrição do componente*/}
                  <p>Habilidades em informatica, dormir, comer, mexer no celular, assistir netflix, etc.</p>
                  <p />
                </div>
              </div>
            </div>
            <div className="w3-twothird">
              {/*Bloco da direita*/}
              <div className="w3-content w3-card w3-white w3-margin-bottom">
                {/*Container das experiencias*/}
                <div className="w3-container">
                  <h5><b>Auxiliar da minha mãe | Casa</b></h5>
                  <h6>
                    <i className=" fa fa-calender fa-fw w3-text-teal" />
                    Out-2022
                    {/*Box verde*/}
                    <span className="w3-round w3-tag w3-teal">atualmente</span>
                  </h6>
                  {/*Descrição do componente*/}
                  <p>Varrer a casa, limpa chão, passa pano no movél, concordar com ela sempre, lava louça, lavar roupa, cozinhar, passar veneno, etc.</p>
                  <p />
                </div>
              </div>
            </div>
            <div className="w3-twothird">
              {/*Bloco da direita*/}
              <div className="w3-content w3-card w3-white w3-margin-bottom">
                {/*Container das experiencias*/}
                <div className="w3-container">
                  <h5><b>Auxiliar do meu cachorro | Casa</b></h5>
                  <h6>
                    <i className=" fa fa-calender fa-fw w3-text-teal" />
                    Out-2022
                    {/*Box verde*/}
                    <span className="w3-round w3-tag w3-teal">atualmente</span>
                  </h6>
                  {/*Descrição do componente*/}
                  <p>Alimentar, trocar água, passear, brincar, limpar suas necessidades, levar no veterinario, etc.</p>
                </div>
              </div>
              {/*Bloco educação */}
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                {/*Educação*/}
                <h2 className="w3-container w3-text-grey w3-padding-16">
                  {/*Icone Educação*/}
                  <i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                  Educação
                </h2>
                {/*Container de educação*/}
                <div className="w3-container">
                  {/*Descrição da formação*/}
                  <h5 className="w3-opacity"><b>Estudante de software</b></h5>
                  {/*data da formação*/}
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-text-teal" />
                    2021-2022
                  </h6>
                  {/*Resumo da formação*/}
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.</p>
                </div>
                {/*Container de educação*/}
                <div className="w3-container">
                  {/*Descrição da formação*/}
                  <h5 className="w3-opacity"><b>Estudante de informática</b></h5>
                  {/*data da formação*/}
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-text-teal" />
                    2021-2022
                  </h6>
                  {/*Resumo da formação*/}
                  <p>Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla.</p>
                </div>
                {/*Container de educação*/}
                <div className="w3-container">
                  {/*Descrição da formação*/}
                  <h5 className="w3-opacity"><b>Estudante de administração | Fatec</b></h5>
                  {/*data da formação*/}
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-text-teal" />
                    2021-2022
                  </h6>
                  {/*Resumo da formação*/}
                  <p>Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium metus, in lacinia nulla nisl eget sapien. Donec ut est in lectus consequat consequat. Etiam eget dui. Aliquam erat volutpat. Sed at lorem in nunc porta tristique.
                    Proin nec augue. Quisque aliquam tempor magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ac magna. Maecenas odio dolor, vulputate vel, auctor ac, accumsan id, felis. Pellentesque cursus sagittis felis.
                  </p><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});