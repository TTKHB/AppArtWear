import React, { useState, useCallback, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    KeyboardAvoidingView
} from 'react-native';
//Theme
import { useTheme } from 'react-native-paper';
//Icon
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import IconDate from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAddress from 'react-native-vector-icons/Feather';
import IconSex from 'react-native-vector-icons/FontAwesome';
//BottomSheet and Animated
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
//ImagePicker import
import * as ImagePicker from "react-native-image-picker";
//profile when login
import { useLogin } from '../../Context/LoginProvider';
//URL api server
import baseURL from '../../assets/common/baseUrl';
//Custom InfomationUser
import InfomationUser from '../../components/Profile/ProfileItem/InfoUserItem';
//import check error
import { updateError, isValidEmail, isValidObjField } from '../../utils/Methods';
const { height, width } = Dimensions.get('window');
//Custom DialogDateTime
import DialogDateTime from '../../Shared/DiaLog/DialogDateTime';
import { RadioButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import { styles } from '../../components/Profile/Styles/InfomationStyle';

import { useScroll } from '../../Context/ScrollContext';

const InfomationScreen = ({ navigation, route }) => {
    //Form kiem tra loi
    const isValidForm = () => {
        //only valid email id is allowed
        if (!isValidEmail(email)) {
            return updateError('Email không đúng định dạng!', setError);
        }
        if (isNaN(phone)) {
            // Its not a number
            return updateError('Số điện thoại không chứa ký tự chữ!', setError);
        }
        if (phone == "") {
            return updateError('Bạn chưa nhập số điện thoại!', setError);
        }
        if (phone.length < 10) {
            return updateError('Số điện thoại không phù hợp!', setError);
        }
        if (address == "") {
            return updateError('Bạn cần cung cấp thêm địa chỉ của mình!', setError);
        }
        return true;
    }
    const { setScrollingProfile } = useScroll();
    const [error, setError] = useState('');
    const { profile, setProfile } = useLogin();
    const [fullname, setFullName] = useState(profile.fullname);
    const [email, setEmail] = useState(profile.email);
    const [avatar, setAvartar] = useState(profile.avatar);
    const [phone, setPhone] = useState(profile.phone);
    const [sex, setSex] = useState(profile.sex);
    const [address, setAddress] = useState(profile.address);
    //xu ly date va modal
    const [visibleModal, setVisibleModal] = useState(false);
    const [date, setDate] = useState(new Date());
    const [birthday, setBirthday] = useState(profile.birthday);
    //updateData with api and save databse
    const updateData = async () => {
        if (isValidForm()) {
            fetch(`${baseURL}users/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: profile._id,
                    fullname: fullname,
                    email: email,
                    avatar: avatar,
                    phone: phone,
                    sex: sex,
                    address: address,
                    birthday: birthday,
                })
            }).then(res => res.json())
                .then(data => {
                    console.log(`${data.fullname}is Update successffly!!`)
                    setScrollingProfile(true);
                }).catch(err => {
                    console.log("error", err)
                })
        }
    }

    const { colors } = useTheme();
    const bs = React.useRef(null);
    const fall = new Animated.Value(1);

    const closeBottomSheet = () => {
        bs.current.snapTo(1);
    }

    //Truy cập vào thư viện để chụp ảnh
    const takePhotoFromCamera = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }
        ImagePicker.launchCamera(options, (response) => {
            console.log('Response=', response);
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.error) {
                console.log("Image Picker Error", response.error);
            } else {
                closeBottomSheet()
                const uri = response.assets[0].uri
                const type = "image/jpg"
                const name = response.assets[0].fileName
                const source = { uri, type, name }
                console.log(source)
                handleUpdata(source)
            }
        })
    }
    //Truy cập vào thư viện để chọn ảnh
    const choosePhotoFromLibrary = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response=', response);
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.error) {
                console.log("Image Picker Error", response.error);
            } else {
                closeBottomSheet()
                const uri = response.assets[0].uri
                const type = "image/jpg"
                const name = response.assets[0].fileName
                const source = { uri, type, name }
                console.log(source)
                handleUpdata(source)
            }
        })
    }
    //Update ảnh lên cloudinary
    const handleUpdata = (photo) => {
        const data = new FormData()
        data.append('file', photo)
        data.append("upload_preset", "_artwear")
        data.append("cloud_name", "artwear")
        fetch("https://api.cloudinary.com/v1_1/artwear/image/upload", {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.json())
            .then(data => {
                setAvartar(data.url)
                console.log(data)
            }).catch(err => {
                console.log("Error While Uploading")
            })
    }
    //Biến Custom bottom sheet
    const renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Cập nhật hình ảnh</Text>
                <Text style={styles.panelSubtitle}>Chọn một tấm ảnh cho hồ sơ của bạn</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
                <Text style={styles.panelButtonTitle}>Chụp ảnh</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
                <Text style={styles.panelButtonTitle}>Chọn ảnh từ thư viện ảnh</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => bs.current.snapTo(1)}
            // onPress={closeBottomSheet}
            >
                <Text style={styles.panelButtonTitle}>Huỷ bỏ</Text>
            </TouchableOpacity>
        </View>
    );
    //Biến Custom Header Bottom Sheet
    const renderHeader = () => (
        <View style={styles.headerBottomSheet}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            {/* Xử lý bottom sheet */}
            <BottomSheet
                ref={bs}
                snapPoints={[330, 0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
            {/* Xử lý DialogDateTime */}
            <DialogDateTime
                visible={visibleModal}
                setModalVisible={setVisibleModal}
                date={date}
                setDate={setDate}
                dateSelected={setBirthday}
            />
            {/* Animated khi mở bottom sheet ra */}
            <Animated.ScrollView
                style={{
                    flex: 1,
                    opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
                }}>
                {/* View header ảnh */}
                <SafeAreaView style={styles.headerWrapper}>
                    <View style={styles.splash}>
                        <View style={styles.userInfoSection}>
                            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                                <View
                                    style={{
                                        height: 100,
                                        width: 100,
                                        borderRadius: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <ImageBackground
                                        source={{
                                            uri:
                                                avatar
                                                    ? avatar
                                                    : profile
                                                        ? profile.avatar ||
                                                        'https://res.cloudinary.com/artwear/image/upload/v1632695686/imageUser/LogoUser_khxsbc.jpg'
                                                        : 'https://res.cloudinary.com/artwear/image/upload/v1632695686/imageUser/LogoUser_khxsbc.jpg',
                                        }}
                                        style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: '#F5F5F5' }}
                                        imageStyle={{ borderRadius: 50 }}>
                                        <View
                                            style={{
                                                flex: 1,
                                                justifyContent: 'flex-end',
                                                alignItems: 'center',
                                            }}>
                                            <Icon
                                                name="camera"
                                                size={25}
                                                color="#fff"
                                                style={{
                                                    opacity: 0.5,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 10,
                                                    padding: 2,
                                                }}
                                            />
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
                {/* Giới thiệu */}
                <KeyboardAvoidingView
                    enabled behavior={Platform.OS === 'ios' ? "padding" : null}
                    style={styles.content}>
                    <InfomationUser icon="form-select" name="Giới thiệu" />
                    {/* Name */}
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color={colors.text} size={20} />
                        <TextInput
                            placeholder="Cập nhật họ và tên"
                            autoCorrect={false}
                            style={[
                                styles.textInput,
                                {
                                    color: colors.text,
                                },
                            ]}
                            onChangeText={text => setFullName(text)}
                            value={fullname}
                        >
                        </TextInput>
                    </View>
                    {/* Birthday */}
                    <View style={styles.actionDate}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <IconDate name="calendar-account-outline" color={colors.text} size={20} />
                            <TextInput
                                label="Ngày sinh"
                                placeholder="Ngày sinh"
                                disabled
                                value={birthday}
                                rightIcon={{ type: 'ionicon', name: 'calendar-outline' }}
                                style={{ paddingLeft: 10 }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                setVisibleModal(true);
                            }}>
                            <IconDate name="calendar-month" color={colors.text} size={20} />
                        </TouchableOpacity>
                    </View>
                    {/* Sex */}
                    <View style={styles.action}>
                        <IconSex name="intersex" color={colors.text} size={20} />
                        <TextInput
                            placeholder="Chọn giới tính bên dưới"
                            autoCorrect={false}
                            style={[
                                styles.textInput,
                                {
                                    color: colors.text,
                                },
                            ]}
                            onChangeText={text => setSex(text)}
                            value={sex}
                        >
                        </TextInput>
                    </View>
                    {/* Choose sex */}
                    <RadioButton.Group onValueChange={newValue => setSex(newValue)} value={sex}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text>Nam</Text>
                                <RadioButton value="Nam" />
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text>Nữ</Text>
                                <RadioButton value="Nữ" />
                            </View>
                        </View>
                    </RadioButton.Group>
                </KeyboardAvoidingView>
                {/* Thông tin liên hệ */}
                <KeyboardAvoidingView
                    enabled behavior={Platform.OS === 'ios' ? "padding" : null}
                    style={styles.InfomationUser}>
                    <InfomationUser icon="information-outline" name="Thông tin liên hệ" />
                    {/* Check loi */}
                    {error ? (
                        <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
                    ) : null}
                    {/* Email */}
                    <View style={styles.action}>
                        <FontAwesome name="envelope-o" color={colors.text} size={20} />
                        <TextInput
                            keyboardType="email-address"
                            autoCorrect={false}
                            style={[
                                styles.textInput,
                                {
                                    color: colors.text,
                                },
                            ]}
                            onChangeText={text => setEmail(text)}
                            value={email}
                        >
                        </TextInput>
                    </View>
                    {/* Phone */}
                    <View style={styles.action}>
                        <Feather name="phone" color={colors.text} size={20} />
                        <TextInput
                            placeholder="Số điện thoại"
                            maxLength={11}
                            keyboardType="number-pad"
                            autoCorrect={false}
                            style={[
                                styles.textInput,
                                {
                                    color: colors.text,
                                },
                            ]}
                            onChangeText={text => setPhone(text)}
                            value={phone}
                        >
                        </TextInput>
                    </View>
                    {/* Address */}
                    <View style={styles.action}>
                        <IconAddress name="map-pin" color={colors.text} size={20} />
                        <TextInput
                            placeholder="Địa chỉ"
                            autoCorrect={false}
                            style={[
                                styles.textInput,
                                {
                                    color: colors.text,
                                },
                            ]}
                            onChangeText={text => setAddress(text)}
                            value={address}
                        >
                        </TextInput>
                    </View>
                </KeyboardAvoidingView>
            </Animated.ScrollView>
            {/* Footer chứa nút save */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnItemOne} onPress={() => updateData()}>
                    <Text style={styles.panelButtonTitle}>Lưu thông tin</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default InfomationScreen;














