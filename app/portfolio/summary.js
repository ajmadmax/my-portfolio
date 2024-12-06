import styles from "../css/gallery.module.css"

export default function Summary() {
    return (
        <div className={styles.introductionContainer}>
        <h1 className={styles.heading}>Hi!</h1>
        <p className={styles.description}>
          I'm <strong className={styles.name}>Ajay</strong>, a dedicated and passionate software engineer actively seeking 
          full-stack development opportunities. With experience in building and delivering impactful software solutions, I am committed 
          to tackling challenges with a hardworking and results-driven mindset. My goal is to contribute to innovative projects while
          continuously growing and refining my skills in a dynamic environment.
        </p>
      </div>
    );
  }