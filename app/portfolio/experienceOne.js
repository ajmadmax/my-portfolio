import styles from "../css/expone.module.css"

const ExperienceOne = () => {
    return (
    <div className={styles.expContainer}>
        <h2 className={styles.title}>Software Engineer</h2>
        <p className={styles.duration}>Aug 2020 - Dec 2022</p>
        <h3 className={styles.company}>CZAR Gaming Private Limited</h3>
        <p className={styles.location}>Hyderabad, India</p>
        <ul className={styles.taskList}>
        <li className={styles.taskItem}>
        <b>Enhanced Game Performance & Deployment, </b>Enhanced Game Performance & Deployment: Optimized poker game responsiveness by 30% using Phaser3 and reduced
        deployment time by 35% with ElectronJS, ensuring efficient live deployments.
        </li>
        <li className={styles.taskItem}>
        <b>Full-Stack Development,</b> Built and deployed interactive gaming platforms using ReactJS, Angular, and Node.js, 
        integrating RESTful APIs, WebSocket, and PostgreSQL for scalable, real-time operations.
        </li>
        <li className={styles.taskItem}>
        <b>Database & UI Optimization,</b> Improved database performance by 25% for a sports website and designed user-friendly interfaces 
        adhering to modern web standards with robust error handling.
        </li>
        <li className={styles.taskItem}>
        <b>Recognition & Impact,</b> Awarded 'Best Performer of the Year' in 2021 for exceptional 
        contributions to project quality and operational efficiency.
        </li>
        </ul>
    </div>
    );
};

export default ExperienceOne;
    