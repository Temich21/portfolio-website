import { ActivePathContext } from '@/context/ActivePath'
import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { firestore } from "../../app/firebase"
import { addDoc, collection } from "firebase/firestore"
import { Button } from '../Button/Button'
import styles from './Contact.module.scss'
import { faFaceSmileWink, faFaceSadTear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'

export const Contact = () => {
    const [formSubmited, setFormSubmited] = useState(false)
    const [successfulSending, setSuccessfullSending] = useState(false)
    const { activePath } = useContext(ActivePathContext)
    const ref = collection(firestore, 'contacts')

    const submit = (values) => {
        const data = {
            id: Number(new Date),
            values
        }

        try {
            addDoc(ref, data)
            setSuccessfullSending(true)
        }
        catch (e) {
            console.log(e)
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            phoneNumber: '',
            email: '',
            text: ''
        },
        onSubmit: (values) => {
            setFormSubmited(true)
            submit(values)
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required"),
            surname: Yup.string()
                .required("Required"),
            phoneNumber: Yup.string()
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            text: Yup.string()
                .required("Required")
        }),
    })

    return (
        <section className={styles.contact} id="contact">
            <h2 className={styles.heading}>Contact <span>Me!</span><span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} style={{ '--i': 1 }}></span></h2>
            <form onSubmit={formik.handleSubmit}>
                <div className={styles.inputBox}>
                    <div className={styles.inputField}>
                        <input
                            name='name'
                            type="text"
                            placeholder='Name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            required
                        />
                        <span className={styles.focus}></span>
                        <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} style={{ '--i': 2 }}></span>
                    </div>
                    <div className={styles.inputField}>
                        <input
                            name='surname'
                            type="text"
                            placeholder='Surname'
                            value={formik.values.surname}
                            onChange={formik.handleChange}
                            required
                        />
                        <span className={styles.focus}></span>
                        <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} style={{ '--i': 3 }}></span>
                    </div>
                </div>

                <div className={styles.inputBox}>
                    <div className={styles.inputField}>
                        <input
                            name='phoneNumber'
                            type="number"
                            placeholder='Mobile Number'
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            required
                        />
                        <span className={styles.focus}></span>
                        <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} style={{ '--i': 4 }}></span>
                    </div>
                    <div className={styles.inputField}>
                        <input
                            name="email"
                            type="email"
                            placeholder='Email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            required />
                        <span className={styles.focus}></span>
                        <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} style={{ '--i': 5 }}></span>
                    </div>
                </div>

                <div className={styles.textareaField}>
                    <textarea
                        name="text"
                        cols="30"
                        rows="15"
                        value={formik.values.text}
                        onChange={formik.handleChange}
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <span className={styles.focus}></span>
                    <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} style={{ '--i': 6 }}></span>
                </div>

                <div className={styles.btnBox}>
                    <Button type="submit" >Submit</Button>
                    <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} style={{ '--i': 7 }}></span>
                </div>
            </form>
            {formSubmited && successfulSending && <div className={styles.submited}>The form was sent successfully <FontAwesomeIcon icon={faFaceSmileWink} bounce /></div>}
            {formSubmited && !successfulSending && <div className={styles.submited}>Something went wrong <FontAwesomeIcon icon={faFaceSadTear} /> Please contact my email rahmat97@mail.ru</div>}
        </section>
    )
}