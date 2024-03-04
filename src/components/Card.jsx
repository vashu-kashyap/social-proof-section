const Card = ({ clientImg, clientName, reviewMsg,traslateValue }) => {
  return (
    <div
      className={`review-card space-y-5 rounded-lg bg-very-dark-magenta p-10 transform ${traslateValue} `}
    >
      <div className="card-header flex items-center justify-start gap-x-5">
        <img src={clientImg} className="w-14 rounded-full" alt={""} />
        <div className="customer-info font-league-spartan text-base">
          <h2 className="customer-name font-medium text-white">{clientName}</h2>
          <span className="text-soft-pink">Verified Buyer</span>
        </div>
      </div>
      <p className="review-msg font-league-spartan text-base font-normal text-white">
        {`"${reviewMsg}"`}
      </p>
    </div>
  );
};

export default Card;
