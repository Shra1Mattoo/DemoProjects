import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native';
import {View, StyleSheet, Text} from 'react-native';

import Pie from 'react-native-pie';

const Data = [
  {percentage: 50, color: '#14248A'},
  {percentage: 20, color: '#16324F'},
  {percentage: 40, color: '#594236'},
];

export default Chart => {
  return (
    
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.container2}>
          <View style={styles.headerStyle}>
            <Text style={styles.header}>Pie Chart</Text>
          </View>
          <View style={styles.charts}>
            <Pie
              sections={Data}
              radius={150}
              innerRadius={0}
              dividerSize={0.5}
              backgroundColor={'#FCCBD5'}
            />
            <Text style={styles.text}>{Data[0].percentage}%</Text>
            <Text style={styles.text2}>{Data[1].percentage}%</Text>
            <Text style={styles.text3}>{Data[2].percentage}%</Text>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container2: {
    flex: 1,
  },
  headerStyle: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: 60,
    fontWeight: '500',
  },
  charts: {
    flex: 0.8,
    alignItems: 'center',
    marginTop: 25,
  },
  text: {
    color: 'white',
    fontSize: 40,
    marginTop: -240,
    marginRight: 90,
  },
  text2: {
    color: 'white',
    fontSize: 40,
    marginTop: 100,
    marginRight: 110,
  },
  text3: {
    color: 'white',
    fontSize: 40,
    marginTop: -120,
    marginLeft: 170,
  },
});
