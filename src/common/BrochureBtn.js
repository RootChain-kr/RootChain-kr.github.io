const BrochureBtn = () => {
  return (
    <a
      target="_blank"
      href={process.env.PUBLIC_URL + '/asset/RootChain-brochure.pdf'}>
      <button className="btn btn-black">View Brochure</button>
    </a>
  );
};

export default BrochureBtn;
