import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useState, useEffect, FormEvent } from 'react';
//Services
import profileService from '../../../services/profileService';
//Components
import ToastComponent from '../../common/toast';

import styles from '../../../../styles/profile.module.scss';

const PasswordForm = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [color, setColor] = useState("");
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    //Pra que???
    useEffect(() => {
        profileService.fetchCurrent().then((password) => {
            console.log('password: '+password.password);
            setCurrentPassword(password.currentPassword)
            setNewpassword(password.newPassword)
        })
    }, [])

    const handlePasswordUpdate = async function(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if(newPassword != confirmPassword) {
            setToastIsOpen(true);
            setErrorMessage('Senha e confirmação de senha estão diferentes');
            setColor("bg-danger");
            setTimeout(() => {
                setToastIsOpen(false)
            }, 1000 * 3);
            return
        }

        if(currentPassword === newPassword) {
            setToastIsOpen(true);
            setErrorMessage('A nova senha deve ser diferente da senha atual');
            setColor("bg-danger");
            setTimeout(() => {
                setToastIsOpen(false)
            }, 1000 * 3);
            return
        }

        const res = await profileService.passwordUpdate({
            currentPassword,
            newPassword
        })

        if(res === 204) {
            setToastIsOpen(true);
            setErrorMessage('Senha alterada com sucesso!');
            setColor("bg-success");
            setTimeout(() => {
                setToastIsOpen(false)
            }, 1000 * 3);

            setCurrentPassword("");
            setNewpassword("");
            setConfirmPassword("");
        }

        if(res === 400) {
            setToastIsOpen(true);
            setErrorMessage('Senha atual incorreta!');
            setColor("bg-danger");
            setTimeout(() => {
                setToastIsOpen(false)
            }, 1000 * 3);
        }
    }

    return(
        <>
            <Form className={ styles.form } onSubmit={handlePasswordUpdate}>
                <div className={ styles.inputNormalDiv }>
                    <FormGroup>
                        <Label for='currentPassword' className={ styles.label }>SENHA ATUAL</Label>
                        <Input
                            name='currentPassword'
                            type='password'
                            id='currentPassword'
                            required
                            minLength={6}
                            maxLength={12}
                            value={currentPassword}
                            onChange={(event) => {
                                setCurrentPassword(event.target.value)
                            }}
                            className={ styles.input }
                        />
                    </FormGroup>
                </div>
                <div className={ styles.inputFlexDiv }>
                    <FormGroup>
                        <Label className={ styles.label } for="newPassword">
                            NOVA SENHA
                        </Label>
                        <Input 
                            name='newPassword'
                            type='password'
                            id='newPassword'
                            required
                            minLength={6}
                            maxLength={12}
                            value={newPassword}
                            onChange={(event) => {
                                setNewpassword(event.target.value)
                            }}
                            className={ styles.inputFlex  }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className={ styles.label } for="confirmNewPassword">
                            CONFIRME A NOVA SENHA
                        </Label>
                        <Input 
                            name='confirmNewPassword'
                            type='password'
                            id='confirmNewPassword'
                            required
                            minLength={6}
                            maxLength={12}
                            value={confirmPassword}
                            onChange={(event) => {
                                setConfirmPassword(event.target.value)
                            }}
                            className={ styles.inputFlex  }
                        />
                    </FormGroup>
                </div>
                <Button className={ styles.formBtn } type='submit' outline>
                    Salvar Alterações
                </Button>
            </Form>
            <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage}/>
        </>
    )
};

export default PasswordForm;