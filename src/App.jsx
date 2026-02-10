import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const articles = ['Titolo 1', 'Titolo 2', 'Titolo 3'];
console.log(articles);

export default function App() {
  return (
    <>
      <div className="container">
        <h1>Lista Articoli</h1>
        <div className=" text-center bg-white border border-dark ">
          {articles.map((article, index) => {
            return (
              <ul>
                <li>{article}</li>
              </ul>
            );
          })}
        </div>
        <hr />
      </div>

      <div className="container mt-5">
        <form action="" className="">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient’s username"
              aria-label="Recipient’s username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
