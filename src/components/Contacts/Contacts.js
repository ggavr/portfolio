import React from 'react';
import styleContainer from "../../common/styles/Container.module.css";
import style from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                    <form className={style.contactsForm}>
                        <input type={'text'}/>
                        <input type={'text'}/>
                        <textarea/>
                    </form>
                <button>Submit</button>
            </div>

        </div>
    );
};
