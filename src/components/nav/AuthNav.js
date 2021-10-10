import logo from '../../logo.svg'

export const AuthNav = () => {
  return (
    <header className="m-auto md:my-10">
      <img
        style={{ width: '150px' }}
        className="m-auto"
        src={logo}
        alt="Game Night Logo"
      />
    </header>
  )
}
