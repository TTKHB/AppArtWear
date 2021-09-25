import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Header, SearchBar, ListItem, Icon} from 'react-native-elements';
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

const SearchScreen = ({navigation}) => {
  const [search, setSearcher] = useState(null);
  const [category, setCategory] = useState(DATACategory);

  const Item = ({title}) => (
    <TouchableOpacity>
      <ListItem bottomDivider>
        <Icon name="time-outline" type="ionicon" color={'grey'} />
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );

  const Caterogy = ({title}) => (
    <TouchableOpacity>
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
  const renderItem = ({item}) => <Item title={item.title} />;

  const renderCategory = ({item}) => <Caterogy title={item.title} />;

  const searchedCategory = text => {
    setSearcher(text);
    let searchedData = DATACategory.filter(item => item.title.includes(text));
    setCategory(searchedData);
    console.log(searchedData);
  };
  return (
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
            onPressIn={() => navigation.navigate('UserNavigator', { screen: 'ProductFoundScreen' })}
          />
        } //centerComponent
      />
      {/* screen history */}
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {!search ? (
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <FlatList
            data={category}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
