import PropTypes from 'prop-types';
import s from './Section.module.css';
export const Section = ({ children, title }) => {
  return (
    <section className={title ? s.baseSection : s.sectionAccent}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};
Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
