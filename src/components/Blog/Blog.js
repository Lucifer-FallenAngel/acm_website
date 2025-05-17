// src/components/Blog/Blog.js
import React from 'react';
import './Blog.css';
import blog1 from '../PIC/Blogs/1.jpg';
import blog2 from '../PIC/Blogs/2.jpeg';
import blog3 from '../PIC/Blogs/3.jpg';
import blog4 from '../PIC/Blogs/4.png';
import aiPdf from '../Documents/Blog/AI&ML.pdf';
import cybersecurityPdf from '../Documents/Blog/Cybersecurity.pdf';
import fullStackPdf from '../Documents/Blog/Full_Stack.pdf';
import renewableEnergyPdf from '../Documents/Blog/Renewable_Energy.pdf';

const blogs = [
  { title: 'AI & ML', img: blog1, pdf: aiPdf },
  { title: 'Cyber Security', img: blog2, pdf: cybersecurityPdf },
  { title: 'Full Stack', img: blog3, pdf: fullStackPdf },
  { title: 'The Future of Renewable Energy', img: blog4, pdf: renewableEnergyPdf },
  // Repeat the blogs as needed for the demo
  { title: 'AI & ML', img: blog1, pdf: aiPdf },
  { title: 'Cyber Security', img: blog2, pdf: cybersecurityPdf },
  { title: 'Full Stack', img: blog3, pdf: fullStackPdf },
  { title: 'The Future of Renewable Energy', img: blog4, pdf: renewableEnergyPdf },
  { title: 'AI & ML', img: blog1, pdf: aiPdf },
  { title: 'Cyber Security', img: blog2, pdf: cybersecurityPdf },
  { title: 'Full Stack', img: blog3, pdf: fullStackPdf },
  { title: 'The Future of Renewable Energy', img: blog4, pdf: renewableEnergyPdf },
];

const Blog = () => {
  return (
    <div className="blog-section">
      <h1>Blogs</h1>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-item">
            <a href={blog.pdf} target="_blank" rel="noopener noreferrer">
              <img src={blog.img} alt={blog.title} className="blog-image" />
              <p className="blog-title">{blog.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
