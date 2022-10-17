import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import styles from '../../../../styles/profile.module.scss';

const PasswordForm = () => {
    return(
        <>
            <Form className={ styles.form }>
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
                            className={ styles.inputFlex  }
                        />
                    </FormGroup>
                </div>
                <Button className={ styles.formBtn } type='submit' outline>
                    Salvar Alterações
                </Button>
            </Form>
        </>
    )
};

export default PasswordForm;