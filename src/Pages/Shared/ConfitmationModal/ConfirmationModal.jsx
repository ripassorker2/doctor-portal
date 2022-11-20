import React from "react";

const ConfirmationModal = ({
  modalData,
  title,
  massege,
  closeModal,
  modalAction,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{massege}</p>
          <div className="modal-action">
            <label
              htmlFor="confirmation-modal"
              onClick={closeModal}
              className="btn btn-sm"
            >
              Cancle
            </label>
            <label
              onClick={() => modalAction(modalData)}
              htmlFor="confirmation-modal"
              className="btn btn-sm"
            >
              Yeah
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
