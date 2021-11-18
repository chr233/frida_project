'''
# @Author       : Chr_
# @Date         : 2020-02-16 18:42:42
# @LastEditors  : Chr_
# @LastEditTime : 2021-11-16 19:21:51
# @Description  : 加载器
'''

import sys
from frida import get_remote_device, get_usb_device
from os import path

# Hook目标，会自动加载对应脚本
target = 'com.max.xiaoheihe'

# 发送信息回调函数


def on_message(message, data):
    if message['type'] == 'send':
        print(f"[*] {message['payload']}")
    else:
        print(message)


if __name__ == '__main__':
    try:
        device = get_usb_device()
    except:
        device = get_remote_device()
    if not device:
        print("* 连接到Frida Server失败")
    else:
        # pid =  device.spawn(target)
        # process = device.attach(pid)
        # process = device.attach( target)
        process = device.attach('小黑盒')
        # 加载JS脚本
        jspath = path.join('scripts', f'{target}.js')
        js = open(jspath, 'r', encoding='utf-8').read()
        script = process.create_script(js)
        script.on('message', on_message)
        script.load()
        # device.resume(pid)
        # 读取返回输入
        input()
        script.unload()
