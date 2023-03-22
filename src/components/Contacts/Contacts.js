import React from 'react';
import styleContainer from "../../common/styles/Container.module.css";
import style from './Contacts.module.scss'
import {Title} from "../../common/components/Title";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
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
