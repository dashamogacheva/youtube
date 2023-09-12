import styles from './FilterWrapper.module.css';
export default function FilterWrapper() {
    return (
        <div className={styles.wrapper}>
            <button className={styles.button}>
                Все
            </button>
            <button className={styles.button}>
                АСМР
            </button>
            <button className={styles.button}>
                Музыка
            </button>
            <button className={styles.button}>
                Видеоигры
            </button>
            <button className={styles.button}>
                Мультфильмы
            </button>
            <button className={styles.button}>
                Просмотрено
            </button>
        </div>
    );
}