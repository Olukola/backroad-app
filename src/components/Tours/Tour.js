const Tour = (tour) => {
  const { src, date, title, description, location, duration, price } = tour
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={src} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{' '}
            {location}
          </p>
          <p>{duration}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  )
}
export default Tour
