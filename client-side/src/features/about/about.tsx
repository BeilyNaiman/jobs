import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const AboutContainer = styled(Container)(({ theme }) => ({
    marginTop: 20,
  padding: theme.spacing(4),
  background: '#f5f5f5',
}));

const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const AboutPage: React.FC = () => {
  return (
    <AboutContainer maxWidth="md">
      <Heading variant="h3" align="center">
        About Us
      </Heading>
      <Paragraph variant="body1">
        Welcome to our website that offers a wide range of job opportunities in the field of technology! We believe that finding the right job can be challenging and time-consuming. Through our website, we strive to provide you with an efficient and convenient platform for searching and finding the jobs you are looking for in the world of tech.
      </Paragraph>
      <Paragraph variant="body1">
        We specialize in locating jobs in various areas such as software development, data analysis, cybersecurity, infrastructure technologies, and more. By utilizing advanced technologies and sophisticated search systems, we enable you to quickly and efficiently find the suitable positions.
      </Paragraph>
      <Paragraph variant="body1">
        Our website offers a user-friendly and intuitive interface, with advanced search options that allow you to filter results based on job field, geographical location, and employment conditions. You can view comprehensive details about each job, including job description, requirements, location, and salary conditions.
      </Paragraph>
      <Paragraph variant="body1">
        We are committed to helping job seekers discover new opportunities and assisting companies in finding the top talent in the tech industry. Whether you are a seasoned professional or just starting your career in the tech field, our website is here to guide and inspire you on your journey to success.
      </Paragraph>
      <Paragraph variant="body1">
        Join us today and embark on an exciting career path in the world of technology!
      </Paragraph>
    </AboutContainer>
  );
};

export default AboutPage;
