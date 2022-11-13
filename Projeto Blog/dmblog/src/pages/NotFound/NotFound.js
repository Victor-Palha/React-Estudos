import React from 'react'
import styles from "./NotFound.module.css"
const NotFound = () => {
  return (
    <div>
        <h1 className={styles.error}>Error 404 - Página não encontrada!</h1>
    </div>
  )
}

export default NotFound