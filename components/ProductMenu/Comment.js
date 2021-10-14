import React,{useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,ScrollView,FlatList,Dimensions,Image } from 'react-native'
import {datauser} from '../../assets/data/ItemUserComment';
import Star from '../../components/ProductMenu/Star';
import Icon from 'react-native-vector-icons/MaterialIcons';
const listTab=[
    {
        name :<Icon name="star" color="orange" size={20} />,
        status:5  
    },
    {
        name :<Icon name="star" color="orange" size={20} />,
        status:4  
    },
    {
        name :<Icon name="star" color="orange" size={20} />,
        status:3  
    },
    {
        name :<Icon name="star" color="orange" size={20} />,
        status:2 
    },,
    {
        name :<Icon name="star" color="orange" size={20} />,
        status:1  
    },
    
]

const Comment = () => {
    const [datalist,setDataList]=useState(datauser)
    const [status,setStatus]=useState('All')
    const setStatusFilter=status=>{
        if(status!=='All'){
            setDataList([...datauser.filter(e =>e.like === status)])
        }else{
            setDataList(datalist)
        }
        setStatus(status)}

 const renderItemComment = ({item,index}) => {
            return (
              <View  style={styles.container1}>
                <Image style={styles.image} source={{uri: item.image}} />
                <View style={styles.content}>
                  <View style={styles.contentHeader}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.time}>9:58 am</Text>
                  </View>
                  <View style={styles.rate}>
                    <Star ratings={2} reviews={15} />
                  </View>
                  <Text>{item.comment}</Text>
                </View>
              </View>
            );
          };

    return (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.listTab}>
                {
                    listTab.map((e)=>(
                        <TouchableOpacity 
                        style={[styles.btnTab,status === e.status && styles.btnTabActive]} onPress={()=>setStatusFilter(e.status)}>
                            <Text style={[styles.text,status === e.status && styles.textTabActive]}>{e.status}</Text>
                            <View>
                            <Text style={[styles.textname,status === e.status && styles.textTabActive]}>{e.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ) )
                }
              
            </View>
            <ScrollView  showsVerticalScrollIndicator={false}  >
            <FlatList
            data={datalist}
            keyExtractor={item => item.id}
            renderItem={renderItemComment}
            />
            </ScrollView>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:10,
        justifyContent: 'center',
    },
    listTab:{
        marginTop:10,
        flexDirection: 'row',
        marginBottom:20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTab:{
        width:Dimensions.get('window').width/5.7,
        flexDirection:"row",
        borderWidth:0.5,
        borderColor:"grey",
        alignItems: 'center',
        backgroundColor:"#ffefd5",
        marginLeft:2,
        justifyContent: 'center',
        borderRadius:2

    },
    textname:{
    
        color:'black'
    },
    text:{
        fontSize: 19,
        color:'black'
    },
    btnTabActive:{
       backgroundColor:"#E6838D" 
    },
    textTabActive:{
            color:"#fff"
    },
    container1: {
        paddingRight: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
      content: {
        marginLeft: 16,
        flex: 1,
      },
      contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
      },
      bodyContainer: {
        flex: 1,
      },
      separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
      },
      image: {
        width: 45,
        height: 45,
        borderRadius: 20,
        marginLeft: 20,
      },
      time: {
        fontSize: 11,
        color: '#808080',
      },
      name: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      rate: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 2,
      },
})
export default Comment