import React from 'react';

const Categories: React.FC = () => (
  <section className="categories-section bg-light py-5">
    <div className="container">
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="section-title">Категорії</h2>
          <p className="text-muted">Оберіть теми, які вас цікавлять</p>
        </div>
      </div>
      
      <div className="row g-4">
        <div className="col-lg-3 col-md-6">
          <div className="category-card text-center p-4 bg-white rounded-3 shadow-sm">
            <i className="bi bi-laptop display-6 text-primary mb-3"></i>
            <h5>Технології</h5>
            <p className="text-muted">25 статей</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="category-card text-center p-4 bg-white rounded-3 shadow-sm">
            <i className="bi bi-heart display-6 text-danger mb-3"></i>
            <h5>Здоров'я</h5>
            <p className="text-muted">18 статей</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="category-card text-center p-4 bg-white rounded-3 shadow-sm">
            <i className="bi bi-airplane display-6 text-success mb-3"></i>
            <h5>Подорожі</h5>
            <p className="text-muted">15 статей</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="category-card text-center p-4 bg-white rounded-3 shadow-sm">
            <i className="bi bi-briefcase display-6 text-warning mb-3"></i>
            <h5>Бізнес</h5>
            <p className="text-muted">12 статей</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Categories;