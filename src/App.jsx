import { useState } from 'react';

const articles = ['Titolo 1', 'Titolo 2', 'Titolo 3'];
console.log(articles);

const handleFormSubmit = (e) => {
  e.preventDefault();
};

const handleNewArticle = (e) => setNewArticle(e.target.value);

export default function App() {
  const [newArticle, setNewArticle] = useState('');
  return (
    <>
      <div className="container">
        <h1>Lista Articoli</h1>
        <div className="">
          <ul className="my-3">
            {articles.map((article, index) => {
              return <li>{article}</li>;
            })}
          </ul>
        </div>
        <hr />
      </div>

      <div className="container mt-5">
        <form onSubmit={handleFormSubmit} action="" className="">
          <div className="input-group mb-3">
            <input
              value={newArticle}
              onChange={handleNewArticle}
              type="text"
              className="form-control"
              placeholder="Inserisci il titolo"
              aria-label="Recipient’s username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
            >
              Aggiungi Titolo
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
