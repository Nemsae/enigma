import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-toolbox/lib/card/Card';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Input from 'react-toolbox/lib/input/Input';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import Button from 'react-toolbox/lib/button/Button';

const todaysDate = new Date(Date.now());
const minimumDate = new Date(todaysDate.setDate(todaysDate.getDate() - 1));

//  TODO: Prop validation
const EnigmaCard = (props) => {
  const { sender, message, date, handleChange, handleToggle } = props;
  return (
    <div>
      <Card style={{ width: '350px', padding: '15px 15px 0px 15px' }}>
        Tovias Enigma
        <Input
          type='text'
          label='Name'
          id='sender'
          value={sender}
          icon={<Avatar icon={<span>{sender[0]}</span>} />}
          onChange={handleChange}
          required
        />
        <Input
          type='text'
          label='Message'
          id='message'
          value={message}
          maxLength={120}
          onChange={handleChange}
          multiline
          required
        />
        <DatePicker
          label='Expiration date'
          minDate={minimumDate}
          id='date'
          autoOk={true}
          value={date}
          onChange={handleChange}
          sundayFirstDayOfWeek
          required
        />
        <CardActions>
          <Button label='ENCRYPT' id='encrypt' onClick={handleToggle} />
          <Button label='DECRYPT' id='decrypt' onClick={handleToggle} />
        </CardActions>
      </Card>
    </div>
  );
};

EnigmaCard.propTypes = {
  sender: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EnigmaCard;
