import React from 'react';
import { SectionProps } from '../types';
import { useForm, ValidationError } from '@formspree/react';
import { InView } from 'react-intersection-observer';

const Contact: React.FC<SectionProps> = ({ handleSectionChange }) => {
  const [state, handleSubmit] = useForm('xbjqewjn');

  if (state.succeeded) {
    return (
      <p>
        Thanks for reaching out, I&#39;ll get back to you in less than 24 hours!
      </p>
    );
  }

  return (
    <InView onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id='contact' className='pt-16 pb-32'>
          <h2>Let&#39;s Chat!</h2>
          <form
            className='flex flex-col gap-4 justify-center items-center max-w-sm mx-auto font-semibold p-12 rounded-xl shadow-lg'
            onSubmit={handleSubmit}
          >
            <div className='relative w-full'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email address'
                className='peer'
                autoComplete='email'
              />
              <label htmlFor='email'>Email address</label>
              <ValidationError
                prefix='email'
                field='email'
                errors={state.errors}
              />
            </div>
            <div className='w-full relative'>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Your Name'
                className='peer'
                autoComplete='name'
              />
              <label htmlFor='name'>Your Name</label>
              <ValidationError
                prefix='name'
                field='name'
                errors={state.errors}
              />
            </div>
            <div className='relative'>
              <textarea
                name='message'
                id='message'
                cols={30}
                rows={10}
                placeholder='Your Message for me'
                className='peer h-48'
              />
              <label htmlFor='message'>Your message for me</label>
              <ValidationError
                prefix='message'
                field='message'
                errors={state.errors}
              />
            </div>
            <button
              aria-label='Submit contact form'
              className='flex gap-3 items-center bg-purple max-w-max py-2 px-8 rounded-lg text-white font-bold shadow-md hover:bg-opacity-75 hover:shadow-lg hover:scale-110 transition-all'
              type='submit'
              disabled={state.submitting}
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
