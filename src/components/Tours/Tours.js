import Tour from './Tour'
import Title from '../Title'
import { tours } from '../../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title heading="featured" subHeading="tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />
        })}
      </div>
    </section>
  )
}
export default Tours
