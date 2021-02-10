import React, { useState } from 'react';
import ContactList from '../components/Contacts/ContactList/ContactListConstructor';
import ContactEditorAdd from '../components/Contacts/ContactEditor/ContactEditorAdd';
import Modal from '../components/Modal/Modal';

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main>
      <div>
        <button type="button" onClick={onButtonClick}>
          Add
        </button>
        {isModalOpen && (
          <Modal onClose={onButtonClick} children>
            <ContactEditorAdd onClose={onButtonClick} />
          </Modal>
        )}

        <ContactList />
      </div>
    </main>
  );
};

export default ContactsPage;
