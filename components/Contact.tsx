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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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

  if (isError) {
    return (
      <p className='mx-auto my-8 w-max text-xl text-red-500'>
        There was an error sending your message, please try again later.
      </p>
    );
  }

  return (
    <InView onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id='contact' className='pt-16 pb-32'>
          <h2>Let&#39;s Chat!</h2>
          <p className='mb-8 text-lg text-center'>
            I am open to opportunities both full-time and freelance work.
            <br />
            If you&#39;d like to work together, please reach out!
          </p>
          <form
            className='flex flex-col gap-4 justify-center items-center max-w-sm mx-auto p-12 rounded-xl shadow-lg'
            onSubmit={handleSubmit}
          >
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
            <div className='w-full relative'>
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
            <div className='relative'>
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
              className='flex gap-3 items-center bg-purple max-w-max py-2 px-8 rounded-lg text-white font-bold shadow-md hover:bg-opacity-80 hover:shadow-lg hover:scale-110 transition-all'
              type='submit'
              disabled={isSubmitting}
            >
              Send{' '}
            </button>
          </form>
        </section>
      )}
    </InView>
  );
};

export default Contact;
