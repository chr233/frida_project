'''
# @Author       : Chr_
# @Date         : 2021-11-18 19:26:42
# @LastEditors  : Chr_
# @LastEditTime : 2022-02-22 18:12:23
# @Description  : Python版rpc服务端
'''

import sys

from frida import get_remote_device, get_usb_device, InvalidOperationError
from flask import Flask, request

app = Flask(__name__)


scrips = '''
Java.perform(function () {
    rpc.exports = {
        encode(urlpath, timestamp, nonce) {
            if (!urlpath.toString().endsWith('/')) {
                urlpath += '/';
            }
            var currentApp = Java.use('android.app.ActivityThread').currentApplication();
            var context = currentApp.getApplicationContext();
            var NDKTools = Java.use('com.max.xiaoheihe.utils.NDKTools');
            var hkey = NDKTools.encode(context, urlpath, timestamp, nonce);
            return hkey;
        },
    };
});
'''

if __name__ == '__main__':
    try:
        device = get_usb_device()
    except:
        device = get_remote_device()
    if not device:
        print("[*] 连接到Frida Server失败")
        sys.exit(1)

    process = device.attach('小黑盒')
    script = process.create_script(scrips)
    script.load()

    @app.route('/encode', methods=['GET', 'POST'])
    def get_encode():
        urlpath = request.values.get('urlpath')
        timestamp = request.values.get('timestamp')
        nonce = request.values.get('nonce')

        if not urlpath or not timestamp or not nonce:
            return 'Params Error urlpath timestamp nonce'
        try:
            result = script.exports.encode(urlpath, timestamp, nonce)
            print(result)
        except (InvalidOperationError, TypeError) as e:
            result = f'Frida Server Error {e}'

        return result

    app.run('127.0.0.1', 9000)
