import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  SectionList,
  DrawerLayoutAndroid,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Styles} from './Styles';
export const help = require('../../../assets/images/HELP.jpg');
export const search = require('../../../assets/images/Blacksearch.jpg');
export const baomat = require('../../../assets/images/baomat.jpg');
export const money = require('../../../assets/images/money.jpg');
export const giaohang = require('../../../assets/images/car.jpg');
export const user = require('../../../assets/images/user.jpg');
export const trahang = require('../../../assets/images/tra.jpg');
export const more1 = require('../../../assets/images/moree.jpg');
export const right = require('../../../assets/images/right.jpg');
export const Back = require('../../../assets/images/back.jpg');
export const More = require('../../../assets/images/see.jpg');
const theme = [
  {
    title: 'Câu hỏi hàng đầu',
    data: [
      'Tất tần tật về hoạt động đặt và giao hàng của Artwear',
      'Thông tin về hoạt động đặt hàng/ giao hàng tại TP.HCM mùa covid',
      'Tháng mới này ArtWear có gì cho bạn',
      'Cẩm nang dành cho khách hàng mới',
      'Những lưu ý khi đặt hàng mùa Covid',
      'Các khu vực vận chuyển tạm ngừng hoạt động',
    ],
  },
];
const Helpme = [
  {
    id: 1,
    image: user,
    data: ['Thông tin người dùng'],
  },
  {
    id: 2,
    image: baomat,
    data: ['Bảo mật tài khoản'],
  },
  {
    id: 3,
    image: money,
    data: ['Thanh toán'],
  },
  {
    id: 4,
    image: giaohang,
    data: ['Giao hàng'],
  },
  {
    id: 5,
    image: trahang,
    data: ['Trả hàng'],
  },
  {
    id: 6,
    image: more1,
    data: ['Chủ đề khác'],
  },
];
const HelpScreen = ({navigation}) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('right');
  const changeDrawerPosition = () => {};
  // khung đầu tiên--------------------------------------------------
  const Item = ({title}) => (
    <View style={Styles.Hangdau}>
      <View style={{width: '90%', justifyContent: 'center'}}>
        <Text style={Styles.TextFlat}>{title}</Text>
      </View>
      <TouchableOpacity style={{width: '10%', justifyContent: 'center'}}>
        <Image style={Styles.ImgFlat} source={right} />
      </TouchableOpacity>
    </View>
  );
  //khung thứ 2--------------------------------------------------------------
  const Help = ({data, image}) => (
    <View>
      <Text>{data}</Text>
      <Image source={image} />
    </View>
  );
  //drawer---------------------------------------------------------------
  const navigationView = () => (
    <View style={[Styles.container, Styles.navigationContainer]}>
      <View style={Styles.TouDrawer}>
        <Text style={Styles.TextDrawer}>Trang chủ</Text>
        <TouchableOpacity>
          <Image source={right} style={Styles.ImgFlat} />
        </TouchableOpacity>
      </View>
      <View style={Styles.TouDrawer}>
        <Text style={Styles.TextDrawer}>Phản hồi</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Phan hoi')}>
          <Image source={right} style={Styles.ImgFlat} />
        </TouchableOpacity>
      </View>
      <View style={Styles.TouDrawer}>
        <Text style={Styles.TextDrawer}>Tài khoản của tôi</Text>
        <TouchableOpacity>
          <Image source={right} style={Styles.ImgFlat} />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      {/* Header---------------------------------------------------------------- */}

      <View style={Styles.Header}>
        <TouchableOpacity
          style={Styles.TouHeder}
          onPress={() => navigation.goBack()}>
          <Image style={Styles.IconHeader} source={Back} />
        </TouchableOpacity>
        <View
          style={{
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={Styles.TextHeader}>ArtWear Helpcenter</Text>
        </View>
        <TouchableOpacity
          onPress={() => drawer.current.openDrawer()}
          style={Styles.TouHeder}>
          <Image style={Styles.IconHeader} source={More} />
        </TouchableOpacity>
      </View>

      {/* Bodyyyyyy-------------------------------------------------------- */}

      <ScrollView style={Styles.Body}>
        {/* panner-------------------------------------------------------------------- */}
        <ImageBackground
          source={help}
          resizeMode="cover"
          style={Styles.ImageBgr}>
          <View style={Styles.TextInput}>
            <TextInput
              style={{width: '87%'}}
              placeholder="Nhập từ khóa (Mã giảm giá, Hủy đơn hàng)"
            />
            <Image style={Styles.Imageserch} source={search} />
          </View>
        </ImageBackground>
        {/* cau hoi thuong gap---------------------------------------------------------------- */}
        <View style={Styles.BodyTheme1}>
          <SectionList
            sections={theme}
            keyExtractor={item => item}
            renderItem={({item}) => <Item title={item} />}
            renderSectionHeader={({section: {title}}) => (
              <View>
                <Text style={{fontSize: 24, padding: 7, fontWeight: 'bold'}}>
                  {title}
                </Text>
              </View>
            )}
          />
        </View>
        {/* chu de ------------------------------------------------------------------ */}
        <View style={Styles.BodyTheme}>
          <Text style={{fontSize: 24, padding: 7, fontWeight: 'bold'}}>
            Chủ đề
          </Text>
          <SectionList
            sections={Helpme}
            keyExtractor={item => item}
            renderItem={({item}) => <Help title={item} />}
            renderSectionHeader={({section: {image, data}}) => (
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={Styles.FlatList}>
                  <View style={{width: '15%'}}>
                    <Image style={Styles.ImgFlat} source={image} />
                  </View>
                  <Text style={Styles.TextFlat}>{data}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* end screennnnnnnn------------------------------------------------- */}
        <View style={Styles.EndView}>
          <Text style={Styles.textend}>Bạn vẫn cần trợ giúp?</Text>
          <Text>ArtWear luôn hỗ trợ bất cứ khi nào bạn cần (24/7).</Text>
          <Text>Bạn có thể chọn "Trò chuyện ngay" bên dưới</Text>

          <TouchableOpacity style={Styles.Touend}>
            <Text style={Styles.TextFlat1}>Trò chuyện ngay</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};
export default HelpScreen;
