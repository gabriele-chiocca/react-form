import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const articles = ['Titolo 1', 'Titolo 2', 'Titolo 3'];
console.log(articles);

export default function App() {
  return (
    <>
      <div className="container text-center bg-white border border-dark ">
        {articles.map((article, index) => {
          return (
            <ul>
              <li>{article}</li>
            </ul>
          );
        })}
      </div>

      <div className="container mt-5">
        <form action="">
          <div>
            <label htmlFor="InputTitle">Titolo articolo</label>
            <input
              type="text"
              className="form-control"
              id="exampleTitle"
              placeholder="Inserisci Titolo Articolo"
            />
          </div>
        </form>
      </div>
    </>
  );
}
