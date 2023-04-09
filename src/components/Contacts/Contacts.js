import React from 'react';
import style from './Contacts.module.scss'
import {Title} from "../../common/components/Title";
import FormRH from "./FormRH";
import {Button} from "../../common/components/button/Button";

export const Contacts = () => {
    return (
        <div id={'contacts'} className={style.contacts}>
            <div className={style.contactsContainer}>
                <Title title={'Contacts'}/>

                    <form className={style.contactsForm}>
                        <input placeholder={'Name'} type={'text'} className={style.formArea}/>
                        <input placeholder={'e-mail'} type={'text'} className={style.formArea}/>
                        <textarea placeholder={'Message'} className={style.messageArea}/>
                        <button type={'submit'}>Send message</button>
                    </form>

                {/*<Button text={'Submit'}/>*/}
            </div>
            {/*<FormRH/>*/}
        </div>
    );
};
