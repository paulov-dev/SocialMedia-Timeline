import { Pencil2Icon } from "@radix-ui/react-icons";
 
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src='https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
   
            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src='https://avatars.githubusercontent.com/u/114274633?v=4'
                />

                <strong>Paulo Marques</strong>
                <span>Web Developer</span>
            </div>

            <footer>

                <a href="#">
                    <Pencil2Icon />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}