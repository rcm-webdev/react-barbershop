import PropTypes from "prop-types";

const AlertModal = ({ isOpen, message, onClose, onConfirm }) => {
  return (
    <>
      <input
        type="checkbox"
        id="alert-modal"
        className="modal-toggle"
        checked={isOpen}
        onChange={onClose}
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Notification</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button className="btn" onClick={onClose}>
              Close
            </button>
            <button className="btn btn-primary" onClick={onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

AlertModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default AlertModal;

// import PropTypes from "prop-types";

// const AlertModal = ({ isOpen, message, onClose, onConfirm }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <dialog open className="modal">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg">Notification</h3>
//           <p className="py-4">{message}</p>
//           <div className="modal-action">
//             <button className="btn" onClick={onClose}>
//               Close
//             </button>
//             <button className="btn btn-primary" onClick={onConfirm}>
//               Confirm
//             </button>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// AlertModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   message: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
//   onConfirm: PropTypes.func.isRequired,
// };

// export default AlertModal;
