import styles from '../styles/tasks.module.css'
import { CardProps, TaskType } from '../lib/definitions'
import { ReactSortable } from 'react-sortablejs'

export default function Card ({ id, index, name, tasks, setTasks }: CardProps) {
  function setTasksInCards (sortedTasks: TaskType[], newCardId: string) {
    setTasks((prevTasks: TaskType[]) => {
      const newTasks = [...prevTasks]
      sortedTasks.forEach((sortedTask: TaskType, newIndex: number) => {
        const foundTask = newTasks.find(newTask => newTask.id === sortedTask.id)
        if (foundTask) {
          foundTask.index = newIndex
          foundTask.cardId = newCardId
        }
      })
      return newTasks
    })
  }
  return (
    <div key={id}>
      {name}
      <ReactSortable
        list={tasks}
        setList={tasks => setTasksInCards(tasks, id)}
        group='tasks'
        ghostClass={styles.ghosttask}
      >
        {tasks.map((task) => {
          return (
            <div key={task.id} className={styles.tasks}>
              <span>{task.name}</span>
            </div>
          )
        })}
      </ReactSortable>
    </div>
  )
}
