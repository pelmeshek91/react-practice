import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperation';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { Head, SubHead, Container } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="top-center" />
      <Container>
        <Head>Phonebook</Head>
        <ContactForm />
        <SubHead>Contacts</SubHead>
        <SearchFilter />
        <ContactList />
      </Container>
    </>
  );
};
