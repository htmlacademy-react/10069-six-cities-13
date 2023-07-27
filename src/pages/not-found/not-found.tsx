import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';

function NotFound(): JSX.Element {

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Ошибка 404</h1>
            <p><b>Страница не найдена</b></p>
            <Link to="/">Вернуться на главную</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
