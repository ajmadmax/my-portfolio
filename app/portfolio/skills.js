import styles from "../css/gallery.module.css";


const Skills = () => {
  const skills = [
    { category: "Programming Languages", skills: "C, C++, Java, Python, JavaScript, TypeScript" },
    { category: "Database", skills: "MySQL, PostgreSQL, MongoDB" },
    { category: "Cloud & Web Technologies", skills: "AWS, Azure, Angular, React, Next.js, Vue, Phaser3, Ruby on Rails, HTML, CSS" },
    { category: "Other", skills: "Apache Kafka, AWS, Git, Agile, WebGL" },
    { category: "Certifications", skills: "AWS Cloud Quest: Cloud Practitioner (Badge), Social Networking (NPTEL), Machine Learning (NPTEL)" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.headingskills}>Technical Skills</h1>
      <table className={styles.table}>
        <tbody>
          {skills.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.skills}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
