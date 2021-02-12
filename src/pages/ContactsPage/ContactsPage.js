import React, { useState } from 'react';
import ContactList from '../../components/Contacts/ContactList/ContactList';
import ContactEditor from '../../components/Contacts/ContactEditor/ContactEditor';
import Modal from '../../components/Modal/Modal';
import ContactFilter from '../../components/Contacts/ContactFilter/ContactFilter';
import styles from './ContactsPage.module.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className={styles.main}>
      <div className={styles.main_contacts}>
        <h1 className={styles.header}>Phonebook</h1>

        <p className={styles.header_secondary}>My contact list</p>
        <div className={styles.parameters}>
          <ContactFilter />
          <button
            type="button"
            onClick={onButtonClick}
            className={styles.button}
            title="Add contact"
          >
            <AddCircleOutlineIcon
              className={styles.svg_add}
            ></AddCircleOutlineIcon>
          </button>
        </div>
        <ContactList />

        {isModalOpen && (
          <Modal onClose={onButtonClick} children>
            <ContactEditor
              titleButton="Add"
              title="Add a new contact"
              onClose={onButtonClick}
            />
          </Modal>
        )}
      </div>
    </main>
  );
};

export default ContactsPage;
