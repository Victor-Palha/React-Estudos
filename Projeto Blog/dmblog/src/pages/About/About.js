import React from 'react'
import { Link } from 'react-router-dom'
//CSS
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.about}>
        <h1>Sobre o DM <span>Blog</span></h1>
        <p>Esse projeto consiste em um blog feito com React no front-end e Firebase no back-end</p>
        <Link to="/posts/create" className='btn'>Criar Post</Link>
    </div>
  )
}

export default About