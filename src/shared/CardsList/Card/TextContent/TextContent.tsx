import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img className={styles.avatar}
                        src="https://flomaster.club/uploads/posts/2022-06/1655866416_22-flomaster-club-p-betmen-portret-krasivo-23.jpg"
                        alt="user-avatar" />
                    <a href="#user-url" className={styles.username}>Кристиан Бэйл</a>
                </div>
                <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}> опубликовано </span>
                    4 часа назад
                </span>
            </div>
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink}>
                    Следует отметить, что новая модель организационной...
                </a>
            </h2>
        </div>
    );
}
