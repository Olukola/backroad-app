import Title from '../Title'
import Service from './Service'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title heading="our" subHeading="services" />
      <div className="section-center services-center">
        <Service />
      </div>
    </section>
  )
}
export default Services
