import Head from 'next/head'
import { get, useForm } from 'react-hook-form';
import HeadlineComponent from '../components/Headline.component'
import ResultsComponent from '../components/Results.component'
import styles from '../assets/styles/Home.module.css'
import { useState, useEffect } from 'react';


export default function Home() {
  const { register, handleSubmit } = useForm()
  const [ recipes, setRecipes] = useState([])
  const [search, setSearch] = useState();

  useEffect(() => {
    getRecipes(search)
  }, [search])
  const getRecipes = async  ( q ) =>{
    const api = await fetch(`https://api.edamam.com/search?q=${q}&app_id=1dfb9c0e&app_key=1e7933354bd3641b8b479a494520a21d`)
    const data = await api.json();
    setRecipes(data.hits);
  }
  const updateSearch = data =>{
    console.log(data.food);
    setSearch(data.food)
  }
  return (
    <>
      <Head>
        <title>HealthiApp | Home</title>
      </Head>
      <HeadlineComponent/>
      <div>
        <form className={styles.form} onSubmit={handleSubmit(updateSearch)}>
          <input 
            type="text" 
            className={styles.search_input} 
            placeholder={'What\'s on your fridge?'}
            {...register('food')}
          />
          <button 
            type="submit" 
            className={styles.search_btn}>
              Search
            </button>
        </form>
      </div>

    </>
  )
}
// let q = 'eggs'
// export const getStaticProps = async () => {
//   const res = await fetch(`https://api.edamam.com/search?q=${q}&app_id=1dfb9c0e&app_key=1e7933354bd3641b8b479a494520a21d`);
//   const data = await res.json();
//   return {
//       props: {recipes: data.hits}
//   };
// };