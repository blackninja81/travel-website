import styles from '../styles/Home.module.css';

export const ContactForm = () => {
    return (
        <div className={
            styles.contact
        }>
            <div className={styles.ContactForm}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <div className='contactForm'>
                                <form id='contact-form' noValidate>

                                    {/* Row 1 of form */}
                                  <div className={styles.formRow}>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <input type='text' name='name' className='form-control formInput' placeholder='Name'></input>
                                        </div>
                                        <div className='col-6'>
                                            <input type='email' name='email' className='form-control formInput' placeholder='Email address'></input>
                                        </div>
                                    </div>
                                    </div>


                                    {/* Row 2 of form */}
                                    <div className={styles.formRow}>
                                    <div className='row formRow'>
                                        <div className='col'>
                                            <input type='text' name='subject' className='form-control formInput' placeholder='Subject'></input>
                                        </div>
                                    </div>
                                    </div>


                                    {/* Row 3 of form */}
                                    <div className={styles.formRow}>
                                    <div className='row formRow'>
                                        <div className='col'>
                                            <textarea rows={3}
                                                name='message'
                                                className='form-control formInput'
                                                placeholder='Message'></textarea>
                                        </div>
                                        </div>
                                    </div>
                                    <button className={styles.submit} type='submit'>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
