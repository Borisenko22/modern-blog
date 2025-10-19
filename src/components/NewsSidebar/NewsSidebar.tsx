import React from 'react';

const NewsSidebar: React.FC = () => {
  return (
    <aside className="news-sidebar">
      {/* News Widget */}
      <div className="sidebar-widget bg-white rounded-3 shadow-sm p-4 mb-4">
        <h4 className="widget-title mb-3">
          <i className="bi bi-newspaper me-2 text-primary"></i>
          Останні новини
        </h4>
        
        <div className="news-list">
          {/* News Item 1 */}
          <div className="news-item border-bottom pb-3">
            <div className="d-flex align-items-start">
              <span className="badge bg-primary me-2">Tech</span>
              <div className="flex-grow-1">
                <h6 className="news-title mb-1">Штучний інтелект у медицині</h6>
                <p className="news-excerpt text-muted small mb-2">
                  Нові дослідження показують вражаючі результати використання AI в діагностиці...
                </p>
                <small className="text-muted">
                  <i className="bi bi-clock me-1"></i> 2 години тому
                </small>
              </div>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="news-item border-bottom py-3">
            <div className="d-flex align-items-start">
              <span className="badge bg-success me-2">Eco</span>
              <div className="flex-grow-1">
                <h6 className="news-title mb-1">Відновлювальна енергетика</h6>
                <p className="news-excerpt text-muted small mb-2">
                  Україна збільшує інвестиції в сонячну енергію на 40% цього року...
                </p>
                <small className="text-muted">
                  <i className="bi bi-clock me-1"></i> 5 годин тому
                </small>
              </div>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="news-item border-bottom py-3">
            <div className="d-flex align-items-start">
              <span className="badge bg-warning me-2">Biz</span>
              <div className="flex-grow-1">
                <h6 className="news-title mb-1">IT ринок України</h6>
                <p className="news-excerpt text-muted small mb-2">
                  Зростання на 15% попри складні умови, експорти послуг зростають...
                </p>
                <small className="text-muted">
                  <i className="bi bi-clock me-1"></i> Вчора
                </small>
              </div>
            </div>
          </div>

          {/* News Item 4 */}
          <div className="news-item pt-3">
            <div className="d-flex align-items-start">
              <span className="badge bg-info me-2">Dev</span>
              <div className="flex-grow-1">
                <h6 className="news-title mb-1">React 18 новини</h6>
                <p className="news-excerpt text-muted small mb-2">
                  Оновлення приносить покращену продуктивність та нові хуки...
                </p>
                <small className="text-muted">
                  <i className="bi bi-clock me-1"></i> 2 дні тому
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-3 pt-2 border-top">
          <button className="btn btn-outline-primary btn-sm">
            <i className="bi bi-arrow-right me-1"></i>
            Всі новини
          </button>
        </div>
      </div>

      {/* Tags Widget - окремий блок */}
      <div className="sidebar-widget bg-white rounded-3 shadow-sm p-4">
        <h5 className="widget-title mb-3">
          <i className="bi bi-tags me-2 text-success"></i>
          Популярні теги
        </h5>
        <div className="tags-container">
          <span className="badge bg-light text-dark me-2 mb-2">React</span>
          <span className="badge bg-light text-dark me-2 mb-2">TypeScript</span>
          <span className="badge bg-light text-dark me-2 mb-2">Bootstrap</span>
          <span className="badge bg-light text-dark me-2 mb-2">Web Development</span>
          <span className="badge bg-light text-dark me-2 mb-2">UI/UX</span>
          <span className="badge bg-light text-dark me-2 mb-2">JavaScript</span>
          <span className="badge bg-light text-dark me-2 mb-2">CSS</span>
          <span className="badge bg-light text-dark me-2 mb-2">HTML</span>
          <span className="badge bg-light text-dark me-2 mb-2">Frontend</span>
          <span className="badge bg-light text-dark me-2 mb-2">Backend</span>
        </div>
      </div>
    </aside>
  );
};

export default NewsSidebar;