import React from 'react';

const Header: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand fw-bold" href="/">
        <i className="bi bi-pen me-2"></i> ModernBlog
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/">Головна</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">Про нас</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blog">Блог</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Контакти</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Пошук..."/>
          <button className="btn btn-outline-light" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
);

export default Header;