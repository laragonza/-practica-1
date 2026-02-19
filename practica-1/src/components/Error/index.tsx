import React from 'react'

export const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return <div className="error">Error: {message}</div>
}

export default ErrorMessage
