import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

function DialogDateTime({
  visible,
  setModalVisible,
  date,
  setDate,
  setFormatDate,
  dateSelected,
}) {
  const selectDate = () => {
    const dateRelease = Date.parse(date);
    const dateFormat = new Date(dateRelease);
    const FullDate =
      dateFormat.getUTCDate() +
      '/' +
      (dateFormat.getMonth()+1) +
      '/' +
      dateFormat.getFullYear();
    setModalVisible(!visible);
    dateSelected(FullDate);
    console.log('fulldate' + FullDate);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible(!visible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Chọn ngày sinh</Text>

          <DatePicker locale="vi_VN" mode="date" date={date} onDateChange={setDate} />
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={selectDate}>
            <Text style={styles.textStyle}>Chọn</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    width: 100,
    elevation: 2,
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: '#FFFAEF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default DialogDateTime;
