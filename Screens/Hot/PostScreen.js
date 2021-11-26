import React, {useState} from 'react';

import {View, Image, Text, Switch, Alert} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
export const camera = require('../../assets/images/camera.jpg');
import ImagePicker from 'react-native-image-crop-picker';
import {cloudinary} from '../../assets/common/cloudinary';
import {
  parseImgCloudinary,
  getAllLinkFromImageBase64,
} from './../../utils/handlerCloudinary';
import useHots from './../../hooks/Hot/useHots';
import {useLogin} from './../../Context/LoginProvider';
import {useNavigation} from '@react-navigation/native';
import Toast from './../../Shared/Toast/Toast';

const PostScreen = () => {
  const [image, setImage] = useState([]);
  const {addNewHot, getAllHots} = useHots();
  const [content, setContent] = useState('');
  const [imageBase64, setImageBase64] = useState([]);
  console.log('🚀 ~ file: PostScreen.js ~ line 20 ~ PostScreen ~ image', image);
  const bs = React.createRef();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {profile} = useLogin();
  const navigation = useNavigation();

  const createTwoButtonAlert = async () => {
    if (profile._id) {
      let images = [];

      images = await getAllLinkFromImageBase64(imageBase64);
      console.log(
        '🚀 ~ file: PostScreen.js ~ line 29 ~ createTwoButtonAlert ~ images',
        images,
      );
      const status = await addNewHot({user_id: profile._id, images, content});
      if (status == 200) {
        console.log('thanh cong');
        Toast.showWithText('Đã thêm bài viết mới');
        navigation.goBack();
      }
    }
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      // multiple: true,
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
      includeBase64: true,
    }).then(image => {
      console.log(image);
      let base64Img = `data:image/jpg;base64,${image.data}`;
      setImage(pre => [...pre, image.path]);
      setImageBase64(pre => [...pre, base64Img]);
      // setImage(image.path);
    });
    // ImagePicker
  };
  return (
    <View>
      <View style={{width: '100%', height: '25%', backgroundColor: 'white'}}>
        <View
          style={{
            width: '100%',
            height: 150,
            marginTop: 10,
            marginLeft: 10,
          }}>
          <ScrollView horizontal={true}>
            {image.map((item, i) => {
              return (
                <Image
                  key={i}
                  style={{width: 150, height: 150, marginHorizontal: 10}}
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

      <View
        style={{
          width: '100%',
          height: '65%',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderColor: 'brown',
          }}>
          <TextInput
            value={content}
            onChangeText={setContent}
            placeholder="Do you have any new products today?"
            style={{
              width: '90%',
              alignSelf: 'center',
              height: 170,
              marginTop: 10,
              textAlignVertical: 'top',
            }}
          />
          <View
            style={{
              width: '90%',
              height: 40,
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={choosePhotoFromLibrary}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: 100,
                height: '85%',
                backgroundColor: 'pink',
                borderRadius: 7,
              }}>
              <Image source={camera} style={{width: 25, height: 25}} />
              <Text style={{marginLeft: 3}}>Thêm ảnh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: 120,
                height: '85%',
                backgroundColor: 'pink',
                borderRadius: 7,
                marginLeft: 10,
              }}>
              <Text>#Thêm Hashtag</Text>
            </TouchableOpacity>
            <TextInput placeholder="Thêm Hashtag" />
          </View>
        </View>
      </View>

      <View style={{width: '100%', height: '10%'}}>
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
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Đăng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostScreen;
