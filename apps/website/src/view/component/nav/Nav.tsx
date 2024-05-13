import { classes } from '@/util/class'
import cls from './nav.module.scss'
import type { Entry } from './nonBusiness'

interface Props {
  entries: Entry[]
}

export const Nav = (props: Props) => {
  const goHome = () => {
    window.location.href = window.location.protocol + '//' + window.location.host
  }

  return (
    <div className={cls.nav}>
      <h1 className={classes(cls.title, 'o-btn')} onClick={goHome}>
        Web Vista
      </h1>

      <svg className={cls.slogan}>
        <text x={0} y={0} color="currentColor" textAnchor="middle" dominantBaseline="middle">
          Sharing Ideas
        </text>
      </svg>

      <ul className={cls.entries}>
        {props.entries.map((entry) => (
          <li key={entry.label} className={classes(cls.entry, 'o-btn')} onClick={entry.onClick}>
            {entry.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
