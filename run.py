'''
# @Author       : Chr_
# @Date         : 2020-02-16 18:42:42
# @LastEditors  : Chr_
# @LastEditTime : 2020-08-14 00:06:10
# @Description  : 加载器
'''

import sys
import frida

process_name = 'com.max.xiaoheihe'


# 发送信息回调函数
def on_message(message, data):
    if message['type'] == 'send':
        print(f"[*] {message['payload']}")
    else:
        print(message)


if __name__ == '__main__':
    try:
        device = frida.get_usb_device()
    except:
        device = frida.get_remote_device()
    if not device:
        print("* 连接到Frida Server失败")
    else:
        process = device.attach(process_name)
        # 加载JS脚本
        js = open('hook.js', encoding='utf-8').read()
        script = process.create_script(js)
        script.on('message', on_message)
        script.load()
        # 读取返回输入
        input()
        script.unload()
