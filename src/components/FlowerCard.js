import { useState } from 'react';
import styles from './FlowerCard.module.css';

function FlowerCard({ name, type, vibe, color, accent, emoji, img, desc }) {
  const [loved, setLoved] = useState(false);
  const [loveCount, setLoveCount] = useState(Math.floor(Math.random() * 80) + 12);

  function handleLove() {
    setLoved(!loved);
    setLoveCount(prev => loved ? prev - 1 : prev + 1);
  }

  return (
    <div className={styles.card} style={{ '--card-color': color, '--card-accent': accent }}>

      {/* Photo */}
      <div className={styles.imageWrap}>
        <img src={img} alt={name} className={styles.img} />
        <div className={styles.vibeTag}>{vibe}</div>
        <div className={styles.emojiFloat}>{emoji}</div>
      </div>

      {/* Info */}
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.type}>{type}</p>
        <p className={styles.desc}>{desc}</p>
      </div>

      {/* Love button */}
      <button
        className={`${styles.loveBtn} ${loved ? styles.loved : ''}`}
        onClick={handleLove}
        aria-label={`Love ${name}`}
      >
        <span className={styles.heart}>{loved ? '♥' : '♡'}</span>
        <span className={styles.count}>{loveCount}</span>
      </button>

    </div>
  );
}

export default FlowerCard;
