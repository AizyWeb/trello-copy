import styles from '../styles/footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.footernav}>
      <form>
        <select>
          <option value='es'>Español</option>
          <option value='en'>English</option>
        </select>
      </form>
      <h4>Notice at Collection</h4>
      <h4>Politica de Privacidad</h4>
      <h4>Términos</h4>
      <h4>Copyright &copy; 2024 Atlassian</h4>
    </footer>
  )
}
