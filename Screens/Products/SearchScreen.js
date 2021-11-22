import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Header, SearchBar, ListItem, Icon} from 'react-native-elements';
import axios from '../../assets/data/client';
import baseURL from './../../assets/common/baseUrl';
import {nonAccentVietnamese} from '../../utils/Methods';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('window');

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
];

const DATACategory = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'the loai1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'the loaiabc',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'abcsc',
  },
];

const SearchScreen = ({navigation, route}) => {
  const title = route.params ? route.params.title : '';
  console.log('title', title);
  console.log('params', route.params);
  const [search, setSearcher] = useState(title || '');
  const [category, setCategory] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [products, setProducts] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyExpanded, setHistoryExpaned] = useState([]);
  console.log('history', history);

  useEffect(() => {
    console.log('fetch api');
    axios
      .get(`${baseURL}products`)
      .then(function (response) {
        // handle success
        console.log('hello', response);
        setProducts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    axios
      .get(`${baseURL}categories`)
      .then(function (response) {
        // handle success
        console.log('hello', response);
        setCategory(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    getData();

    // console.log('a', mergedData);
    // setCategory([...mergedData]);
    return () => {
      setProducts([]);
      setCategory([]);
    };
  }, []);

  useEffect(() => {
    products.forEach(product => {
      category.push({_id: product.id, name: product.ten});
      setCategoryFilter([...category]);
    });
    if (search) {
      let searcher = nonAccentVietnamese(search);

      let searchedData = category.filter(item => {
        let name = nonAccentVietnamese(item.name);

        return name.includes(searcher);
      });

      setCategoryFilter([...searchedData]);
    }
  }, [products, category]);

  //handle list of word search
  useEffect(async () => {
    console.log('hello');
    const dataWord = (await AsyncStorage.getItem('WORD_SEARCH')) || [];
    console.log(
      '🚀 ~ file: SearchScreen.js ~ line 112 ~ useEffect ~ dataWord',
      dataWord,
    );
    const wordReversed = await [...JSON.parse(dataWord)].reverse();

    const sliceWord = wordReversed.slice(0, 4);
    setHistory(wordReversed || []);
    setHistoryExpaned(sliceWord || []);

    return () => {
      setHistory([]);
    };
  }, []);

  const renderItem = ({item}) => <Item title={item.title} />;

  const renderCategory = ({item}) => <Caterogy title={item.name} />;

  const searchedCategory = text => {
    let wordSearch = nonAccentVietnamese(text);
    console.log('text', wordSearch);

    setSearcher(text);

    let searchedData = category.filter(item => {
      let name = nonAccentVietnamese(item.name);
      console.log('name', name);

      return name.includes(wordSearch);
    });

    setCategoryFilter([...searchedData]);
  };

  const handleClickedItem = async title => {
    AsyncStorage.getItem('WORD_SEARCH', (err, result) => {
      console.log(
        '🚀 ~ file: SearchScreen.js ~ line 150 ~ AsyncStorage.getItem ~ result',
        result,
      );
      const arrTitle = [{title: title}];

      if (result !== null) {
        const arrHistory = JSON.parse(result);
        let isTitle = false;
        for (let i = 0; i < arrHistory.length; i++) {
          if (arrHistory[i].title == title) {
            console.log('test', arrHistory[i]);
            // xoa item tại index
            arrHistory.splice(i, 1);

            console.log('push concat', arrHistory);

            isTitle = true;
          }
        }

        console.log('test ha', arrHistory);

        if (!isTitle) {
          console.log('concat', ...arrTitle);
          var newArrHistory = arrHistory.concat(arrTitle);
          AsyncStorage.setItem('WORD_SEARCH', JSON.stringify(newArrHistory));
          console.log('ttitle1', newArrHistory);
        } else {
          console.log('ttitle2');
          var newArrHistory = arrHistory.concat(arrTitle);
          AsyncStorage.setItem('WORD_SEARCH', JSON.stringify(newArrHistory));
        }

        // console.log('reuslt', result);
      } else {
        const arrHistory = [];
        var newArrHistory = arrHistory.concat(arrTitle);
        AsyncStorage.setItem('WORD_SEARCH', JSON.stringify(newArrHistory));
      }
    });
    navigation.navigate('UserNavigator', {
      screen: 'ProductFoundScreen',
      params: {title: title},
    });
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('WORD_SEARCH');
      if (value !== null) {
        console.log('value', value);
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  const Item = ({title}) => (
    <TouchableOpacity onPress={() => handleClickedItem(title)}>
      <ListItem bottomDivider>
        <Icon name="time-outline" type="ionicon" color={'grey'} />
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );

  const Caterogy = ({title}) => (
    <TouchableOpacity onPress={() => handleClickedItem(title)}>
      <ListItem bottomDivider>
        <Icon name="search" type="ionicon" color={'black'} />
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>
          <ListItem.Title style={{marginTop: 5}}>
            Trong sản phẩm ...
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );

  return (
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
          <SearchBar
            autoFocus={true}
            placeholder="Tìm kiếm"
            onChangeText={searchedCategory}
            value={search}
            onSubmitEditing={() => {
              handleClickedItem(search);
            }}
            containerStyle={{
              borderTopWidth: 0,
              marginTop: 5,
              backgroundColor: 'white',
              borderWidth: 0,
              borderBottomColor: 'white',
            }}
            inputContainerStyle={{
              width: width / 1.3,
              height: 50,
              backgroundColor: 'white',
              backgroundColor: '#f6f6f6',
              borderRadius: 10,
            }}
            inputStyle={{
              height: 50,
            }}
            searchIcon={{type: 'font-awesome', name: 'search', size: 18}}
            // onPressIn={() =>
            //   navigation.navigate('UserNavigator', {
            //     screen: 'ProductFoundScreen',
            //   })
            // }
          />
        } //centerComponent
      />

      {/* screen history */}
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            width: width,
            backgroundColor: 'white',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 8,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Lịch sử tìm kiếm
          </Text>
          <Text
            onPress={() => {
              setHistoryExpaned([]);
              AsyncStorage.setItem('WORD_SEARCH', JSON.stringify([]));
            }}>
            Xóa lịch sử
          </Text>
        </View>
        {!search ? (
          <FlatList
            data={historyExpanded}
            renderItem={renderItem}
            ListFooterComponent={
              historyExpanded.length > 3 ? (
                <TouchableOpacity
                  onPress={() => {
                    if (historyExpanded.length == 4) {
                      setHistoryExpaned(history);
                    } else {
                      const sliceWord = history.slice(0, 4);
                      setHistoryExpaned(sliceWord);
                    }
                  }}>
                  <View
                    style={{
                      height: 40,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#a7abc3',
                        fontWeight: 'bold',
                        fontSize: 16,
                      }}>
                      {historyExpanded.length == 4 ? 'Xem Thêm' : 'Thu gọn'}
                    </Text>
                    <Icon
                      name={
                        historyExpanded.length == 4
                          ? 'expand-more'
                          : 'expand-less'
                      }
                      type="material"
                      color="#a7abc3"
                    />
                  </View>
                </TouchableOpacity>
              ) : null
            }
            keyExtractor={(item, index) => 'key' + index}
          />
        ) : (
          <FlatList
            data={categoryFilter}
            renderItem={renderCategory}
            keyExtractor={(item, index) => item._id}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
