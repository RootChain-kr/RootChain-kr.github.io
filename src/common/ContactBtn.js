import { company } from "assets/data";

const ContactBtn = () => {
  return (
    <a
      //   target="_blank"
      //   href={`mailto:${company.email}?subject=메일의 제목을 넣습니다&`}
      href="#contactus"
    >
      <button className="btn btn-black">Contact us</button>
    </a>
  );
};

export default ContactBtn;
