import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import '../styles/contact.scss';

function Contact() {

  const { register, handleSubmit, watch, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const onSubmit = data => {
    Axios
      .post(`http://localhost:3002/email`, data)
      .then(res => {
        setLoading(false);
        setEmailSent(true);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }

  console.log(watch('name')) // watch input value by passing the name of it

  return (
    <div>
      <section id="contact" className="container">
        <div className="narrow-container">
          {emailSent ? (
            <p>Email sent! I'll get back to you as soon as possible</p>
          ) : (
            <form className="padding-double--top" onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control has-icons-right">
                  <input className={'input is-rounded ' + (errors.fromName ? 'is-danger' : '')} placeholder="Enter your name" name="fromName" type="text" ref={register({ required: true })} />
                  {errors.fromName && <span className="icon is-small is-right"><i className="fas fa-exclamation-triangle"></i></span>}
                </div>
                {errors.fromName && <p className="help is-danger">This field is required</p>}
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-right">
                  <input className={'input is-rounded ' + (errors.fromEmail ? 'is-danger' : '')} placeholder="Enter your email address" name="fromEmail" type="email" ref={register({ required: true })} />
                  {errors.fromEmail && <span className="icon is-small is-right"><i className="fas fa-exclamation-triangle"></i></span>}
                </div>
                {errors.fromEmail && <p className="help is-danger">This field is required</p>}
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control has-icons-right">
                  <textarea className={'textarea ' + (errors.message ? 'is-danger' : '')} placeholder="Say hello..." name="message" ref={register({ required: true })}></textarea>
                  {errors.message && <span className="icon is-small is-right"><i className="fas fa-exclamation-triangle"></i></span>}
                </div>
                {errors.message && <p className="help is-danger">This field is required</p>}
              </div>

              <div className="field">
                <div className="control">
                  <button className={'button is-primary is-rounded ' + (loading ? 'is-loading' : '')}>Submit</button>
                </div>

              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contact;
