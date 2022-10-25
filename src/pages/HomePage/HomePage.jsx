import { useSelector } from 'react-redux';
import { selectBooks } from 'redux/Books/booksSelect';
import { useDispatch } from 'react-redux';
import { deleteBook } from 'redux/Books/booksAction';

export const HomePage = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();
  return (
    <ul>
      {books.map(({ title, author, img, plot, id }) => (
        <li key={id}>
          <h2>{title}</h2>
          <p>{author}</p>
          <img src={img} alt={title} />
          <p>{plot}</p>
          <button type="button" onClick={() => dispatch(deleteBook(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
