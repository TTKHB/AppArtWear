import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  FlatList,
  TouchableOpacity,
  DrawerLayoutAndroid,
  StyleSheet,
  ScrollView,
  Image,
  Animated,
} from 'react-native';
import {Header, SearchBar, ListItem, Icon, Button} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import {List} from 'react-native-paper';
import contents from './../../assets/data/contents';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d272',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455721e29d272',
    title: 'Third Itemsad',
  },
];

const ProductFoundScreen = () => {
  const [search, setSearcher] = useState(null);
  const [content, setContent] = useState(contents);
  const [row, setRow] = useState(false);
  const drawer = useRef(null);

  const [drawerPosition, setDrawerPosition] = useState('right');

  //click item and checked
  function CheckedItem(i, j) {
    let data = [...content];
    let checked = data[i].body[j].checked;
    data[i].body[j].checked = !checked;
    setContent(data);
  }

  const searchedCategory = text => {
    setSearcher(text);
    // let searchedData = DATACategory.filter(item => item.title.includes(text));
    // setCategory(searchedData);
    // console.log(searchedData);
  };
  function ChangeNumList() {
    setRow(!row);
  }

  //render item
  const renderItemGrid = ({item}) => (
    <ScrollView>
      <ItemGrid title={item.title} />
    </ScrollView>
  );
  const renderItemList = ({item}) => (
    <ScrollView>
      <ItemList title={item.title} />
    </ScrollView>
  );

  const ItemGrid = ({title}) => (
    <TouchableOpacity>
      <View style={styles.itemStyleTwoColumn}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://lh3.googleusercontent.com/mcbuQfAeNVUJn9CZAQ3Khn1AWFQWMX7yVRFrfUfEPRircDlahZbTL_enHINICNQzRGtYozhiTzHonHBNQVrjZfbMH68ilOmP=w300-rw',
          }}
          resizeMode={'stretch'}
        />
        <View
          style={{
            alignSelf: 'flex-start',
            marginHorizontal: 5,
            marginTop: 5,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Máy xay sinh tố
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'peru'}}>
            600.000đ
          </Text>
          <Text
            style={{
              color: 'grey',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
              fontSize: 14,
            }}>
            1.200.000đ
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const ItemList = ({title}) => (
    <TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 5,
          backgroundColor: 'white',
        }}>
        <Image
          style={{width: 120, height: 120}}
          source={{
            uri: 'https://lh3.googleusercontent.com/mcbuQfAeNVUJn9CZAQ3Khn1AWFQWMX7yVRFrfUfEPRircDlahZbTL_enHINICNQzRGtYozhiTzHonHBNQVrjZfbMH68ilOmP=w300-rw',
          }}
          resizeMode={'stretch'}
        />
        <View style={{flexDirection: 'column', margin: 5}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Máy xay sinh tố
          </Text>
          <Text
            style={{
              color: 'peru',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 10,
            }}>
            600.000đ
          </Text>
          <Text
            style={{
              color: 'grey',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
              fontSize: 14,
            }}>
            1.200.000đ
          </Text>
        </View>
        {/* <View
          style={{
            alignSelf: 'flex-start',
            marginHorizontal: 5,
            marginTop: 5,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Máy xay sinh tố
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'peru'}}>
            600.000đ
          </Text>
          <Text
            style={{
              color: 'grey',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
              fontSize: 14,
            }}>
            1.200.000đ
          </Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <ScrollView style={{alignSelf: 'stretch', marginTop: 20}}>
        {content
          ? content.map((item, i) => {
              return (
                <List.Accordion
                  key={i}
                  titleStyle={{color: 'black', fontWeight: 'bold'}}
                  style={{
                    backgroundColor: 'white',
                  }}
                  title={item.title}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                    }}>
                    {item.body.map((item, j) => {
                      return (
                        <TouchableOpacity
                          key={j}
                          onPress={() => CheckedItem(i, j)}>
                          <View
                            style={{
                              backgroundColor: 'white',
                              borderColor: 'grey',
                              padding: 10,
                              margin: 4,
                              borderWidth: item.checked ? 2 : 0.4,
                            }}>
                            <Text style={{fontSize: 15}}>{item.title}</Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </List.Accordion>
              );
            })
          : null}
        <View style={{height: 96}} />
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
        }}>
        <Button
          title="Xóa bộ lộc"
          buttonStyle={styles.formButton}
          titleStyle={{
            color: 'brown',
          }}
        />
        <Button
          title="Áp dụng"
          buttonStyle={styles.formButton}
          titleStyle={{
            color: 'brown',
          }}
        />
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={330}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={{flex: 1}}>
        <Header
          containerStyle={{
            backgroundColor: 'white',
          }}
          leftComponent={{
            icon: 'angle-left',
            type: 'font-awesome',
            size: 40,
            marginTop: 15,
            marginLeft: 5,
          }}
          centerComponent={
            <SearchBar
              autoFocus={true}
              placeholder="Tìm kiếm"
              onChangeText={searchedCategory}
              value={search}
              containerStyle={styles.searchBarStyle}
              inputContainerStyle={styles.searchBarInputStyle}
              inputStyle={{
                height: 50,
              }}
              searchIcon={{type: 'font-awesome', name: 'search', size: 18}}
            />
          } //centerComponent
        />
        {/* view dropdownbox */}
        <View style={styles.containerBellowHeader}>
          <View style={{}}>{/* here */}</View>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 10,
              height: 50,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => ChangeNumList()}>
              <View style={{marginHorizontal: 10}}>
                <Icon
                  name={!row ? 'grid-outline' : 'list-outline'}
                  type="ionicon"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>bộ lộc</Text>
                <Icon name="filter-outline" type="ionicon" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/*end view container dropdownbox*/}
        {/* container list products */}
        <View style={{marginTop: 10, flex: 1}}>
          {!row ? (
            <FlatList
              key={'_'}
              data={DATA}
              renderItem={renderItemGrid}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          ) : (
            <FlatList
              key={'#'}
              data={DATA}
              renderItem={renderItemList}
              keyExtractor={item => item.id}
            />
          )}
        </View>
      </View>
      {/*end container  */}
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: 'white',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  formButton: {
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'brown',
    borderWidth: 1,
    marginHorizontal: 4,
  },
  searchBarStyle: {
    borderTopWidth: 0,
    marginTop: 5,
    backgroundColor: 'white',
    borderWidth: 0,
    borderBottomColor: 'white',
  },
  searchBarInputStyle: {
    width: width / 1.3,
    height: 50,
    backgroundColor: 'white',
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
  },
  containerBellowHeader: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  itemStyleTwoColumn: {
    backgroundColor: 'white',
    margin: 3,
    width: width / 2 - 6,
    height: 300,
    alignItems: 'center',
  },
  tinyLogo: {
    width: width / 2 - 6,
    height: 200,
  },
});

export default ProductFoundScreen;
