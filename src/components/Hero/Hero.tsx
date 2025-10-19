import React from 'react';

const Hero: React.FC = () => (
  <section className="hero-section bg-primary text-white py-5 mt-5">
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6" style={{maxWidth:"565px"}}>
          <h1 className="display-4 fw-bold mb-4">Ласкаво просимо до ModernBlog</h1>
          <p className="lead mb-4">Твій простір для натхнення, знань та креативних ідей</p>
          <a href="#featured-posts" className="btn btn-light btn-lg">Читати статті</a>
        </div>
        <div className="col-lg-6">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Hero Image" 
            className="img-fluid rounded-3 shadow"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;