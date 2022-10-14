import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import styles from '../../../../styles/profile.module.scss';

const UserForm = () => {
    return(
        <>
            <Form className={ styles.form }>
                <div className={ styles.formName }>
                    <p className={ styles.nameAbbreviation }>NT</p>
                    <p className={ styles.userName }>NAME TEST</p>
                </div>
                <div className={ styles.memberTime }>
                    <img 
                        src="/profile/iconUserAccount.svg"
                        alt="Icon Profile"
                        className={ styles.memberTimeImg }
                    />
                    <p className={ styles.memberTimeText }>Membro desde <br /> xx de xxxx de xxxx</p>
                </div>
                <hr />
                <div className={ styles.inputFlexDiv }>
                    <FormGroup>
                        <Label for="firstName" className={ styles.label }>
                            NOME
                        </Label>                    
                        <Input
                            name="firstName"
                            type="text"
                            id="firstName"
                            placeholder="Qual o seu primeiro nome?"
                            required
                            maxLength={20}
                            className={ styles.inputFlex }
                            value={"NAME"}
                        >
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName" className={ styles.label }>
                            SOBRENOME
                        </Label>                    
                        <Input
                            name="lastName"
                            type="text"
                            id="lastName"
                            placeholder="Qual o seu último nome?"
                            required
                            maxLength={20}
                            className={ styles.inputFlex }
                            value={"TEST"}
                        >
                        </Input>
                    </FormGroup>
                </div>
                <div className={ styles.inputNormalDiv }>
                    <FormGroup>
                        <Label for="phone" className={ styles.label }>
                            WHATSAPP/TELEGRAM
                        </Label>                    
                        <Input
                            name="phone"
                            type="tel"
                            id="phone"
                            placeholder="(xx) 9xxxx-xxxx"
                            required
                            maxLength={20}
                            className={ styles.input }
                            value={"+55 (21) 99999-9999"}
                        >
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" className={ styles.label }>
                            E-MAIL
                        </Label>                    
                        <Input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Qual o seu e-mail?"
                            required
                            maxLength={20}
                            className={ styles.input }
                            value={"jacare@email.com"}
                        >
                        </Input>
                    </FormGroup>
                    <Button className={ styles.formBtn } outline type="submit">
                        Salvar Alterações
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default UserForm;