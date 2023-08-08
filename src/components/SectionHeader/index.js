import './index.css';

const SectionHeader = ({ name, title }) => {
  return (
    <div className="section-title">
      <h5>{name}</h5>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
