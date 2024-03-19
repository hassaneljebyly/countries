import { useRouteError, Link } from 'react-router-dom';

export default function ErrorElement() {
  const error = useRouteError();

  return (
    <div
      className="error-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <br />
      <Link
        style={{
          color: 'inherit',
          fontWeight: 'bold',
        }}
        to={'/countries'}
      >
        Go back to home page
      </Link>
    </div>
  );
}
