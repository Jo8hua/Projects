// pages/index.tsx
'use client';

import { useState } from 'react';
import SearchBox from '../components/SearchBox';
import styles from "./page.module.css";

const Home: React.FC = () => {
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    const items = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
    const filteredResults = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    setResults(filteredResults);
  };

  return (
    <div className={styles.main}>
      <h1>Next.js Search Box</h1>
      <SearchBox onSearch={handleSearch} />
      {/* <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
