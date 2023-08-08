import { lable } from 'texts/common';

const ContactBtn = () => {
  return (
    <a
      //   target="_blank"
      //   href={`mailto:${company.email}?subject=메일의 제목을 넣습니다&`}
      className="contact-btn"
      href="#contactus">
      <button className="btn btn-black">{lable.contact}</button>
    </a>
  );
};

export default ContactBtn;
