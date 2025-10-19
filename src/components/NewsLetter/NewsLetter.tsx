import React from 'react';

const NewsLetter: React.FC = () => (
  <section className="newsletter-section bg-primary text-white py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h3>Підпишіться на розсилку</h3>
          <p className="mb-0">Отримуйте найсвіжіші статті прямо на вашу пошту</p>
        </div>
        <div className="col-lg-6">
          <form className="d-flex gap-2">
            <input type="email" className="form-control" placeholder="Ваш email"/>
            <button type="submit" className="btn btn-light">Підписатися</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default NewsLetter;