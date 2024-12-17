import React, { useEffect, useState } from 'react';
import {
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaLaptopCode,
  FaSun,
  FaMoon,
  FaDownload,
} from 'react-icons/fa';
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.5s ease-in-out';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
      // Full-screen image on click
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const img = card.querySelector('img');
        if (img) {
          const overlay = document.createElement('div');
          overlay.style.position = 'fixed';
          overlay.style.top = '0';
          overlay.style.left = '0';
          overlay.style.width = '100%';
          overlay.style.height = '100%';
          overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          overlay.style.display = 'flex';
          overlay.style.justifyContent = 'center';
          overlay.style.alignItems = 'center';
          overlay.style.zIndex = '1000';
          overlay.style.transition = 'opacity 0.5s ease';

          const fullImage = document.createElement('img');
          fullImage.src = img.src;
          fullImage.style.maxWidth = '90%';
          fullImage.style.maxHeight = '90%';
          fullImage.style.borderRadius = '10px';
          fullImage.style.boxShadow = '0px 4px 20px rgba(255, 255, 255, 0.5)';

          overlay.appendChild(fullImage);

          // Add close button
          const closeButton = document.createElement('button');
          closeButton.innerHTML = '&times;';
          closeButton.style.position = 'absolute';
          closeButton.style.top = '20px';
          closeButton.style.right = '20px';
          closeButton.style.padding = '10px 20px';
          closeButton.style.fontSize = '24px';
          closeButton.style.backgroundColor = 'transparent';
          closeButton.style.color = 'white';
          closeButton.style.border = 'none';
          closeButton.style.cursor = 'pointer';
          closeButton.style.borderRadius = '5px';
          closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            if (document.body.contains(overlay)) {
              document.body.removeChild(overlay);
            }
          });
          overlay.appendChild(closeButton);

          // Add click event to overlay to close on click outside image
          overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
              if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
              }
            }
          });

          document.body.appendChild(overlay);
        }
      });
    });
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.transition =
      'background-color 0.5s ease, color 0.5s ease';
    document.body.style.backgroundColor = darkMode ? '#fff' : '#333';
    document.body.style.color = darkMode ? '#000' : '#fff';
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  };

  const headerStyle = {
    backgroundColor: darkMode ? '#333' : '#007bff',
    color: 'white',
    padding: '40px',
    textAlign: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '300',
  };

  const sectionStyle = {
    padding: '40px 0',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    marginBottom: '20px',
    transition: 'transform 0.5s ease-in-out',
    textAlign: 'center',
  };

  const cardImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    maxWidth: '300px',
    margin: '0 auto',
  };

  const cardBodyStyle = {
    padding: '20px',
  };

  const footerStyle = {
    backgroundColor: darkMode ? '#333' : '#007bff',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    marginTop: '40px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: 'right', padding: '10px' }}>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: darkMode ? '#fff' : '#000',
            fontSize: '24px',
            transition: 'color 0.3s ease',
          }}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <header style={headerStyle} className="gradient-effect">
        <h1 style={titleStyle}>Eric Cesar Da Silva Junior</h1>
        <p style={subtitleStyle}>
          <FaLaptopCode /> Analista de Suporte | Graduado em Análise e
          Desenvolvimento de Sistemas
        </p>
        <p style={subtitleStyle}> (19) 98322-4023 | eric.faria2003@gmail.com</p>
      </header>

      <section id="about" style={sectionStyle}>
        <div style={containerStyle}>
          <h2
            style={{
              textAlign: 'center',
              color: '#007bff',
              marginBottom: '40px',
            }}
          >
            Sobre Mim
          </h2>
          <div
            className="row profile-section"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div
              className="col-md-6"
              style={{ flex: '1', textAlign: 'center' }}
            >
              <img
                src="img/eric-profile.jpg"
                className="profile-img"
                style={{
                  borderRadius: '50%',
                  width: '100%',
                  maxWidth: '300px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                }}
                alt="Foto de Eric Cesar Da Silva Junior"
              />
            </div>
            <div className="col-md-6" style={{ flex: '2', textAlign: 'left' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Sou um profissional apaixonado por tecnologia, com formação em
                Análise e Desenvolvimento de Sistemas e atualmente cursando
                Desenvolvimento de Software Multiplataforma na Fatec. Durante
                minha carreira, adquiri uma sólida base em infraestrutura de
                redes e resolução de problemas técnicos, além de desenvolver
                habilidades em diversas tecnologias de software.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Estou em busca de oportunidades na área de tecnologia, seja em
                Suporte, TI ou Desenvolvimento de Software. Tenho experiência em
                suporte de N1 e N2, infraestrutura e redes de computadores, e
                participei de projetos de desenvolvimento web com foco em
                Laravel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={{ textAlign: 'center', color: '#007bff' }}>
            Meu Portfólio
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '50px' }}>
            (Clique nas imagens para visualizar em tela cheia)
          </p>
          <Slider {...sliderSettings}>
            <div className="card" style={cardStyle}>
              <img
                src="img/Projeto-Nexus.png"
                style={cardImageStyle}
                alt="Projeto Website Nexus"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>Website Nexus</h5>
                <p>
                  Projeto de website para empresa de tecnologia feito com
                  Bootstrap e Laravel.
                </p>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <img
                src="img/mikrotik.png"
                style={cardImageStyle}
                alt="Configurações Mikrotik"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>
                  Configurações de Rede Mikrotik
                </h5>
                <p>
                  Configuração de equipamentos de rede com Mikrotik para
                  solucionar e implementar uma conexão de qualidade.
                </p>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <img
                src="img/smartgrow.jpg"
                style={cardImageStyle}
                alt="Configurações Mikrotik"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>
                  Sistema integrado de estufa inteligente
                </h5>
                <p>
                  Projeto feito em Laravel e Bootstrap com integração a IOT,
                  monitoramento e armazenamento de dados, consumo de API e
                  exibição de relatórios
                </p>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <img
                src="img/crimpagem.jpg"
                style={cardImageStyle}
                alt="AURUS ERP"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>
                  Crimpagem de cabos e Infraestrutura
                </h5>
                <p>
                  Crimpagem de cabos Cat e boas práticas no gerenciamento da
                  infraestrutura.
                </p>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <img
                src="img/Aurus-ERP.png"
                style={cardImageStyle}
                alt="AURUS ERP"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>Aurus ERP</h5>
                <p>
                  Projeto de sistema ERP para gestão geral, feito com react no
                  Front-end e Laravel no Back-end.
                </p>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <img
                src="img/bd.png"
                style={cardImageStyle}
                alt="Manutenção de Computadores"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>
                  Criação e consultas em Banco de dados MySQL
                </h5>
                <p>Análise e manuseio de dados.</p>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <img
                src="img/websiteterapiasorientais.png"
                style={cardImageStyle}
                alt="Website De agendmaneto"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>
                  Projeto Website de agendamentos de serviços, feito com
                  Bootstrap e Laravel.
                </h5>
                <p>Criado com Laravel e Bootstrap</p>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <img
                src="img/pc-limp.jpg"
                style={cardImageStyle}
                alt="Manutenção de Computadores"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>
                  Manutenção de Computadores
                </h5>
                <p>Formatação, Limpeza, Montagem e cuidados gerais.</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section id="certificados" style={sectionStyle}>
        <div style={containerStyle}>
          <h2
            style={{
              textAlign: 'center',
              color: '#007bff',
              marginBottom: '40px',
            }}
          >
            Certificados
          </h2>
          <Slider {...sliderSettings}>
            <div className="card" style={cardStyle}>
              <img
                src="img/Diploma-Faculdade.png"
                style={cardImageStyle}
                alt="Certificado Curso ADS"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>Certificado Faculdade</h5>
                <p>
                  Certificado de conclusão de graduação de Análise e
                  Desenvolvimento de Sistemas.
                </p>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <img
                src="img/js-certificado.png"
                style={cardImageStyle}
                alt="Certificado Curso JavaScript"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>Curso JavaScript</h5>
                <p>Certificado de conclusão do curso de JavaScript.</p>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <img
                src="img/certificado-aws.png"
                style={cardImageStyle}
                alt="Certificado Curso AWS"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>AWS Cloud Practitioner</h5>
                <p>
                  Certificado de conclusão do curso de AWS Cloud Practitioner.
                </p>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <img
                src="img/suporteeseguranca.png"
                style={cardImageStyle}
                alt="Certificado Curso Network Support"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>
                  Network Support and Security
                </h5>
                <p>
                  Certificado de conclusão do curso de Network Support and
                  Security.
                </p>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <img
                src="img/Curso-Desenvolvedor-Front-End-CPS.png"
                style={cardImageStyle}
                alt="Certificado Curso Front-End"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>
                  Desenvolvedor Front-End
                </h5>
                <p>Certificado de reconhecimento adquirido na Fatec.</p>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <img
                src="img/Imersão-Mikrotik.png"
                style={cardImageStyle}
                alt="Certificado Curso Mikrotik"
              />
              <div style={cardBodyStyle}>
                <h5 style={{ marginBottom: '15px' }}>Imersão Mikrotik</h5>
                <p>Certificado de conclusão do curso de Imersão Mikrotik.</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section
        id="curriculo"
        style={{
          ...sectionStyle,
          backgroundColor: darkMode ? '#2c2c2c' : '#f0f4f8',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <div style={containerStyle} className="text-center">
          <h2
            style={{
              color: '#007bff',
              marginBottom: '20px',
              fontSize: '2rem',
              fontWeight: '600',
            }}
          >
            Currículo
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              marginBottom: '30px',
              lineHeight: '1.6',
              color: darkMode ? '#e0e0e0' : '#000',
            }}
          >
            Abaixo você pode visualizar ou baixar meu currículo completo.
            Sinta-se à vontade para entrar em contato se precisar de mais
            informações.
          </p>
          <a
            href="doc/Eric Cesar da Silva Junior editavel.pdf"
            style={{
              ...buttonStyle,
              backgroundColor: darkMode ? '#007bff' : '#0056b3',
              color: '#fff',
              padding: '10px 20px', // Mantive o padding para um tamanho agradável
              width: '200px', // Define uma largura fixa para reduzir o tamanho horizontalmente
              display: 'inline-block', // Isso garante que a largura seja aplicada corretamente
              textAlign: 'center', // Para manter o texto centralizado
              transition: 'transform 0.3s ease', // Adiciona uma transição para a escala
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = darkMode ? '#0056b3' : '#004494';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = darkMode ? '#007bff' : '#0056b3';
              e.target.style.transform = 'scale(1)';
            }}
            download
          >
            Baixar Currículo (PDF) <FaDownload style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>

      <section id="contact" style={sectionStyle}>
        <div style={containerStyle} className="text-center">
          <h2
            style={{
              color: '#007bff',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            Contato
          </h2>
          <p style={{ textAlign: 'center' }}>
            Entre em contato comigo através das redes sociais ou e-mail:
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://www.linkedin.com/in/ericf12/"
              style={{
                display: 'inline-block',
                fontSize: '2.5rem',
                color: '#0077b5',
              }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/19983224023"
              style={{
                display: 'inline-block',
                fontSize: '2.5rem',
                color: '#25D366',
              }}
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/faria_eric"
              style={{
                display: 'inline-block',
                fontSize: '2.5rem',
                color: '#E1306C',
              }}
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:eric.faria2003@gmail.com"
              style={{
                display: 'inline-block',
                fontSize: '2.5rem',
                color: '#D44638',
              }}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      <div
        className="whatsapp-float"
        onClick={() => window.open('https://wa.me/19983224023', '_blank')}
      >
        <FaWhatsapp size={30} />
      </div>

      <footer style={footerStyle} className="gradient-effect">
        <p>
          &copy; 2024 - Eric Cesar Da Silva Junior. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
