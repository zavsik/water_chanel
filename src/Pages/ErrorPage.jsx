import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Уупс!</h1>
      <p>Извините, но такой страницы нет.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}