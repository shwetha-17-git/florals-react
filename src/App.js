import { useState } from 'react';
import flowers from './data/flowers';
import FlowerCard from './components/FlowerCard';
import styles from './App.module.css';

// All unique vibes extracted from the data
const ALL_VIBES = ['All', ...new Set(flowers.map(f => f.vibe))];

function App() {
  const [activeVibe, setActiveVibe] = useState('All');

  // Filter flowers by selected vibe
  const filtered = activeVibe === 'All'
    ? flowers
    : flowers.filter(f => f.vibe === activeVibe);

  return (
    <div className={styles.page}>

      {/* Decorative background blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      {/* Header */}
      <header className={styles.header}>
        <p className={styles.tagline}>a curated bloom collection</p>
        <h1 className={styles.title}>Petal <em>&</em> Bloom</h1>
        <p className={styles.subtitle}>
          {flowers.length} flowers · each one a little story
        </p>
      </header>

      {/* Filter pills */}
      <nav className={styles.filterRow}>
        {ALL_VIBES.map(vibe => (
          <button
            key={vibe}
            className={`${styles.pill} ${activeVibe === vibe ? styles.pillActive : ''}`}
            onClick={() => setActiveVibe(vibe)}
          >
            {vibe}
          </button>
        ))}
      </nav>

      {/* Count line */}
      <p className={styles.count}>
        Showing <strong>{filtered.length}</strong> bloom{filtered.length !== 1 ? 's' : ''}
        {activeVibe !== 'All' && <> · <em>{activeVibe}</em></>}
      </p>

      {/* MAP — renders one FlowerCard per flower */}
      <main className={styles.grid}>
        {filtered.map(flower => (
          <FlowerCard key={flower.id} {...flower} />
        ))}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>made with 🌸 · edit <code>src/data/flowers.js</code> to add your own</p>
      </footer>

    </div>
  );
}

export default App;
