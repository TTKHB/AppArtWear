import React, {useState} from 'react';

import {View, Image, Text, Switch, Alert} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
export const camera = require ('../../assets/images/image.jpg');
import ImagePicker from 'react-native-image-crop-picker';
import {cloudinary} from '../../assets/common/cloudinary';
import {
  parseImgCloudinary,
  getAllLinkFromImageBase64,
} from '../../utils/handlerCloudinary';
import useHots from '../../hooks/Hot/useHots';
import {useLogin} from '../../Context/LoginProvider';
import {useNavigation} from '@react-navigation/native';
import Toast from '../../Shared/Toast/Toast';

const PostScreen = () => {
  const [image, setImage] = useState ([]);
  const {addNewHot, getAllHots} = useHots ();
  const [content, setContent] = useState ('');
  const [imageBase64, setImageBase64] = useState ([]);
  console.log (
    '🚀 ~ file: PostScreen.js ~ line 20 ~ PostScreen ~ image',
    image
  );
  const bs = React.createRef ();
  const [isEnabled, setIsEnabled] = useState (false);
  const toggleSwitch = () => setIsEnabled (previousState => !previousState);
  const {profile} = useLogin ();
  const navigation = useNavigation ();

  const createTwoButtonAlert = async () => {
    if (profile._id) {
      let images = [];

      images = await getAllLinkFromImageBase64 (imageBase64);
      console.log (
        '🚀 ~ file: PostScreen.js ~ line 29 ~ createTwoButtonAlert ~ images',
        images
      );
      const status = await addNewHot ({user_id: profile._id, images, content});
      if (status == 200) {
        console.log ('thanh cong');
        Toast.showWithText ('Đã thêm bài viết mới');
        navigation.goBack ();
      }
    }
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker ({
      // multiple: true,
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
      includeBase64: true,
    }).then (image => {
      console.log (image);
      let base64Img = `data:image/jpg;base64,${image.data}`;
      setImage (pre => [...pre, image.path]);
      setImageBase64 (pre => [...pre, base64Img]);
      // setImage(image.path);
    });
    // ImagePicker
  };
  return (
    <View  style={{height: '100%', backgroundColor: 'white'}}>

      <View
        style={{
          width: '100%',
          height: '65%',
          backgroundColor: 'white',
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
          }}
        >
          <TextInput
            value={content}
            onChangeText={setContent}
            placeholder="Do you have any new products today?"
            style={{
              width: '95%',
              alignSelf: 'center',
              height: 60,
              marginTop: 10,
              textAlignVertical: 'top',
            }}
          />
          <View
            style={{width: '100%', height: '25%', backgroundColor: 'white'}}
          >
            <View
              style={{
                width: '95%',
                height: 300,
                borderWidth: 0.2,
                alignSelf: 'center',
              }}
            >
              <ScrollView style={{width: '100%', height: '100%'}} horizontal={true}>

                {image.map ((item, i) => {
                  return (
                    <Image
                      key={i}
                      style={{width: '100%', height: '100%'}}
                      resizeMode="stretch"
                      source={{
                        uri: item
                          ? item
                          : 'https://www.w3schools.com/w3css/img_lights.jpg',
                      }}
                    />
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
      <View
            style={{
              width: '90%',
              height: 40,
              alignSelf: 'center',
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={choosePhotoFromLibrary}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: 100,
                height: 60,
              }}>
              <Image source={camera} style={{width: 25, height: 25}} />
              <Text style={{marginLeft: 6, marginTop: -7}}>Thêm ảnh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: 100,
                height: 60,
                marginLeft: 170
              }}>
              <Image source={camera} style={{width: 25, height: 25}} />
              <Text style={{marginLeft: 6, marginTop: -7}}>Thêm ảnh</Text>
            </TouchableOpacity>
          </View>
      <View style={{width: '100%', height: '10%', marginTop: 30}}>
        <TouchableOpacity
          onPress={createTwoButtonAlert}
          style={{
            width: '90%',
            backgroundColor: 'red',
            height: '90%',
            borderRadius: 7,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Đăng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostScreen;
