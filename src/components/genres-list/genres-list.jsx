import React, {memo} from 'react';
import {connect, useSelector} from 'react-redux';
import {genresListPropTypes} from '../../prop-types';
import {getGenresType, getGenre} from '../../store/films/selectors';
import {changeGenre, resetVisibleFilms} from '../../store/actions';

const GenresList = (props) => {
  const {genre, onGenreClick} = props;
  const genreList = useSelector(getGenresType());
  const handleGenreClick = (evt) => {
    evt.preventDefault();
    onGenreClick(evt.target.text);
  };

  return <>
    <ul className="catalog__genres-list">
      {genreList.map((tab, id) => {
        return (
          <React.Fragment key={`genre-item-${tab + id}`}>
            <li className={tab === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
              <a href="#" className="catalog__genres-link"
                onClick={handleGenreClick}>
                {tab}
              </a>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  </>;
};

GenresList.propTypes = genresListPropTypes;

const mapStateToProps = (state) => ({
  genre: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(resetVisibleFilms());
    dispatch(changeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(memo(GenresList, (prevProps, nextProps) => prevProps.genreList === nextProps.genreList));
