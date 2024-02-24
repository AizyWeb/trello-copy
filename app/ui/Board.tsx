'use client'

import NewCardForm from './forms/NewCardForm'
import styles from '../styles/board.module.css'
import Card from './Card'
import { TaskType } from '../lib/definitions'
import { useState } from 'react'

const defaultCards = [
  {
    id: 'asdf',
    index: 0,
    name: 'ToDo'
  },
  {
    id: 'qwerty',
    index: 1,
    name: 'In Progress'
  },
  {
    id: 'zxcv',
    index: 2,
    name: 'Done'
  }
]

const defaultTasks: TaskType[] = [
  {
    id: 'cualq',
    index: 0,
    name: 'task1',
    cardId: 'asdf'
  },
  {
    id: 'cualq3',
    index: 1,
    name: 'task5',
    cardId: 'asdf'
  },
  {
    id: 'cualq1',
    index: 0,
    name: 'task2',
    cardId: 'qwerty'
  },
  {
    id: 'cualq2',
    index: 0,
    name: 'task3',
    cardId: 'zxcv'
  }
]

export default function Board () {
  const [tasks, setTasks] = useState(defaultTasks)
  const [cards, setCards] = useState(defaultCards)
  return (
    <div className={styles.mainboard}>
      <span className={styles.cardscolumns}>
        {cards.map((card) => {
          return (
            <Card
              setTasks={setTasks}
              {...card}
              tasks={tasks
                .sort((a, b) => a.index - b.index)
                .filter(t => t.cardId === card.id)}
              key={card.id}
            />
          )
        })}
      </span>
      <NewCardForm />
    </div>
  )
}
