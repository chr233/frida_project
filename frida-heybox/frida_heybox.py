import sys
import frida
from typing import BinaryIO


js_file_name = 'Hook.js'
process_name = 'com.xxx.xxx'


# 自定义回调函数
def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


def get_js_code():
    js_file = open(js_file_name)  # type: BinaryIO
    return js_file.read()


if __name__ == '__main__':
    # 附加到进程并得到进程对象
    process = frida.get_usb_device().attach(process_name)
    # 指定JavaScript脚本
    script = process.create_script(get_js_code())
    # 加载JavaScript脚本
    script.on('message', on_message)
    script.load()
    # 读取返回输入
    sys.stdin.read()