import Main from '../../pages/main/main';

type AppProps = {
  placesCount: number;
  placesOnPage: number;
}

function App({placesCount, placesOnPage}: AppProps): JSX.Element {
  return (
    <Main
      placesCount = { placesCount }
      placesOnPage = { placesOnPage }
    />
  );
}

export default App;
