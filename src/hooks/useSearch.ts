import { useState } from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import { IContact } from '../types/contact';

const useSearch = () => {
  const { contacts } = useTypedSelector((state) => state.contacts);
  const [query, setQuery] = useState('');

  const runSearch = (): IContact[] => {
    return [
      ...contacts.filter((contact) => contact.name.includes(query.trim())),
    ];
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return { runSearch, searchHandler };
};

export default useSearch;
