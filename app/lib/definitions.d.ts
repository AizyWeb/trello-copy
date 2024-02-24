import { SetStateAction } from 'react'

export type Card = {
    title: string
    description: string
    tasks: string[]
    priority: 'low' | 'medium' | 'high'
    completedPercentaje: number
}

export type Board = {
    id: string
    cards: Card[]
    users_id: string[]
}

export type User = {
    id: string
    username: string
    password: string
    img_url: string
    boards: Board[]
}

export type Team = {
    id: string
    name: string
    img_url: string
    users: User[]
    boards: Board[]
}

export type TaskType = {
    name: string
    index: number
    id: string
    cardId: string
}

export type CardProps = {
    id: string
    index: number
    name: string
    tasks: TaskType[]
    setTasks: SetStateAction<any>
}
