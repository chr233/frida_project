'''
# @Author       : Chr_
# @Date         : 2021-11-18 19:26:42
# @LastEditors  : Chr_
# @LastEditTime : 2021-11-18 20:53:29
# @Description  : 
'''
from os import path
import sys
from frida import get_remote_device, get_usb_device

from flask import Flask, request

app = Flask(__name__)

if __name__ == '__main__':
    try:
        device = get_usb_device()
    except:
        device = get_remote_device()
    if not device:
        print("[*] 连接到Frida Server失败")
        sys.exit(1)

    process = device.attach('小黑盒')
    jspath = path.join('scripts', 'xiaoheihe_rpc.js')
    js = open(jspath, 'r', encoding='utf-8').read()
    script = process.create_script(js)
    script.load()

    @app.route('/encode', methods=['GET', 'POST'])
    def get_encode():
        urlpath = request.values.get('urlpath')
        timestamp = request.values.get('timestamp')
        nonce = request.values.get('nonce')

        result = script.exports.encode(urlpath, timestamp, nonce)
        print(result)
        return result

    app.run('127.0.0.1', 9000)
