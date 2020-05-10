import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

function useOutsideClickHandler(ref, handleClick) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      handleClick()
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideClickHandler(props) {
  const wrapperRef = useRef(null)
  useOutsideClickHandler(wrapperRef, props.handleClickOutside)

  return (
    <div className="OutsideClickHandler__wrapper" ref={wrapperRef}>
      {props.children}
    </div>
  )
}

OutsideClickHandler.propTypes = {
  children: PropTypes.element.isRequired,
  handleClickOutside: PropTypes.func.isRequired
}

export default OutsideClickHandler
