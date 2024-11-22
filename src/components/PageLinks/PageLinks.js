import PageLink from './PageLink'

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      <PageLink itemClass={itemClass} />
    </ul>
  )
}
export default PageLinks
