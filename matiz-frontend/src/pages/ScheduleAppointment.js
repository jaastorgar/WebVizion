import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ScheduleAppointment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de agendar cita
    alert('Cita agendada con éxito');
  };

  return (
    <div className="schedule-appointment-container">
      <h1>Agendar Cita</h1>
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
            required
          />
        </div>
        <div className="form-group">
          <label>Fecha de la Cita:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="date-picker"
            required
          />
        </div>
        <button type="submit">Agendar Cita</button>
      </form>
    </div>
  );
};

export default ScheduleAppointment;