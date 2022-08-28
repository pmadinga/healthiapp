import React from 'react';
import styles from '../assets/styles/Search.component.module.css'

const SearchComponent = () => {
  
  return (
    <div>
      <form className={styles.form}>
        <input 
          type="text" 
          className={styles.search_input} 
          placeholder={'What\'s on your fridge?'}
        />
        <button 
          type="submit" 
          className={styles.search_btn}>
            Search
          </button>
      </form>
    </div>
  );
}

export default SearchComponent;
