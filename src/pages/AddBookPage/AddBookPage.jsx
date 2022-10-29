import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addBook } from 'redux/Books/booksSlice';
import { useDispatch } from 'react-redux';

export const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [img, setImg] = useState('');
  const [plot, setPlot] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'author':
        setAuthor(value);
        break;
      case 'img':
        setImg(value);
        break;
      case 'plot':
        setPlot(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newBook = { id: nanoid(), title, author, img, plot };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setImg('');
    setPlot('');
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            name="author"
            value={author}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <input type="url" name="img" value={img} onChange={handleChange} />
        </label>
        <label htmlFor="">
          <input type="text" name="plot" value={plot} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
};
