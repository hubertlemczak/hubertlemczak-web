import { Link } from 'react-router-dom';

const BlogContent = () => {
  return (
    <article className="projects-container">
      <h1>
        Project blog Coming Soon.{' '}
        <Link to="/projects/classable">View Classable in the meantime!</Link>
      </h1>
    </article>
  );
};

export default BlogContent;
