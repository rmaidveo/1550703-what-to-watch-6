import React from 'react';
import FilmCard from '../film-card/film-card';
import {filmListPropTypes} from '../../prop-types';

const FilmsList = (props) => {
  const [activeFilm, setActiveFilm] = React.useState(0);
  const {films} = props;
  const onMouseEnter = (id) => {
    setActiveFilm(id);
  };

  return (
    <div className="catalog__movies-list" data-testid="film-card-list">
      {films.map((film) =>
        <FilmCard key={`film-card-${film.id}`} film={film} activeFilm={activeFilm} onMouseEnter={()=>onMouseEnter(film.id)} />
      )}
    </div>
  );
};

FilmsList.propTypes = {
  films: filmListPropTypes
};
export default React.memo(FilmsList);
