function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_image_zoom' ${card && "popup_opened"}`}>
      <div className="popup__box">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}>
        </button>
        <img
          className="popup__image"
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
        />
        <h2 className="popup__caption">{card?.name ?? ""}</h2>
      </div>
    </section>
  );
}
export default ImagePopup;