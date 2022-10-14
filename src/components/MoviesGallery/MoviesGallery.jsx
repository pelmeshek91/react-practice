export const MoviesGallery = ({ movies, deleteMovie }) => {
  return (
    <ul>
      {movies.map(({ id, title, votes }) => {
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>votes: {votes}</p>
            <button
              type="button"
              onClick={() => {
                deleteMovie(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
