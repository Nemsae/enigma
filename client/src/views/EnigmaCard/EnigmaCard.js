import React from 'react';

import Card from 'react-toolbox/lib/card/Card';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Input from 'react-toolbox/lib/input/Input';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';
import Button from 'react-toolbox/lib/button/Button';

const todaysDate = new Date(Date.now());
const minimumDate = new Date(todaysDate.setDate(todaysDate.getDate() - 1));

//  TODO: Prop validation
class EnigmaCard extends React.Component {
  render() {
    const { sender, message, date, handleChange, handleToggle } = this.props;
    // console.log('handleChange: ', handleChange);
    // console.log('handleToggle: ', handleToggle);
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
            value={date}
            autoOk={true}
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
  }
}

export default EnigmaCard;
