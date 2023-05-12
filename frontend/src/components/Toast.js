import React from "react";


const Toast = ({message}) => {
  return (
      <div className="position-fixed bottom-0 end-0 p-3">
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <strong className="me-auto">Input Error</strong>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body">
            {message}
          </div>
        </div>
      </div>

)
}

export default Toast
