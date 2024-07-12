import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader/Loader';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { Listtasks } from './components/Listtasks/Listtasks';
import './App.css';

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);

  const createTask = async (task) => {
    try {
      const data = await axios.post('http://localhost:3000/tasks', task);
      setTasks([...tasks, data.data]);
      setError('');
    } catch (error) {
      setError('Error al agregar la tarea. Inténtalo de nuevo más tarde.');
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const readTask = async () => {
    setLoader(true);

    try {
      const data = await axios.get('http://localhost:3000/tasks');
      setTasks(data.data);
    } catch (error) {
      setError('Error al cargar las tareas. Inténtalo de nuevo más tarde.');
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    readTask();
  }, []);

  return (
    <section>
      <Header />
      {error && <p style={{ color: 'red', fontWeight: 'bold', fontSize: '20px' }}>{error}</p>}
      {loader && <Loader />}
      <Form createTask={createTask} />
      <Listtasks tasks={tasks} deleteTask={deleteTask} />
    </section>
  );
};
