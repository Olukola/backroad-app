import { navLinks } from '../../data'

const PageLink = ({ itemClass }) => {
  return (
    <>
      {navLinks.map(({ id, href, text }) => {
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        )
      })}
    </>
  )
}
export default PageLink
