import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
// import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';

const ForegroundHandler = () => {
  // useEffect(() => {
  //   PushNotification.createChannel({
  //     channelId: 'local', // (required)
  //     channelName: 'My channel', // (required)
  //     channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
  //     soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
  //     importance: 4, // (optional) default: 4. Int value of the Android notification importance
  //     vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  //   });
  //   const unsubscribe = messaging().onMessage(remoteMessage => {
  //     console.log('handle in foreground', remoteMessage);
  //     const {notification, messageId} = remoteMessage;

  //     PushNotification.localNotification({
  //       channelId: 'local',
  //       id: messageId,
  //       body: notification.body,
  //       title: notification.title,
  //       soundName: 'default',
  //       vibrate: true,
  //       playSound: true,
  //     });
  //   });
  //   return unsubscribe;
  // }, []);
  return null;
};

export default ForegroundHandler;
