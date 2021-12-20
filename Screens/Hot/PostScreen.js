import React, {useState} from 'react';

import {View, Image, Text, Switch, Alert} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
export const photo = require('../../assets/images/photo.jpg');
export const video = require('../../assets/images/video.jpg');
export const album = require('../../assets/images/album.jpg');
export const galaxy = require('../../assets/images/galaxy.jpg');
export const back = require('../../assets/images/back.jpg');
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
import {useScroll} from '../../Context/ScrollContext';

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
  console.log(
    '🚀 ~ file: PostScreen.js ~ line 36 ~ PostScreen ~ profile',
    profile,
  );
  const navigation = useNavigation();
  const {setRequestRefresing} = useScroll();

  const createTwoButtonAlert = async () => {
    if (profile._id) {
      let images = [];

      images = await getAllLinkFromImageBase64(imageBase64);
      console.log(
        '🚀 ~ file: PostScreen.js ~ line 29 ~ createTwoButtonAlert ~ images',
        images,
      );
      const status = await addNewHot({user_id: profile._id, images, content});
      console.log('thanh cong');
      Toast.showWithText('Đã thêm bài viết mới');
      setRequestRefresing(true);
      navigation.goBack();
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
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
        backgroundColor: '#E1E5EA',
      }}>
      <View style={{width: '100%', height: '10%', flexDirection: 'row'}}>
        <View
          style={{
            width: '25%',
            backgroundColor: 'white',
            height: '100%',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={back}
              style={{width: 25, height: 25, marginLeft: 7}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '50%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Tạo bài viết</Text>
        </View>
        <View
          style={{
            width: '25%',
            backgroundColor: 'white',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={createTwoButtonAlert}>
            <Text style={{fontSize: 22, color: 'red'}}>Đăng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: '75%',
          backgroundColor: 'white',
          marginTop: 7,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
          }}>
          {/* ------------------------------------------------------------------------------ */}
          <View
            style={{
              width: '95%',
              backgroundColor: 'white',
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: '100%',
                height: 70,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: profile.avatar}}
                style={{width: 50, height: 50, borderRadius: 50, marginLeft: 7}}
              />
              <Text style={{fontSize: 22, marginLeft: 10}}>
                {profile.fullname}
              </Text>
            </View>
            <TextInput
              value={content}
              onChangeText={setContent}
              placeholder="Bạn có sản phẩm gì mới?"
              style={{
                width: '97%',
                alignSelf: 'center',
                height: 60,
                marginTop: 10,
                textAlignVertical: 'top',
              }}
            />
            <View
              style={{
                width: '100%',
                height: 340,
                marginTop: 10,
                alignItems: 'center',
              }}>
              <ScrollView horizontal={true}>
                {image.map((item, i) => {
                  return (
                    <Image
                      key={i}
                      style={{width: 380, height: 340, borderRadius: 3}}
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
      <View style={{width: '100%', backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'white',
            width: '95%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: -27,
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={choosePhotoFromLibrary}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 125,
              height: 40,
              shadowColor: '#000',
              justifyContent: 'center',
              alignSelf: 'center',
              borderBottomWidth: 1,
              borderStartWidth: 1,
              borderTopWidth: 1,
            }}>
            <Image source={photo} style={{width: 25, height: 25}} />
            <Text style={{marginLeft: 10, fontSize: 16}}>Thêm ảnh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 125,
              height: 40,
              shadowColor: '#000',
              justifyContent: 'center',
              alignSelf: 'center',
              borderLeftWidth: 1,
              borderEndWidth: 1,
              borderWidth: 1,
            }}>
            <Image source={album} style={{width: 25, height: 25}} />
            <Text style={{marginLeft: 10, fontSize: 16}}>Tạo album</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 125,
              height: 40,
              shadowColor: '#000',
              justifyContent: 'center',
              alignSelf: 'center',
              borderBottomWidth: 1,
              borderEndWidth: 1,
              borderTopWidth: 1,
            }}>
            <Image source={video} style={{width: 25, height: 25}} />
            <Text style={{marginLeft: 10, fontSize: 16}}>Thêm video</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostScreen;
