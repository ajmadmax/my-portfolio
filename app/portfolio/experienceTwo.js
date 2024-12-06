import styles from "../css/expone.module.css"

const ExperienceTwo = () => {
    return (
    <div className={styles.expContainer}>
        <h2 className={styles.title}>Software Intern</h2>
        <p className={styles.duration}>Nov 2019 - July 2020</p>
        <h3 className={styles.company}>Manac Infotech Private Limited</h3>
        <p className={styles.location}>Hyderabad, India</p>
        <ul className={styles.taskList}>
        <li className={styles.taskItem}>
        Enhanced security framework by 40% through the development and maintenance of the ProGuard system using Java/J2EE and
         MySQL, significantly reducing vulnerabilities and increasing system 
        </li>
        <li className={styles.taskItem}>
        Improved system performance efficiency by 25% by optimizing the development process using Eclipse Galileo, JDK 1.6, and
        Tomcat 6.0, ensuring reliable and streamlined operations. Decreased incidents of malicious online account activities by 35% by
        implementing advanced security measures and protocols, boosting overall system protection.
        </li>
        </ul>
    </div>
    );
};

export default ExperienceTwo;
    