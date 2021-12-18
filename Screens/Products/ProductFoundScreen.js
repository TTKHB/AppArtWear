import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  DrawerLayoutAndroid,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {Header, SearchBar, ListItem, Icon, Button} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import contents from '../../assets/data/contents';
import ItemGrid from '../../components/Home/ItemGrid';
import ItemList from '../../components/Home/ItemList';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import axios from '../../assets/data/client';
import baseURL from '../../assets/common/baseUrl';
import AccordionContainer from '../../components/Home/FormContainer/AccordionContainer';
import colorsFIlter from '../../assets/data/Filter/colorsFIlter';
import SizeFilter from '../../assets/data/Filter/SizeFilter';
import ItemColor from '../../components/Home/Item/ItemColor';
import DataMenuItem from '../../assets/data/Filter/DataMenuItem';
import ItemSize from '../../components/Home/Item/ItemSize';
import ProductNotFound from '../../components/ProductMenu/ProductNotFound';
import ActivityIndiCatorScreen from '../../Shared/ActivityIndicator/ActivityIndiCatorScreen';

const ProductFoundScreen = ({navigation, route}) => {
  const title = route.params.title;

  const [search, setSearcher] = useState(title);
  const [products, setProducts] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);
  const [productAfterFilter, setProductAfterFiltered] = useState([]);
  const [content, setContent] = useState(contents);
  const [loading, setLoading] = useState(false);
  const [row, setRow] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(DataMenuItem[0]);
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('right');

  useEffect(() => {
    getAllSearchProducts();
  }, [products]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}products`)
      .then(function (response) {
        // handle success
        console.log('hello', response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoading(false);
      });
  }, []);
  const getAllSearchProducts = () => {
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
    setProductAfterFiltered(productSearch);
  };

  const getPopular = () => {
    const product = productAfterFilter.sort((a, b) => {
      console.log(
        '🚀 ~ file: ProductFoundScreen.js ~ line 82 ~ product ~ a',
        a,
      );
      return a.viewer > b.viewer ? -1 : 0;
    });
    setProductFiltered(product);
  };

  const getPricesGraduallyInCrease = () => {
    const product = productAfterFilter.sort((a, b) => {
      return a.gia < b.gia ? -1 : 0;
    });
    setProductFiltered(product);
  };

  const getPriceDescending = () => {
    const product = productAfterFilter.sort((a, b) => {
      return a.gia > b.gia ? -1 : 0;
    });
    setProductFiltered(product);
  };

  const getProductsLastest = () => {
    const product = productAfterFilter.sort((a, b) => {
      return a.ngaytao > b.ngaytao ? -1 : 0;
    });
    console.log(
      '🚀 ~ file: ProductFoundScreen.js ~ line 109 ~ product ~ product',
      product,
    );
    setProductFiltered(product);
  };

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

  const SubmitApply = () => {
    let filterColor = [];
    let filterSize = [];

    //get all colors is checked
    for (let i = 0; i < colorsFIlter.length; i++) {
      const item = colorsFIlter[i];
      console.log(
        '🚀 ~ file: ProductFoundScreen.js ~ line 93 ~ SubmitApply ~ item',
        item,
      );
      if (item.checked) {
        filterColor.push(item);
      }
    }
    //get all sizes is checked
    for (let i = 0; i < SizeFilter.length; i++) {
      const item = SizeFilter[i];
      if (item.checked) {
        filterSize.push(item);
      }
    }

    let data_product = productAfterFilter.filter(item => {
      console.log(
        '🚀 ~ file: ProductFoundScreen.js ~ line 112 ~ SubmitApply ~ product',
        item,
      );

      //handle colors
      if (item.product) {
        for (let i = 0; i < item.product.length; i++) {
          const itemofproduct = item.product[i];
          console.log(
            '🚀 ~ file: ProductFoundScreen.js ~ line 118 ~ SubmitApply ~ filterColor',
            filterColor,
          );

          for (var j = 0; j < filterColor.length; j++) {
            const itemColor = filterColor[j];
            if (itemofproduct.mau == itemColor.color) {
              return true;
            }
          }
        }
      }

      //handle sizes
      if (item.kichthuoc) {
        for (let i = 0; i < item.kichthuoc.length; i++) {
          const itemSize = item.kichthuoc[i];
          console.log(
            '🚀 ~ file: ProductFoundScreen.js ~ line 138 ~ SubmitApply ~ itemSize',
            itemSize,
          );
          // if(itemSize == )
          for (let j = 0; j < filterSize.length; j++) {
            const itemFilterSize = filterSize[j];
            console.log(
              '🚀 ~ file: ProductFoundScreen.js ~ line 141 ~ SubmitApply ~ itemFilterSize',
              itemFilterSize,
            );

            if (itemFilterSize.size == itemSize) {
              return true;
            }
          }
        }
      }
    });
    console.log(
      '🚀 ~ file: ProductFoundScreen.js ~ line 123 ~ SubmitApply ~ data_product',
      data_product,
    );
    if (data_product.length > 0) {
      setProductFiltered(data_product);
      showToastWithGravityAndOffset('Đã tìm thấy sản phẩm chọn lộc');
    } else {
      showToastWithGravityAndOffset('Không tìm thấy kết quả');
    }
  };

  const showToastWithGravityAndOffset = toast => {
    ToastAndroid.showWithGravityAndOffset(
      toast,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
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
      <ScrollView style={{alignSelf: 'stretch', marginTop: (20 * width) / 300}}>
        <AccordionContainer title={'màu'}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {colorsFIlter.map((item, index) => (
              <ItemColor key={index} item={item} />
            ))}
          </View>
        </AccordionContainer>
        <AccordionContainer title={'kích cỡ'}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {SizeFilter.map((item, index) => (
              <ItemSize key={index} item={item} />
            ))}
          </View>
        </AccordionContainer>

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
          onPress={SubmitApply}
        />
      </View>
    </View>
  );

  const [visible, setVisible] = useState(false);

  const handleMenu = data => {
    if (data) {
      switch (data.id) {
        case 1:
          getAllSearchProducts();
          break;
        case 2:
          getPopular();
          break;
        case 3:
          break;
        case 4:
          getPricesGraduallyInCrease();
          break;
        case 5:
          getPriceDescending();
          break;
        case 6:
          getProductsLastest();
          break;
      }
    }
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
          leftComponent={
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon
                name="angle-left"
                size={40}
                type="font-awesome"
                color="#517fa4"
                style={{marginTop: 15, marginLeft: 5}}
              />
            </TouchableOpacity>

            //   {
            //   icon: 'angle-left',
            //   type: 'font-awesome',
            //   size: 40,
            //   marginTop: 15,
            //   marginLeft: 5,
            // }
          }
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
        {/* header */}
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
          onRequestClose={handleMenu}>
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
                onPress={() => handleMenu(item)}>
                {item.title}
              </MenuItem>
            );
          })}
        </Menu>
        {/*end view container dropdownbox*/}
        {/* container list products */}

        {loading ? (
          <ActivityIndiCatorScreen />
        ) : (
          <View
            style={{
              marginTop: 10,
              flex: 1,
            }}>
            {productFiltered.length > 0 ? (
              !row ? (
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
              )
            ) : (
              <ProductNotFound />
            )}
          </View>
        )}
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
