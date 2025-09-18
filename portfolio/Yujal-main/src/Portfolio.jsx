import React, { useState } from 'react';
import './Portfolio.css';
import profile from './assets/profile.jpg';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const personalInfo = {
        name: "Yujal Thapa",
        title: "Data Scientist | UI/UX Designer",
        email: "yujalthapa9@gmail.com",
        phone: "9849011597",
        location: "Kirtipur, Kathmandu, Nepal",
        github: "",
        linkedin: "https://www.linkedin.com/in/yujal-thapa-5b118135a/"
    };

    const skills = [
        { name: "React" },
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Node.js" },
        { name: "Git" },
        { name: "Python" },
    ];

    const projects = [
    {
        id: 1,
        title: "AI-Powered Breast Cancer Detector",
        description: "A machine learning model for early breast cancer detection, built to improve accuracy in medical diagnostics.",
        technologies: ["Python", "HTML", "CSS", "Scikit Learn", "Flask", "JavaScript"],
        link: "https://github.com/",
    },
    {
        id: 2,
        title: "StreamFlix - React Streaming App",
        description: "A React-based Netflix clone with dynamic movie browsing, user authentication, and responsive UI for seamless streaming experience.",
        technologies: ["JavaScript", "HTML", "CSS", "API"],
        link: "https://github.com/",
    },
    {
        id: 3,
        title: "Smart Animal Health Predictor",
        description: "An AI-powered prediction system to identify potential animal diseases, supporting early intervention and better livestock management.",
        technologies: ["Tesseract OCR", "TensorFlow/Keras"],
        link: "https://github.com/",
    },
];

const experiences = [
    {
        id: 1,
        title: "Digital Media Editor Intern",
        company: "Innovate Media Solutions",
        year: "March 2024 - May 2024",
        responsibilities: [
            "Produced and edited engaging video content for social media and marketing campaigns.",
            "Collaborated with cross-functional teams to ensure brand consistency and storytelling impact.",
            "Optimized video formats and resolutions for multiple platforms to maximize reach."
        ]
    },
    {
        id: 2,
        title: "UX/UI Design Intern",
        company: "NextGen Tech Studio",
        year: "June 2025 - August 2025",
        responsibilities: [
            "Created wireframes, prototypes, and user flows using Figma and Adobe XD.",
            "Conducted user research and usability testing to enhance product design.",
            "Implemented responsive and accessible design principles to improve user experience."
        ]
    }
];

    const education = [
        {
            degree: "Bachelor of Science in Computer Science with Artificial Intelligence",
            school: "Sunway College Kathmandu",
            year: "2025-Current",
            gpa: "Not Graduated Yet"
        },
        {
            degree: "High School (+2 Science)",
            school: "Nightingale International College",
            year: "2022-2024",
            gpa: "3.31/4.0"
        },
        {
            degree: "Secondary Education (SEE)",
            school: "New Horizon Secondary School",
            year: "2021",
            gpa: "3.50/4.0"
        }
    ];

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Thank you for your message!");
        setFormData({ name: '', email: '', message: '' });
    };const renderContent = () => {
    switch (activeSection) {
        case 'about':
            return (
                <section className="content-section fade-in">
                    <h2 className="section-title">About Me</h2>
                    <div className="text-content">
                        <p>
                            I am a passionate Data Scientist and UI/UX Designer dedicated to leveraging technology to solve complex problems. My journey in AI and data science has equipped me with the skills to analyze data effectively and design intuitive user experiences that make a difference.
                        </p>
                        <p>
                            Continuously learning and adapting, I thrive in collaborative environments where innovation and creativity drive impactful solutions. I am eager to contribute my expertise to projects that push the boundaries of technology and improve lives.
                        </p>
                    </div>
                </section>
            );

        case 'skills':
            return (
                <section className="content-section fade-in">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-name">{skill.name}</div>
                            </div>
                        ))}
                    </div>
                </section>
            );

        case 'projects':
            return (
                <section className="content-section fade-in">
                    <h2 className="section-title">Projects</h2>
                    <div className="projects-grid">
                        {projects.map(project => (
                            <div key={project.id} className="card project-card">
                                <div className="project-details">
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-description">
                                        {project.description}
                                    </p>
                                    <div className="tech-tags">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} className="card-link" target="_blank" rel="noopener noreferrer">
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            );

        case 'experience':
            return (
                <section className="content-section fade-in">
                    <h2 className="section-title">Experience</h2>
                    {experiences.map(exp => (
                        <div key={exp.id} className="card experience-card">
                            <h3 className="card-title">{exp.title}</h3>
                            <p className="experience-company-year">{exp.company} | {exp.year}</p>
                            <ul>
                                {exp.responsibilities.map((resp, index) => (
                                    <li key={index}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            );

        case 'education':
            return (
                <section className="content-section fade-in">
                    <h2 className="section-title">Education</h2>
                    {education.map((edu, index) => (
                        <div key={index} className="card education-card">
                            <h3 className="card-title">{edu.degree}</h3>
                            <p className="education-school">{edu.school}</p>
                            <p className="education-year">{edu.year}</p>
                            <p className="education-gpa">GPA: {edu.gpa}</p>
                        </div>
                    ))}
                </section>
            );

        case 'contact':
            return (
                <section className="content-section fade-in">
                    <h2 className="section-title">Contact</h2>
                    <div className="contact-info">
                        <p><strong>Email:</strong> <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
                        <p><strong>Phone:</strong> {personalInfo.phone}</p>
                        <p><strong>Location:</strong> {personalInfo.location}</p>
                        <p><strong>GitHub:</strong> {personalInfo.github ? <a href={personalInfo.github}>{personalInfo.github}</a> : 'N/A'}</p>
                        <p><strong>LinkedIn:</strong> <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a></p>
                    </div>
                    <div className="contact-form-container">
                        <h3 className="form-title">Send Me a Message</h3>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleFormChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleFormChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleFormChange}
                                rows="5"
                                required
                            ></textarea>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </section>
            );

        default:
            return null;
    }
};

    return (
        <div className="portfolio-container">
            <header className="hero-section">
                <div className="intro-container">
                    <div className="profile-image-container">
                        <img
                            src={profile}
                            alt={personalInfo.name}
                            className="profile-image"
                        />
                    </div>
                    <div className="text-content">
                        <p className="portfolio-tag">Personal Portfolio</p>
                        <h1 className="name cursive-name">{personalInfo.name}</h1>
                        <p className="title">{personalInfo.title}</p>
                    </div>
                </div>
            </header>

            <nav className="nav" aria-label="Primary navigation">
                {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map(section => (
                    <button
                        key={section}
                        className={`nav-button ${activeSection === section ? 'active' : ''}`}
                        onClick={() => setActiveSection(section)}
                        aria-current={activeSection === section ? 'page' : undefined}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </nav>

            <main className="main-content" tabIndex="-1">
                {renderContent()}
            </main>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Portfolio;