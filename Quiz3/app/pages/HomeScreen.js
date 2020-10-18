import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSetting}>
        <View style={styles.searchBar}>
          <FontAwesome5
            name={'search1'}
            size={5}
            solid
            color="#EFEFEF"
            style={styles.searchLogo}
          />
          <Text style={styles.textSearchBar}>Search Product</Text>
          <View style={styles.line} />
          <FontAwesome5
            name={'user-circle'}
            size={100}
            solid
            color="#EFEFEF"
            style={styles.icon}
          />
        </View>
        <FontAwesome5
          name={'user-circle'}
          size={100}
          solid
          color="#EFEFEF"
          style={styles.icon}
        />
      </View>
      <FontAwesome5
        name={'user-circle'}
        size={100}
        solid
        color="#EFEFEF"
        style={styles.icon}
      />
      <View style={styles.category}>
        <View style={styles.categoryDetails}>
          <FontAwesome5
            name={'user-circle'}
            size={100}
            solid
            color="#EFEFEF"
            style={styles.icon}
          />
          <Text style={styles.logoText}>Man</Text>
        </View>
        <View style={styles.categoryDetails}>
          <FontAwesome5
            name={'user-circle'}
            size={100}
            solid
            color="#EFEFEF"
            style={styles.icon}
          />
          <Text style={styles.logoText}>Woman</Text>
        </View>
        <View style={styles.categoryDetails}>
          <FontAwesome5
            name={'user-circle'}
            size={100}
            solid
            color="#EFEFEF"
            style={styles.icon}
          />
          <Text style={styles.logoText}>Kids</Text>
        </View>
        <View style={styles.categoryDetails}>
          <FontAwesome5
            name={'user-circle'}
            size={100}
            solid
            color="#EFEFEF"
            style={styles.icon}
          />
          <Text style={styles.logoText}>Home</Text>
        </View>
        <View style={styles.categoryDetails}>
          <FontAwesome5
            name={'user-circle'}
            size={100}
            solid
            color="#EFEFEF"
            style={styles.icon}
          />
          <Text style={styles.logoText}>More</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 35,
  },
  camera: {
    width: 20,
    height: 16,
    marginLeft: 10,
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  categoryDetails: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 14,
  },
  homeImage: {
    width: 365,
    height: 190,
    borderRadius: 7,
    marginTop: 15,
    marginBottom: 10,
  },
  line: {
    height: 16,
    width: 1,
    backgroundColor: '#E6EAEE',
    marginLeft: 114,
    marginRight: 15,
  },
  logoCategory: {
    width: 52,
    height: 52,
    // backgroundColor:'red'
  },
  logoText: {
    color: '#616D80',
    fontSize: 15,
  },
  lonceng: {
    width: 17,
    height: 20,
    marginLeft: 12,
  },
  searchBar: {
    width: 335,
    height: 44,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#727C8E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  searchLogo: {
    width: 16,
    height: 16,
  },
  searchSetting: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSearchBar: {
    fontSize: 15,
    color: '#727C8E',
    marginLeft: 20,
  },
});
