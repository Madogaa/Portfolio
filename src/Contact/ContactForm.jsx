import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {

      try {
        const response = await axios.post('https://backend-chi-fawn.vercel.app/send-email', {
          email,
          subject,
          description,
        });

        console.log(response.data.message); // Mensaje de éxito del servidor
      } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
      }
    };

    return (
      <form className='flex flex-col w-full px-6 lg:w-1/2 py-24 m-auto gap-6' onSubmit={handleSubmit}>
        <h1 className='text-3xl font-bold self-center'>Conctactame</h1>
        <span className='grid grid-cols-12'>
          <p className='col-span-5 lg:col-span-2 self-center font-semibold'>Email: </p>
          <input
          className='col-span-7 lg:col-span-8 p-2 border-b-2'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </span>
        <span className='grid grid-cols-12'>
          <p className='col-span-5 lg:col-span-2 self-center font-semibold'>Asunto: </p>
          <input
          className='col-span-7 lg:col-span-8 p-2 border-b-2'
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        </span>
        <span className='grid grid-cols-12'>
          <p className='col-span-5 lg:col-span-2 self-center font-semibold'>Descripcion: </p>
          <textarea
          className='col-span-7 lg:col-span-8 p-2 border-b-2'
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        </span>


        <button type="submit" className='px-5 py-3 font-semibold hover:bg-slate-800 bg-slate-700 w-fit self-center rounded-lg'>Enviar</button>
      </form>
    );
  };

  export default ContactForm;