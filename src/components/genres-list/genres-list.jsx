import React from 'react';
import {connect} from 'react-redux';
import {genresListPropTypes} from '../../prop-types';
import {getGenresType, getGenre} from '../../store/films/selectors';
import {changeGenre} from '../../store/actions';

const GenresList = (props) => {
  const {genreList, genre, onGenreClick} = props;

  const handleGenreClick = (evt) => {
    evt.preventDefault();
    onGenreClick(evt.target.text);
  };

  return <>
    <ul className="catalog__genres-list">
      {genreList.map((tab, id) => {
        return (
          <React.Fragment key={tab + id}>
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
  genreList: getGenresType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(changeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
