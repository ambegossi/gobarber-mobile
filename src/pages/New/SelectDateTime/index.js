import React, { useState } from 'react';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  const onDateChange = (event, selectedDate) => {
    setDate(selectedDate || date);
  };

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={onDateChange} />
      </Container>
    </Background>
  );
}
