"use client";

import styled from 'styled-components';

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <h2>My Skills</h2>
      <SkillList>
        <SkillItem>JavaScript</SkillItem>
        <SkillItem>React</SkillItem>
        <SkillItem>Next.js</SkillItem>
        <SkillItem>HTML & CSS</SkillItem>
        <SkillItem>Styled-components</SkillItem>
      </SkillList>
    </SkillsSection>
  );
};

export default Skills;

const SkillsSection = styled.section`
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.light};
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillItem = styled.li`
  list-style: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;
