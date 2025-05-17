import React from 'react';
import './Benefits.css'; // Include the CSS file for styling

const benefitsData = [
  {
    title: "Pluralsight",
    imgSrc: "https://www.acm.org/binaries/ctaimagelarge/content/gallery/acm/ctas/learning-center/pluralsight-logo.jpg",
    description: "Access online training from Pluralsight to develop essential technical skills.",
    link: "https://learning.acm.org/e-learning/pluralsight"
  },
  {
    title: "Skillsoft Percipio",
    imgSrc: "https://www.acm.org/binaries/ctaimagelarge/content/gallery/acm/ctas/learning-center/skillsoft-percipio-logo.jpg",
    description: "Skillsoft Percipio offers curated content for professional development.",
    link: "https://learning.acm.org/e-learning/skillsoft"
  },
  {
    title: "ACM Learning Center",
    imgSrc: "https://www.acm.org/binaries/ctaimagelarge/content/gallery/acm/ctas/techpacks.jpg",
    description: "Explore resources to stay updated with the latest trends in computing.",
    link: "https://learning.acm.org/"
  },
  {
    title: "Publications",
    imgSrc: "https://www.acm.org/binaries/ctaimagelarge/content/gallery/acm/ctas/publications/acm-desktopcta.jpg",
    description: "Access ACM journals, magazines, and newsletters.",
    link: "https://www.acm.org/publications"
  },
  {
    title: "Digital Library",
    imgSrc: "https://www.acm.org/binaries/ctaimagelarge/content/gallery/acm/ctas/digitallibrary.jpg",
    description: "Subscribe to the world's most comprehensive computing literature database.",
    link: "https://dl.acm.org/"
  },
  {
    title: "ACM TechNews",
    imgSrc: "https://www.acm.org/binaries/ctaimagelarge/content/gallery/acm/ctas/membership/technews.jpg",
    description: "Get timely updates on computing, science, and technology.",
    link: "https://technews.acm.org/archives.cfm"
  },
  {
    title: "CareerNews",
    imgSrc: "https://www.acm.org/binaries/ctaimagelarge/content/gallery/acm/ctas/membership/careernews.jpg",
    description: "Stay informed on career-related topics in computing.",
    link: "https://www.acm.org/articles/careernews"
  },
  {
    title: "Career & Job Center",
    imgSrc: "https://www.acm.org/binaries/ctaimagelarge/content/gallery/acm/ctas/membership/job-center.jpg",
    description: "Discover top technology jobs and post resumes in ACM's job center.",
    link: "https://jobs.acm.org/"
  }
];

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h2 className="benefits-title">Benefits</h2>
      <div className="benefits-grid">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="benefits-card">
            <a href={benefit.link} target="_blank" rel="noopener noreferrer">
              <img src={benefit.imgSrc} alt={benefit.title} className="benefits-image" />
            </a>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
            <a
              href={benefit.link}
              target="_blank"
              rel="noopener noreferrer"
              className="benefits-link"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
