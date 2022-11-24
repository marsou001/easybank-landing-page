import React from 'react'
import RequestInviteButton from '../../../shared/ui/RequestInviteButton'

function ThirdGroup() {
  return (
    <div className="third-group">
      <div className="text-center mb-6 md:text-right md:mb-14">
        <RequestInviteButton />
      </div>

      <div className="copyright-notice text-grayish-blue text-sm text-center md:text-right">
        <span>
          &copy; Easybank. All Rights Reserved
        </span>
      </div>
    </div>
  )
}

export default ThirdGroup