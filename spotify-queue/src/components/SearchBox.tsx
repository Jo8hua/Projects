// components/SearchBox.tsx
'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        style={{ padding: '10px', width: '200px' }}
      />
      <button type="submit" style={{ padding: '10px' }}>Search</button>
    </form>
  );
};

export default SearchBox;
