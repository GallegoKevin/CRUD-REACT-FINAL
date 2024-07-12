import { useState } from 'react';
import './Form.css';

export const Form = ({ createTask }) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    createTask({ name, author, date });
    resetFields();
  };

  const resetFields = () => {
    setName('');
    setAuthor('');
    setDate('');
  };

  return (
    <section className="form-section">
      <div className="form-header">
        <h2>Ingresar Tarea</h2>
      </div>
      <div className="form-group">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre" />

      </div>
      <div className="form-group">
        <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author" />
      </div>
      <div className="form-group">
        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
      </div>
      <div className="form-group">
        <button className="submit-button" disabled={!name || !author} type="button" onClick={handleSubmit}>
          Agregar Tarea
        </button>
      </div>
    </section>
  );
};