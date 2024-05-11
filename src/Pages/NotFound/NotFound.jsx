import React from 'react'
import img from '../../assets/images/404 Error.gif'
import { Link } from 'react-router-dom'
import styles from './notFound.module.css'

export default function NotFound() {
  return (
    <div style={{textAlign: 'center'}}>
      <img src={img} alt="" /><br />
      <Link><button className={styles.btn}>Back to the Home</button></Link>
    </div>
  )
}
