const StarList = {
  MIN: 0,
  MAX: 3
};
const GeneresCount = {
  MIN: 0,
  MAX: 9,
};
const RATING_STARS = 10;
const FILMS_COUNT = 8;
const FILMS_COUNT_FILM_PAGE = 4;
const TIME = 60;
const TabsTypes = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};
const RouteType = {
  INDEX: `/`,
  LOGIN: `/login`,
  LOG_OUT: `/logout`,
  USER_LIST: `/mylist`,
  PLAYER: `/player/:id?`,
  REVIEW: `/films/:id?/review`,
  FILM_PAGE: `/films/:id?`
};
const APIRoute = {
  INDEX: `/`,
  LOGIN: `/login`,
  LOG_OUT: `/logout`,
  USER_LIST: `/favorite`,
  PROMO_FILM: `/films/promo`,
  FILMS: `/films`,
  COMMENTS: `/comments`
};
const BACKEND_URL = `https://6.react.pages.academy/wtw`;
const GENERE_ALL = `All genres`;
const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};
const TextArea = {
  MIN: 40,
  MAX: 400
};
const RatingScale = {
  MIN: 3,
  NORMAL: 5,
  GOOD: 8,
  AWESOME: 10
};
const RatingTitle = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very Good`,
  AWESOME: `Awesome`
};
export {
  RATING_STARS,
  BACKEND_URL,
  StarList,
  TabsTypes,
  RouteType,
  GENERE_ALL,
  GeneresCount,
  FILMS_COUNT,
  FILMS_COUNT_FILM_PAGE,
  AuthorizationStatus,
  TextArea,
  APIRoute,
  RatingScale,
  TIME,
  RatingTitle
};
