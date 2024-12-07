import styles from '../css/academic.module.css';

export default function AcademicProjects (){
  const projects = [
    {
      title: "Antique Benz E-Toy Store",
      description:
        "Developed an e-commerce website for Antique Benz Replica Toys using Ruby on Rails, integrating user-centric features such as design proposal submissions and monthly competition giveaways. Achieved 100% test coverage through comprehensive test scripts, ensuring robust application performance and reliability.",
    },
    {
      title: "Feed Grain Dynamics Analysis",
      description:
        "Utilized Python and machine learning libraries like TensorFlow and Scikit-learn to analyze feed grain trends, regional disparities and pricing factors. Leveraged SQL/NoSQL databases to manage large datasets and applied statistical methods and algorithms to uncover patterns and forecast market trends. The project provided actionable insights to aid in anticipating shifts and making informed decisions in the agricultural sector",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Academic Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <h2 className={styles.projectTitle}>{project.title}</h2>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

