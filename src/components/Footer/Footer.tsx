import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-dark text-white py-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mb-4 mb-lg-0">
          <h5 className="fw-bold">ModernBlog</h5>
          <p>Ваш провідник у світі знань та натхнення.</p>
          <div className="social-links">
            <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6>Навігація</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white-50 text-decoration-none">Головна</a></li>
            <li><a href="/about" className="text-white-50 text-decoration-none">Про нас</a></li>
            <li><a href="/blog" className="text-white-50 text-decoration-none">Блог</a></li>
            <li><a href="/contact" className="text-white-50 text-decoration-none">Контакти</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h6>Категорії</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white-50 text-decoration-none">Технології</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Здоров'я</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Подорожі</a></li>
            <li><a href="#" className="text-white-50 text-decoration-none">Бізнес</a></li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h6>Контакти</h6>
          <ul className="list-unstyled text-white-50">
            <li><i className="bi bi-envelope me-2"></i> info@modernblog.com</li>
            <li><i className="bi bi-telephone me-2"></i> +380 12 345 6789</li>
            <li><i className="bi bi-geo-alt me-2"></i> Київ, Україна</li>
          </ul>
        </div>
      </div>
      <hr className="my-4"/>
      <div className="row align-items-center">
        <div className="col-md-6">
          <p className="mb-0">&copy; 2024 ModernBlog. Всі права захищені.</p>
        </div>
        <div className="col-md-6 text-md-end">
          <a href="#" className="text-white-50 text-decoration-none me-3">Політика конфіденційності</a>
          <a href="#" className="text-white-50 text-decoration-none">Умови використання</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;