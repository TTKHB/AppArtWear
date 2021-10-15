import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import ProfileHaveAccount from '../../components/Profile/ProfileHaveAccount';
import ProfileNoAccount from '../../components/Profile/ProfileNoAccount';
import {useLogin} from '../../Context/LoginProvider';
import LoaderProfile from '../../components/Home/Loader/LoaderProfile';
const ProfileScreen = ({navigation, route}) => {
  const {isLoggedIn} = useLogin();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  });
  return (
    <SafeAreaView>
      {loading ? (
        <LoaderProfile />
      ) : (
        <View>
          {isLoggedIn ? (
            <>
              <ProfileHaveAccount navigation={navigation} />
            </>
          ) : (
            <>
              <ProfileNoAccount navigation={navigation} />
            </>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;
