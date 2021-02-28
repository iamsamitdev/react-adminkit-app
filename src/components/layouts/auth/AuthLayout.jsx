const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="bg-info">
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
          {children}
        </div>
      </div>

    </>
  )
}

export default AuthLayout