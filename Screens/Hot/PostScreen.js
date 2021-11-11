import React, {useState} from 'react';

import {View, Image, Text, Switch, Alert} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
export const add = require ('../../assets/images/huyen.jpg');
export const bac = require ('../../assets/images/bac.jpg');
import ImagePicker from 'react-native-image-crop-picker';
const PostScreen = () => {
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Thông báo",
      "Bạn có muốn đăng sản phẩm lên không",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  const [image, setImage] = useState (
    'https://api.adorable.io/avatars/80/abott@adorable.png'
  );
  const bs = React.createRef ();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker ({
      // multiple: true,
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then (image => {
      console.log (image);
      setImage (image.path);
    });
  };
  return (
    <View>
   <View style={{width: '100%', height: '25%', backgroundColor: 'white',}}>
   <TouchableOpacity
        onPress={choosePhotoFromLibrary}
        style={{width: 150, height: 150, borderWidth: 1, marginTop: 10, marginLeft: 10}}
      >
         
        <Image
          style={{width: '100%', height: '100%'}}
          source={{
            uri: image,
          }}
        />
      </TouchableOpacity>
   </View>
    
   <View style={{width: '100%', height: '65%', backgroundColor: '#F3F1F5'}}>
   <View style={{backgroundColor: 'white'}}> 
<TextInput
    placeholder= 'Do you have any new products today?'
    style={{width: '90%', alignSelf: 'center', height: 170, marginTop: 10, textAlignVertical: 'top'}}
    />
    <View style={{width: '90%',height: 40, alignSelf: 'center',flexDirection: 'row',alignItems: 'center'}}>
     <View style={{width: '30%'}}>
         <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', width: '100%', height: '90%', backgroundColor: 'pink', borderRadius: 7}}>
             <Text># Thêm Hashtag</Text>
         </TouchableOpacity>
     </View>
     <View style={{width: '70%', height: '100%'}}>
      <TextInput
      placeholder='Thêm Hashtag'
      style={{width: '100%',height: '100%'}}
      />
     </View>
    </View>
</View>
<View style={{backgroundColor: 'white', width: '100%', height: 60, marginTop: 10, justifyContent: 'center', flexDirection: 'row'}}>
<View style={{width: '80%', height: '100%', justifyContent: 'center', marginLeft: 15}}>
 <Text style={{fontSize: 17}}>Chia sẽ cho thầy đi</Text>
</View>
<View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
<Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
</View>
</View>
   </View>

   <View style={{width: '100%', height: '10%',}}>
    <TouchableOpacity onPress={createTwoButtonAlert} style={{width: '90%', backgroundColor: 'red', height: '90%', borderRadius: 7,alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
     <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Đăng</Text>
    </TouchableOpacity>
   </View>
    </View>
  );
};

export default PostScreen;
