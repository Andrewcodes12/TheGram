import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditComments from './EditComments';

function EditCommentModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditComments />
        </Modal>
      )}
    </>
  );
}

export default EditCommentModal;
