import React, { useState } from 'react';
import { SectionProps } from '../types';
import { InView } from 'react-intersection-observer';
import axios from 'axios';

const Contact: React.FC<SectionProps> = ({ handleSectionChange }) => {
  const [body, setBody] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios({
        url: '/api/contact',
        method: 'POST',
        data: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setBody({
        email: '',
        name: '',
        message: '',
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
  };

  if (isSuccess) {
    return (
      <p className='mx-auto my-8 w-max text-xl'>
        Thanks for reaching out, I&#39;ll get back to you in less than 24 hours!
      </p>
    );
  }

  return (
    <InView threshold={0.2} onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id='contact' className='px-4 pt-16 pb-32'>
          <h2>Let&#39;s Chat!</h2>
          {isSuccess ? (
            <p className='mx-auto my-8 w-max text-xl'>
              Thanks for reaching out, I&#39;ll get back to you in less than 24 hours!
            </p>
          ) : isError ? (
            <p className='mx-auto my-8 w-max text-xl text-red-500'>
              There was an error sending your message, please try again later.
            </p>
          ) : (
            <>
              <form
                className='mx-auto flex max-w-sm flex-col items-center justify-center gap-4 rounded-xl p-6 shadow-lg'
                onSubmit={handleSubmit}
              >
                <p className='mb-8 text-center text-lg'>
                  I am open to opportunities.
                  <br />
                  Feel free to reach out!
                </p>
                <div className='relative w-full'>
                  <input
                    onChange={handleChange}
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email address'
                    className='peer'
                    autoComplete='email'
                    required={true}
                  />
                  <label htmlFor='email'>Email address</label>
                </div>
                <div className='relative w-full'>
                  <input
                    onChange={handleChange}
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Your Name'
                    className='peer'
                    autoComplete='name'
                    required={true}
                  />
                  <label htmlFor='name'>Your Name</label>
                </div>
                <div className='relative w-full'>
                  <textarea
                    onChange={handleChange}
                    name='message'
                    id='message'
                    cols={30}
                    rows={10}
                    placeholder='Your Message for me'
                    className='peer h-48'
                    required={true}
                  />
                  <label htmlFor='message'>Your message for me</label>
                </div>
                <button
                  aria-label='Submit contact form'
                  className='card-btn'
                  type='submit'
                  disabled={isSubmitting}
                >
                  Send{' '}
                </button>
              </form>
            </>
          )}
        </section>
      )}
    </InView>
  );
};

export default Contact;
