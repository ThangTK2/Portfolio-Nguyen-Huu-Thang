import React from "react";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png";
import project4 from "/project4.png";
import project5 from "/project5.png";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd5cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[200px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 transition-opacity duration-300"
          ></a>
        </figure>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      image: project1,
      title: "MERN - Todo App",
      description: `A full-stack MERN (MongoDB, Express, React, Node.js) Todo application with the following features:
        • Full CRUD operations for tasks (Create, Read, Update, Delete) via REST API 
        • Data persistence and retrieval using MongoDB 
        • Responsive, user-friendly interface with Tailwind CSS `,
      link: "https://mern-todo-app-2025.onrender.com/",
    },
    {
      id: 2,
      image: project2,
      title: "TK2 Movie App",
      description: `
        A dynamic movie application that allows users to explore and search for movies using the TMDB API. Key features include:
        • Fetch and display movie data from external API
        • Search and fi lter movies dynamically
        • User-friendly UI built with Tailwind CSS`,
      link: "https://tk2-movie.onrender.com/",
    },
    {
      id: 3,
      image: project3,
      title: "TK2 Blog",
      description:
        "TK2 Blog is a modern blogging platform built with React. It features a clean and responsive design, allowing users to read and share articles on various topics. The blog emphasizes simplicity and user experience, making it easy for readers to navigate and enjoy the content.",
      link: "https://tk2-blog.vercel.app/",
    },
    {
      id: 4,
      image: project4,
      title: "Semper Vere",
      description: `
        • Built the entire website using Elementor and WordPress.
        • Customized layout and styling based on the design
        requirements.
        • Implemented responsive design for mobile and tablet
        views.
        • Collaborated with client to adjust content, structure, and
        improve UX.`,
      link: "https://dongt61.sg-host.com/",
    },
    {
      id: 5,
      image: project5,
      title: "ProMed East",
      description: `
        • Developed and customized forms using Gravity Forms,
        integrated with ACF and CPT UI to manage dynamic data
        and display custom content.
        • Implemented conditional logic to show or hide fields
        based on user input.
        • Configured automated email notifications for both users
        and administrators after form submission.
        • Customized CSS/JS to ensure the forms matched the
        website design and were fully responsive across all
        devices.
        • Maintained and updated forms as needed based on client
        requirements.`,
      link: "https://promedeast.com/dev-request-a-brace-dev-one-page/",
    },
  ];

  return (
    <main className="p-4 pb-18" id="projects">
      {/* Hero Section */}
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            A selection of my recent projects, blending clean web development
            with creative ideas. Each project reflects my passion for building
            interactive experiences and innovative solutions.
          </p>
        </header>
      </section>

      {/* Projects Grid Section */}
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
