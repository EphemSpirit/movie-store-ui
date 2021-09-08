import Navigation from './components/UI/Navigation';
import Movies from './components/Movies/Movies';

function App() {

  const DUMMY_MOVIES = [
    {
      id: 1,
      title: "Movie One",
      director: "Director One",
      description: "Description One",
      rating: 5
    },
    {
      id: 2,
      title: "Movie Two",
      director: "Director Two",
      description: "Description Two",
      rating: 5
    },
    {
      id: 3,
      title: "Movie Three",
      director: "Director Three",
      description: "Description Three",
      rating: 5
    },
    {
      id: 4,
      title: "Movie Four",
      director: "Director Four",
      description: "Description Four",
      rating: 5
    },
    
  ]

  return (
    <>
      <Navigation />
      <Movies movies={DUMMY_MOVIES} />
    </>
  );
}

export default App;
