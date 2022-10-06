import React from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';

const StudentScreen = (props) => {
  const [update, setUpdate] = React.useState('');
  const [bus1, setbus1] = React.useState('');
  const [bus2, setbus2] = React.useState('');
  const [bus3, setbus3] = React.useState('');
  const [bus4, setbus4] = React.useState('');
  const [bus5, setbus5] = React.useState('');
  const [bus6, setbus6] = React.useState('');
  const [bus7, setbus7] = React.useState('');
  const [bus8, setbus8] = React.useState('');
  const [bus9, setbus9] = React.useState('');
  const [bus10, setbus10] = React.useState('');
  const [bus11, setbus11] = React.useState('');
  const [bus12, setbus12] = React.useState('');
  const [bus13, setbus13] = React.useState('');
  const [bus14, setbus14] = React.useState('');
  const [bus15, setbus15] = React.useState('');
  const [bus16, setbus16] = React.useState('');
  const [bus17, setbus17] = React.useState('');
  const [bus18, setbus18] = React.useState('');
  const [bus19, setbus19] = React.useState('');
  const [bus20, setbus20] = React.useState('');
  axios
    .get('https://fingobox.com/api/database/rows/61/KgbX373We7y6rOiGDNwroY/53')
    .then((res) => {
      console.log('res.data: ', res.data);
      setUpdate(res.data[0].columns.realdate);
      if (res.data[0].columns.bus1 == '') setbus1('N/A');
      else setbus1(res.data[0].columns.bus1);
      if (res.data[0].columns.bus2 == '') setbus2('N/A');
      else setbus2(res.data[0].columns.bus2);
      if (res.data[0].columns.bus3 == '') setbus3('N/A');
      else setbus3(res.data[0].columns.bus3);
      if (res.data[0].columns.bus4 == '') setbus4('N/A');
      else setbus4(res.data[0].columns.bus4);
      if (res.data[0].columns.bus5 == '') setbus5('N/A');
      else setbus5(res.data[0].columns.bus5);
      if (res.data[0].columns.bus6 == '') setbus6('N/A');
      else setbus6(res.data[0].columns.bus6);
      if (res.data[0].columns.bus7 == '') setbus7('N/A');
      else setbus7(res.data[0].columns.bus7);
      if (res.data[0].columns.bus8 == '') setbus8('N/A');
      else setbus8(res.data[0].columns.bus8);
      if (res.data[0].columns.bus9 == '') setbus9('N/A');
      else setbus9(res.data[0].columns.bus9);
      if (res.data[0].columns.bus10 == '') setbus10('N/A');
      else setbus10(res.data[0].columns.bus10);
      if (res.data[0].columns.bus11 == '') setbus11('N/A');
      else setbus11(res.data[0].columns.bus11);
      if (res.data[0].columns.bus12 == '') setbus12('N/A');
      else setbus12(res.data[0].columns.bus12);
      if (res.data[0].columns.bus13 == '') setbus13('N/A');
      else setbus13(res.data[0].columns.bus13);
      if (res.data[0].columns.bus14 == '') setbus14('N/A');
      else setbus14(res.data[0].columns.bus14);
      if (res.data[0].columns.bus15 == '') setbus15('N/A');
      else setbus15(res.data[0].columns.bus15);
      if (res.data[0].columns.bus16 == '') setbus16('N/A');
      else setbus16(res.data[0].columns.bus16);
      if (res.data[0].columns.bus17 == '') setbus17('N/A');
      else setbus17(res.data[0].columns.bus17);
      if (res.data[0].columns.bus18 == '') setbus18('N/A');
      else setbus18(res.data[0].columns.bus18);
      if (res.data[0].columns.bus19 == '') setbus19('N/A');
      else setbus19(res.data[0].columns.bus19);
      if (res.data[0].columns.bus20 == '') setbus20('N/A');
      else setbus20(res.data[0].columns.bus20);
      setUpdate(res.data[0].columns.realdate);
    });

  const CONTENT = {
    tableHead: ['Bus Departs at 2:50 P.M.'],
    tableData: [
      ['1.', bus1, '11.', bus11],
      ['2.', bus2, '12.', bus12],
      ['3.', bus3, '13.', bus13],
      ['4.', bus4, '14.', bus14],
      ['5.', bus5, '15.', bus15],
      ['6.', bus6, '16.', bus16],
      ['7.', bus7, '17.', bus17],
      ['8.', bus8, '18.', bus18],
      ['9.', bus9, '19.', bus19],
      ['10.', bus10, '20.', bus20],
    ],
  };
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <Image style={styles.image} source={require('../assets/busLoop.png')} />
      <Text style={styles.lastUpdatedText}> Last Updated: {update} </Text>
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={CONTENT.tableHead}
            flexArr={[1]}
            style={styles.head}
            textStyle={styles.headerText}
          />
          <TableWrapper style={styles.wrapper}>
            <Rows
              data={CONTENT.tableData}
              flexArr={[1, 2, 1, 2]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
      <TouchableOpacity
        style={styles.infoBtn}
        onPress={() => props.navigation.navigate('MoreInfoScreen')}
        title="Bus Info">
        <Text style={styles.infoBtnText}> More Bus Info </Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.returnBtnView}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('LoginScreen')}
          title="Return to Login">
          <Text style={styles.returnBtnText}> Return To Login </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
  },

  image: {
    marginTop: 40,
    marginBottom: 40,
    width: 300,
    height: 200,
  },

  lastUpdatedText: {
    // fontFamily: 'DamascusBold',
    fontSize: 20,
    fontWeight: 'bold',
  },

  infoBtn: {
    marginTop: 15,
    width: '35%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bec2cb',
  },

  infoBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignContent: 'center',
  },

  returnBtnView: {
    position: 'absolute',
    bottom: '5%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#a80b18',
  },

  returnBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c0c0c0',
    alignContent: 'center',
    padding: 3,
  },
  //table Stuff
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 20,
    backgroundColor: '#C0C0C0',
    width: '90%',
  },
  head: { height: 40, backgroundColor: '#a80b18', color: '#bec2cb' },
  wrapper: { flexDirection: 'row' },
  row: { height: 28 },
  text: { textAlign: 'center' },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#bec2cb',
    textAlign: 'center',
  },
});

export default StudentScreen;
