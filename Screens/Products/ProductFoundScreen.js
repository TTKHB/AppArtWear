import React, {useState, useRef, useEffect} from 'react';
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
import ItemGrid from './../../components/Home/ItemGrid';
import ItemList from './../../components/Home/ItemList';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import axios from './../../assets/data/client';
import baseURL from './../../assets/common/baseUrl';

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

const DataMenuItem = [
  {
    id: 1,
    title: 'Mặc định',
  },
  {
    id: 2,
    title: 'Phổ biến nhất',
  },
  {
    id: 3,
    title: 'Khuyến mãi tốt nhất',
  },
  {
    id: 4,
    title: 'Giá tăng dần',
  },
  {
    id: 5,
    title: 'Giá giảm dần',
  },
  {
    id: 6,
    title: 'Mới nhất',
  },
];

const ProductFoundScreen = ({navigation, route}) => {
  const title = route.params.title;

  const [search, setSearcher] = useState(title);
  const [products, setProducts] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);
  const [content, setContent] = useState(contents);
  const [row, setRow] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(DataMenuItem[0]);
  const drawer = useRef(null);

  const [drawerPosition, setDrawerPosition] = useState('right');
  useEffect(() => {
    const productSearch = products.filter(product => {
      const categoryName = product.categories_id;
      if (categoryName) {
        return (
          product.ten.includes(title) || product.ten.includes(categoryName.name)
        );
      } else {
        return product.ten.includes(title);
      }
    });
    setProductFiltered(productSearch);
  }, [products]);

  useEffect(() => {
    axios
      .get(`${baseURL}products`)
      .then(function (response) {
        // handle success
        console.log('hello', response.data);
        setProducts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  //click item and checked
  function CheckedItem(i, j) {
    let data = [...content];
    let checked = data[i].body[j].checked;
    data[i].body[j].checked = !checked;
    setContent(data);
  }

  const searchedCategory = text => {
    setSearcher(text);
    console.log('test', text);
  };
  function ChangeNumList() {
    setRow(!row);
  }

  //render item
  const renderItemGrid = ({item}) => (
    <ScrollView>
      <ItemGrid navigation={navigation} item={item} styles={styles} />
    </ScrollView>
  );
  const renderItemList = ({item}) => (
    <ScrollView>
      <ItemList navigation={navigation} item={item} />
    </ScrollView>
  );

  // open when clicked into button filter
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

  const [visible, setVisible] = useState(false);

  const hideMenu = data => {
    // console.log('hide', data);

    setVisible(false);
    if (data) {
      setSelectedMenuItem(data);
    }
  };

  const showMenu = () => setVisible(true);

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
            <TouchableOpacity
              onPress={() => {
                console.log('clcik');
                navigation.replace('UserNavigator', {
                  screen: 'SearchScreen',
                  params: {title: search},
                });
              }}>
              <SearchBar
                autoFocus={true}
                placeholder="Tìm kiếm"
                onChangeText={searchedCategory}
                value={search}
                disabled
                autoFocus={false}
                containerStyle={styles.searchBarStyle}
                inputContainerStyle={styles.searchBarInputStyle}
                inputStyle={{
                  height: 50,
                }}
                searchIcon={{type: 'font-awesome', name: 'search', size: 18}}
              />
            </TouchableOpacity>
          } //centerComponent
        />
        {/* view dropdownbox */}
        <View style={styles.containerBellowHeader}>
          {/* left */}
          <View style={{}}>
            <TouchableOpacity onPress={() => showMenu()}>
              <View style={{marginHorizontal: 10, flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>
                  {selectedMenuItem.title ? selectedMenuItem.title : ''}
                </Text>
                <Icon
                  style={{marginLeft: 5}}
                  name={'caret-down'}
                  size={18}
                  type="font-awesome"
                />
              </View>
            </TouchableOpacity>
          </View>
          {/* right */}
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
        <Menu
          visible={visible}
          style={{width: width}}
          // anchor={<Text onPress={showMenu}>Show menu</Text>}
          onRequestClose={hideMenu}>
          {/* <MenuItem onPress={hideMenu}>Menu item 1</MenuItem> */}

          {DataMenuItem.map((item, index) => {
            return (
              <MenuItem
                key={item.id}
                style={{width: width}}
                textStyle={
                  selectedMenuItem.id == item.id
                    ? {color: '#8D6E63', fontWeight: 'bold'}
                    : null
                }
                onPress={() => hideMenu(item)}>
                {item.title}
              </MenuItem>
            );
          })}
        </Menu>

        {/*end view container dropdownbox*/}
        {/* container list products */}
        <View style={{marginTop: 10, flex: 1}}>
          {!row ? (
            <FlatList
              key={'_'}
              data={productFiltered}
              renderItem={renderItemGrid}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          ) : (
            <FlatList
              key={'#'}
              data={productFiltered}
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
