import React, { Fragment } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

import RNFetchBlob from 'rn-fetch-blob';

const DownloadFile = () => {
  const checkPermission = async () => {
    if (Platform.OS === 'ios') {
      download();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'This app needs access to your storage to download Files',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Storage Permission Granted');
          download();
        } else {
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const download = () => {
    let date = new Date();

    let file_url =
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/gift.png';

    let ext = getExtention(file_url);

    ext = '.' + ext[0];

    const { config, fs } = RNFetchBlob;
    let FileDir = fs.dirs.FileDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          FileDir +
          '/file_' +
          Math.floor(date.getTime() + date.gateSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', file_url)
      .then((res) => {
        console.log('res ->', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      });
  };

  const getExtention = (filename) => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  return <Fragment></Fragment>;
};

export default DownloadFile;
