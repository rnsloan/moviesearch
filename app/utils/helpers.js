import moment from 'moment';

export function formatReleaseDate(original) {
  return moment(original).format('Do MMMM YYYY');
}

export function setBackdropPath(rootBackdropPath, backdropPath) {
  if (backdropPath === null) {
    return {backgroundImage: 'none', height: '70px'};
  } else {
    return {backgroundImage: `url(${rootBackdropPath}${backdropPath})`};
  }
}