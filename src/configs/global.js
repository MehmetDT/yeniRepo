import DeviceInfo from 'react-native-device-info';
import * as RNLocalize from 'react-native-localize';
import { Dimensions, Platform } from 'react-native';

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((dimen.height === 780 || dimen.width === 780)
      || (dimen.height === 812 || dimen.width === 812)
      || (dimen.height === 844 || dimen.width === 844)
      || (dimen.height === 896 || dimen.width === 896)
      || (dimen.height === 926 || dimen.width === 926))
  );
}


let global = {
  appName: DeviceInfo.getApplicationName(),
  appUrl: 'http://localhost:8080',
  paymentUrl: 'http://127.0.0.1:8000/be',
  deviceID: DeviceInfo.getUniqueId().then((uniqueId) => {
    return uniqueId.toString()
  }),
  deviceOSSeries: DeviceInfo.getDeviceId(),
  deviceOS: DeviceInfo.getSystemName(),
  timezone: RNLocalize.getTimeZone(),
  AppId: '15955959242',
  isIphoneX,
  brand: DeviceInfo.getBrand(),
  currency: RNLocalize.getCurrencies() && RNLocalize.getCurrencies()[0],
  language: RNLocalize.getLocales()[0].languageCode && 'en',
  platform: DeviceInfo.getSystemName(),
  country: RNLocalize.getLocales()[0].countryCode && 'en',
  systemName: DeviceInfo.getDeviceId(),
  versionCode: 1,
};


export default global;