import styles from '../css/gallery.module.css';

const Education = () => {
  const education = [
    {
      degree: "Masters in Computer Science",
      institution: "University of Memphis",
      gpa: "3.44",
      duration: "Jan 2023 - Dec 2024",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Jawaharlal Nehru Technological University",
      duration: "Aug 2016 - Nov 2020",
    },
  ];

  return (
    <div className={styles.containerEdu}>
      <h1 className={styles.headingEdu}>Education</h1>
      {education.map((edu, index) => (
        <div key={index} className={styles.card}>
          <h2>{edu.degree}</h2>
          <p className={styles.institution}>{edu.institution}</p>
          {edu.gpa && <p className={styles.gpa}>GPA: {edu.gpa}</p>}
          <p className={styles.duration}>{edu.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
