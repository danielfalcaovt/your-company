import React from 'react'
import * as styles from './favorite-button.scss'

export default function FavoriteButton (props: {
  active: number
  html: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}): JSX.Element {
  return (
    <button {...props.html} className={styles.favoriteButton}>
      <img
        src={
          props.active
            ? '/imgs/assets/filled-star.png'
            : '/imgs/assets/empty-star.png'
        }
        alt='favorite coin'
      />
    </button>
  )
}
