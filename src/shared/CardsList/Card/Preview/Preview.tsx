import React from 'react';
import styles from './preview.css';

export function Preview() {
    return (
        <div className={styles.preview}>
            <img src="https://cdnb.artstation.com/p/assets/images/images/019/040/321/large/ruiz-burgos-95dc4faf-6c19-4319-aa77-67d4450bdb7c.jpg?1561737661"
                alt="preview-image" className={styles.previewImg} />
        </div>
    );
}
