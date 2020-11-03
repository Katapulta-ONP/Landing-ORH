import React, { Fragment } from 'react';
import Media from 'react-media';

import Logo from './img/logo.png';
import Header from './img/imagen-inicio-instructivo.jpg';
import Table from './img/imagen-final-instructivo.jpg';
import './App.css';

const Content = (props) =>{
  return(
    <div>
      <div className={props.style.header}>
        <div className="col">
        </div>
        <div className="col">
          <img src={Logo} className={props.style.img}></img>
        </div>
        <div className="col">
          <Modal text={props.textModal} headerImg={props.headerImgModal} tableImg={props.tableImgModal}/>
        </div>
      </div>      
      <div className={props.style.content}>
        <p className={props.style.text}>
          Estimadas y estimados integrantes,<br/><br/>
          Su opinión es valiosa para nosotros y queremos escucharlos,
          es por ello que les solicitamos completar la siguiente encuesta cuyo propósito es conocer su opinión y sugerencias a fin de tomar acciones de mejora continua.<br/>
          La encuesta no es obligatoria pero su participación es muy importante para construir entre todas y todos una mejor ONP.
        </p><br/>
        <p>¡Muchas gracias por su participación, su opinión es muy importante para la ONP!</p>
        <p className={props.style.footer}>Tiempo estimado: 8-10 min</p>
        <a
          className={props.style.link}
          href={props.link}
        >
        <button type="button" className={props.style.button}>Comenzar</button>
        </a>
      </div>
    </div>
  )
}

const Modal = (props) => {
  return (
    <div>

      <button type="button" className="btn btn-warning button-second" data-toggle="modal" data-target="#exampleModal">
        {props.text}{' '}
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
          <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
        </svg>
      </button>

      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <img src={Header} className={props.headerImg}/>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body App-modal">
              <div className="container-fluid text-justify">
                <div className="row">
                  <p>Las y los invitamos a contestar la siguiente encuesta de manera honesta y objetiva, teniendo en cuenta las siguientes indicaciones:</p>
                </div>
                <div className="row">
                  <p> <strong>1.</strong>	La encuesta estará disponible desde el <strong>martes 20 de octubre a las 8:00 Hs hasta el viernes 23 de octubre a las 20:00 Hs</strong>, a través de los siguientes canales de comunicación:</p>
                </div>
                <div className="row">
                  <ul>
                    <li>Orbi</li>
                    <li>Correo institucional</li>
                    <li>Buzón Te quiero Seguro</li>
                    <li>Conectados ONP</li>
                </ul>
                </div>
                <div className="row">
                  <p> <strong>2.</strong> Para brindarnos su opinión debe ingresar al siguiente <a className="App-link"
                        href="https://docs.google.com/forms/d/e/1FAIpQLScjJ6iUf_JR2lDAEIDuYvV0Miqx9KR3YJppHP_c7kNWLWMY2w/viewform?usp=sf_link">
                          link 
                    </a> ó escanear el código QR.
                  </p>
                </div>
                <div className="row">
                  <p> <strong>3.</strong>	La encuesta es anónima y de carácter confidencial.</p>
                </div>
                <div className="row">
                  <p> <strong>4.</strong>	Las respuestas a las preguntas 1 a 7, nos permitirán segmentar de acuerdo al órgano, área y/o equipo de trabajo, edad, género, tiempo de antigüedad y si tienen o no personas a su cargo.</p>
                </div>
                <div className="row">
                  <p> <strong>5.</strong>	Las preguntas 8 a la 68, contienen afirmaciones que describen su ambiente laboral desde diversos ámbitos, en cada una de ellas deberá evaluar del 1 al 5 dependiendo de su experiencia objetiva en su quehacer diario, considerando el desempeño de sus funciones, su jefa/e directo y las características generales de la ONP.</p>
                </div>
                <div className="row mx-auto">
                  <div className="col">
                    <img src={Table} className={props.tableImg}/>
                  </div>
                </div>
              </div>                      
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

function App() {
  const movileContent = {
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScjJ6iUf_JR2lDAEIDuYvV0Miqx9KR3YJppHP_c7kNWLWMY2w/viewform?usp=sf_link',
    style: {
      header: 'row header-margin-movile',
      content: 'movile-font',
      img: 'img-movile',
      text: 'text-justify',
      footer: 'info',
      link: 'App-link',
      button: 'btn btn-info btn-lg',
    },
    textModal:'',
    headerImgModal:'img-modal-movil',
    tableImgModal:'table-modal-movil'
  };

  const desktopContent= {
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScjJ6iUf_JR2lDAEIDuYvV0Miqx9KR3YJppHP_c7kNWLWMY2w/viewform?usp=sf_link',
    style: {
      header: 'row header-margin-desktop',
      content: 'desktop-font',
      img: 'img-desktop',
      text: 'text-justify',
      footer: 'info',
      link: 'App-link',
      button: 'btn btn-info btn-lg button-main',
    },
    textModal:'Instructivo',
    headerImgModal:'img-modal-desktop',
    tableImgModal:'table-modal-desktop'
  };

  return (
  <div className="text-center">
    <header className="App-header">
      <Media query="(max-width: 599px)" render={() =>
      (
        <Content
          style={movileContent.style}
          link={movileContent.link}
          textModal={movileContent.textModal}
          headerImgModal={movileContent.headerImgModal}
          tableImgModal={movileContent.tableImgModal}
        />
      )}
      />
      <Media query="(min-width: 600px)" render={() =>
      (
        <Content
          style={desktopContent.style}
          link={desktopContent.link}
          textModal={desktopContent.textModal}
          headerImgModal={desktopContent.headerImgModal}
          tableImgModal={desktopContent.tableImgModal}
        />
      )}
      />
    </header>

  </div>
  );
}

export default App;
