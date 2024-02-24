'use client'

import { FormEvent } from 'react'
import styles from '../../styles/newcard.module.css'

export default function NewCardForm () {
  function handleNewCard (e: FormEvent) {
    e.preventDefault()
    const input = (e.target as HTMLFormElement).querySelector('input')
    let cardName = input?.value
    alert('New Card: ' + cardName)
  }
  return (
    <form className={styles.newcardform} onSubmit={handleNewCard}>
      <input type='text' placeholder='New Trello Card' defaultValue='' />
      <button type='submit'>Create Card</button>
    </form>
  )
}
