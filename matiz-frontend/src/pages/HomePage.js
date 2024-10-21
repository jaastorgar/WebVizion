import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Bienvenido a Matiz Vizion</h1>

      {/* Sección del Blog Informativo */}
      <section className="section">
        <h2>Blog Informativo</h2>
        <p>Lee nuestros últimos artículos sobre el cuidado visual.</p>
      </section>

      {/* Sección de Testimonios */}
      <section className="section">
        <h2>Testimonios de Clientes</h2>
        <p>Descubre lo que dicen nuestros clientes sobre Matiz Vizion.</p>
      </section>

      {/* Sección de Contacto */}
      <section className="section">
        <h2>Contacto</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Tu correo" />
          </div>
          <div className="form-group">
            <label>Mensaje:</label>
            <textarea placeholder="Escribe tu mensaje"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;