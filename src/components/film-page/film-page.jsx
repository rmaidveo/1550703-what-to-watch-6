import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import Logo from '../logo/logo';
import {dataPropTypes} from '../../prop-types';
import FilmsList from '../films-list';
import {StarList} from '../../consts.js';
import {LOGO_FOOTER} from '../logo/const';

const FilmPage = (props) => {
  const {films} = props;
  const {id: filmId} = props.match.params;
  const film = films.find((item) => item.id === parseInt(filmId, 10));
  const history = useHistory();
  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo></Logo>
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={() => history.push(`../player/${film.id}`)} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <button onClick={() => history.push(`${film.id}/review`)} className="btn movie-card__button">Add review</button>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.imageSrc} alt={film.name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{film.rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">Very good</span>
                  <span className="movie-rating__count">{film.scoresCount + ` ratings`}</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{film.description}</p>
                <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>
                <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
                <p className="movie-card__starring"><strong>Starring: {film.starring.slice(StarList.MIN, StarList.MAX).join(`, `)} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={films}/>
        </section>
        <footer className="page-footer">
          <Logo className={LOGO_FOOTER}></Logo>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

FilmPage.propTypes = {
  films: dataPropTypes,
  match: PropTypes.object
};
export default FilmPage;
