import React, { useState } from 'react';
import axios from 'axios';
import './email.css';

const EmailForm = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/email/send', { to, subject, message });
      setResponseMessage(res.data.message);
    } catch (error) {
      setResponseMessage('Failed to send email');
    }
  };

  return (


    <div className='emailnaraine'>

      <div className='form1'>
      </div>

      <div className='form2'>
        <h2>Send an Email</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Recipient"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="phone"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            draggable={false}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>

    </div>
  );
};

export default EmailForm;
