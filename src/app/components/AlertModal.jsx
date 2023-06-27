const AlertModal = ({ open, close }) => {
  return (
    <dialog className="modal modal-bottom sm:modal-middle" open={open}>
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">¡Oye!</h3>
        <p className="py-4">Debes elegir 6 imágenes</p>
        <div className="modal-action">
          <button className="btn" onClick={close}>
            Cerrar
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default AlertModal;
