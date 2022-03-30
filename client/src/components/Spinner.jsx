const Spinner = ({position}) => {
  return (
    <div className={position + " d-flex flex-column align-items-center justify-content-center"}  id="spinner-container">
      <div className="spinner-border" role="status">
      </div>
    </div>
  )
};

export default Spinner;
