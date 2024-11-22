import SocialLink from './SocialLink'

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      <SocialLink itemClass={itemClass} />
    </ul>
  )
}

export default SocialLinks
