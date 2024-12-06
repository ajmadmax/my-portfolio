import styles from '../css/academic.module.css';

export default function AcademicProjects (){
  const projects = [
    {
      title: "Antique Benz E-Toy Store",
      description:
        "Developed an e-commerce website for Antique Benz Replica Toys using Ruby on Rails, integrating user-centric features such as design proposal submissions and monthly competition giveaways. Achieved 100% test coverage through comprehensive test scripts, ensuring robust application performance and reliability.",
    },
    {
      title: "Agricultural Yield Forecasting",
      description:
        "Utilized Random Forest algorithm to predict crop yields, enhancing crop selection and boosting farm efficiency.",
    },
    {
      title: "Enhancing Web Application Security through Secure Error Handling",
      description:
        "Developed a web application highlighting vulnerabilities due to insecure error handling and implemented secure coding practices to mitigate these risks. Conducted comparative security analysis, demonstrating the effectiveness of secure error handling and improving the overall security posture of web applications.",
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

