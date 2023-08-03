const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll__container">
      <button id="top" onClick={scrollToTop} type="button">
        Top
      </button>
    </div>
  );
};

export default TopButton;
