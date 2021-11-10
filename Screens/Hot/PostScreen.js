import React , {useState} from 'react'

import { View,Image, Text, ImageBackground } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
export const add = require ( '../../assets/images/huyen.jpg')
export const bac = require ( '../../assets/images/bac.jpg')
import ImagePicker from 'react-native-image-crop-picker';
const PostScreen = () => {
    const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
    const bs = React.createRef();
    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            // multiple: true,
            width: 300,
            height: 300,
            cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
        
        });
       

       
      }
    return (
        <View>
            <View style={{width: '100%', height: '25%', flexDirection: 'row' }}>
                <ImageBackground source={bac} 
                resizeMode='stretch' style={{width: '100%', height: '100%', flexDirection: 'row'}}>
                 <View >
                <Image source={add} style={{width: 90, borderRadius: 90, height: 90, marginLeft: 15, marginTop: 60, borderWidth: 2, borderColor: 'white'}}/>
                </View>
                <View > 
                    <Text style={{color: 'white' ,fontSize: 28, fontWeight: 'bold', marginTop: 60, marginLeft: 10}}>Admin ArtWaer</Text>
                <Text style={{color: 'white' ,fontSize: 18, marginLeft: 10}}>
                    Chào bạn!!!
                </Text>
                <Text style={{color: 'white' ,fontSize: 18, marginLeft: 10}}>
                    Hôm nay bạn có sản phẩm gì mới?
                </Text>
                </View>
                </ImageBackground>
            </View>


            <View style={{width: '100%', height: '75%', alignItems: 'center'}}>

               <View style={{width: '100%', height: '30%', backgroundColor: 'white'}}> 
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 7, marginLeft: 7}}>Hôm nay bạn có gì mới?</Text>
                <TextInput 
                placeholder = 'Bạn viết gì đi'
                  style={{width: '97%', height: 110, borderWidth: 1, alignSelf: 'center', marginTop: 7, borderRadius: 7, textAlignVertical: 'top'}}
                />
               </View>
{/* ------------------------------------------------------------ */}
               <View style={{width: '97%', height: '70%',justifyContent: 'space-between', flexDirection: 'row'}}> 
               <View>
               <TouchableOpacity onPress={choosePhotoFromLibrary} style={{width: 150,height: 40,borderWidth: 1, borderRadius: 7, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <Text style={{fontSize: 16}}>Thêm ảnh</Text>
                </TouchableOpacity>

               <View style={{width: 150, height: 150, borderWidth: 1, marginTop: 10}}>
               <Image style={{width: '100%', height: '100%',}}
                source={{
                  uri: image,
                }}/>
               </View>
               </View>
               <View>
                   <TouchableOpacity style={{backgroundColor:'blue', justifyContent: 'center', alignItems: 'center', width: 90, height: 40, marginTop: 10, borderRadius: 7}}>
                       <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>Đăng tin</Text>
                   </TouchableOpacity>
               </View>
               </View>
            </View>
            

           
        </View>
    )
}


export default PostScreen
