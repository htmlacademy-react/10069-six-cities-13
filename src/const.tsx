export const Setting = {
  PlacesCount: 312,
  PlacesOnPage: 5,
};

export const AppRoute = {
  Favorites: '/favorites',
  Login: '/login',
  Main: '/',
  Offer: '/offer/:id'
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
