// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/rishab2245/"
        target="_blank"
        title="Rishab's Linkedin Profile"
      >
        Rishab Chaudhary
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/rishab2245/"
        target="_blank"
        title="Valo Github Repository"
      >
        <strong>
          Valo<span>Gallery</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;
