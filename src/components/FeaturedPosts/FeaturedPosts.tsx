import React from 'react';

const FeaturedPosts: React.FC = () => (
  <section id="featured-posts">
    <div className="container">
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="section-title">Популярні статті</h2>
          <p className="text-muted">Найцікавіше та найактуальніше</p>
        </div>
      </div>
      
      <div className="posts row g-4">
        {/* Featured Post 1 */}
        <div className="col-lg-4 col-md-6">
          <div className="card post-card h-100 border-0 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop" 
              className="card-img-top" 
              alt="Post Image"
            />
            <div className="card-body">
              <span className="badge bg-primary mb-2">Технології</span>
              <h5 className="card-title">Майбутнє штучного інтелекту</h5>
              <p className="card-text text-muted">Як AI змінює наш світ та що чекає нас у майбутньому...</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <i className="bi bi-calendar"></i> 15 січня, 2024
                </small>
                <a href="/blog" className="btn btn-outline-primary btn-sm">Читати</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Post 2 */}
        <div className="col-lg-4 col-md-6">
          <div className="card post-card h-100 border-0 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop" 
              className="card-img-top" 
              alt="Post Image"
            />
            <div className="card-body">
              <span className="badge bg-success mb-2">Здоров'я</span>
              <h5 className="card-title">Здоровий спосіб життя</h5>
              <p className="card-text text-muted">Сучасні підходи до здорового харчування та фізичної активності...</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <i className="bi bi-calendar"></i> 12 січня, 2024
                </small>
                <a href="/blog" className="btn btn-outline-primary btn-sm">Читати</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Post 3 */}
        <div className="col-lg-4 col-md-6">
          <div className="card post-card h-100 border-0 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=250&fit=crop" 
              className="card-img-top" 
              alt="Post Image"
            />
            <div className="card-body">
              <span className="badge bg-warning mb-2">Подорожі</span>
              <h5 className="card-title">Топ-10 місць для відпочинку</h5>
              <p className="card-text text-muted">Найкращі напрямки для незабутніх подорожей у 2024 році...</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <i className="bi bi-calendar"></i> 10 січня, 2024
                </small>
                <a href="/blog" className="btn btn-outline-primary btn-sm">Читати</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedPosts;