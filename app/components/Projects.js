"use client";

import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h2>My Projects</h2>
      <ProjectList>
        {/* Map through your projects and display them here */}
        <ProjectItem>
          <h3>Project Title</h3>
          <p>Project description goes here.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </ProjectItem>
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  padding: 2rem 1rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const ProjectItem = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: left;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
