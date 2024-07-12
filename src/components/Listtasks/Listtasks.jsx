
import './Listtasks.css';

export const Listtasks = ({ tasks, deleteTask }) => {
  return (
    <section className="tasks-section">
      <h2>Tareas</h2>
      {tasks.length === 0 ? (
        <p className="no-tasks">No hay ninguna tarea registrada</p>
      ) : (
        <ul className="tasks-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span className="task-text">{task.name} - {task.author}</span>
              <button className="delete-button" onClick={() => deleteTask(task.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
