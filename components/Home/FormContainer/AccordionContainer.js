import React from 'react';
import {View, Text} from 'react-native';
import {List} from 'react-native-paper';

const AccordionContainer = ({children, title}) => {
  return (
    <List.Accordion
      titleStyle={{color: 'black', fontWeight: 'bold'}}
      style={{
        backgroundColor: 'white',
      }}
      title={title ? title : ''}>
      {children}
    </List.Accordion>
  );
};

export default AccordionContainer;
