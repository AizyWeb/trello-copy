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
    boards: Board[]
}

export type Team = {
    id: string
    name: string
    users: User[]
    boards: Board[]
}
