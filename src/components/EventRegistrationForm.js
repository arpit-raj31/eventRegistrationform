import React, { useState } from 'react';
import { Paper} from '@material-ui/core';
import useForm from '../hooks/useForm';
import validate from '../hooks/validateForm';

const EventRegistrationForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validate);
  const [isAttendingWithGuest, setIsAttendingWithGuest] = useState(false);

  function submit() {
    // Handle form submission
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
    <Paper elevation={3} style={{  padding: '20px', width: '300px',alignItems:'center' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Name:
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </label>
          {errors.name && <p style={{ color: 'ed' }}>{errors.name}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Email:
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </label>
          {errors.email && <p style={{ color: 'ed' }}>{errors.email}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Age:
            <input
              type="number"
              name="age"
              value={values.age}
              onChange={handleChange}
              style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </label>
          {errors.age && <p style={{ color: 'ed' }}>{errors.age}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Are you attending with a guest?
            <select
              name="attendingWithGuest"
              value={values.attendingWithGuest}
              onChange={(e) => {
                handleChange(e);
                setIsAttendingWithGuest(e.target.value === 'Yes');
              }}
              style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
        </div>
        {isAttendingWithGuest && (
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Guest Name:
              <input
                type="text"
                name="guestName"
                value={values.guestName}
                onChange={handleChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </label>
            {errors.guestName && <p style={{ color: 'ed' }}>{errors.guestName}</p>}
          </div>
        )}
        <button type="submit" style={{ padding: '5px 10px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50' }}>
          Submit
        </button>
      </form>
    </Paper>
    </div>
  );
};

export default EventRegistrationForm;