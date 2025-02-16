import { ArrowUpIcon, TrashIcon } from '@radix-ui/react-icons'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/paulov-dev.png"/>

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Paulo Marques</strong>
                            <time title='16 de Fevereiro às 08:13' dateTime='2025--02-16 08:13:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <TrashIcon />
                        </button>

                    </header>
                    <p>Muito bom Paulo, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ArrowUpIcon />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}