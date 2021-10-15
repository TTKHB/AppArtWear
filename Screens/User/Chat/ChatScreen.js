import React ,{useEffect,useState}from 'react';
import {
  View,Text, StyleSheet,Image,TouchableOpacity,TextInput,FlatList,SafeAreaView
} from 'react-native';
import LoaderChat from'../../../components/Home/Loader/LoaderChat';
export const ronaldo = require ('../../../assets/images/Cr7.jpg');
export const SeeMore = require ('../../../assets/images/add-user.png');
export const Search = require ('../../../assets/images/search1.png');
export const Tuyen = require ('../../../assets/images/ngoctuyen.jpg');

const User = [
{
  id: 1,
  image: ronaldo,
  Username: 'Cristiano Ronaldo',
  title: 'Heyy! hello My friends'
},
{
  id: 2,
  image: Tuyen,
  Username: 'Ngọc Tuyền',
  title: 'Heyy! hello My friends'
},

]

const ChatScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  
 
  useEffect(() => {
        if (loading) {
          setLoading(false);
  }
}
  )
  return (
    <SafeAreaView>
    {loading ? (
        <LoaderChat/>
      ) : (
    <View>
      {/* Header */}
      <View style={Styles.Header}>
        <TouchableOpacity style={Styles.TouchableHeader}>
          <Image style={Styles.ImageAvatar} source={Search} />
        </TouchableOpacity>
        <View style={{width: '75%', justifyContent: 'center',}}>
         <TextInput style={Styles.TextInputBody}
         placeholder= 'Tìm bạn bè, tin nhắn...'
         placeholderTextColor= 'white'
         />
        </View>
        <TouchableOpacity style={Styles.TouchableHeader}>
          <Image style={Styles.AddFrends} source={SeeMore} />
        </TouchableOpacity>
      </View>
      {/* body */}
      <View style={Styles.Body}>
        <FlatList 
      data={User}
      keyExtractor= {item => item.id}
      renderItem = {({item}) => {
        return(
          <TouchableOpacity style={Styles.UserIcon}
        onPress={() =>navigation.navigate('Chat detail',{item}) }>
            <Image style={Styles.ImageUser} source={item.image}/>
            <View style={{marginLeft: 10}}>
            <Text style={Styles.TextUser}>{item.Username}</Text>
            <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )
      }}
      />
      </View>
    </View>
      )}
    </SafeAreaView>
  );
};

export default ChatScreen;

export const Styles = StyleSheet.create ({
  Header: {
    height: '8%',
    backgroundColor: '#8D6E63',
    flexDirection: 'row',
  },
  TouchableHeader: {
    width: '8%',
    marginLeft: '3%',
    justifyContent: 'center',
  },
  ImageAvatar: {
    width: 25,
    height: 25,
  },
  ImageSeemore: {
    width: 30,
    height: 30,
  },
  AddFrends: {
    width: 25,
    height: 25,
  },
  ChatText: {
    fontSize: 36,
    fontFamily: 'Delight Candles',
    alignSelf: 'center',
    color: 'white'
  },
  // ----------------------------------------------
  Body: {
    width: '100%',
    height: '92%',
    backgroundColor: 'white',
  },

  ImageUser: {
    width:55,
    height:55,
    borderRadius: 70,
   
  },
  TextUser: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  UserIcon: {
    marginLeft: '5%',
    marginTop: '5%',
    flexDirection: 'row'
  },
  TextInputBody:{
    color: 'white',
    fontSize: 18,
  }
});
