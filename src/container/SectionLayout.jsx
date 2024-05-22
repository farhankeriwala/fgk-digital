import PropTypes from 'prop-types'

const SectionLayout = ({children}) => {
  return (
    <div className='my-8 py-8 px-16 sm:px-20 md:px-28 lg:px-32'>
        {
            children
        }
    </div>
  )
}

SectionLayout.propTypes = {
    children: PropTypes.element.isRequired
}

export default SectionLayout