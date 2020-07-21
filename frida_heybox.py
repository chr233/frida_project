'''
# @Author       : Chr_
# @Date         : 2020-02-16 18:42:42
# @LastEditors  : Chr_
# @LastEditTime : 2020-07-21 21:07:42
# @Description  : 
'''

import sys
import frida
from typing import BinaryIO


js_file_name = 'hook.js'
process_name = 'com.max.xiaoheihe'


# 自定义回调函数
def on_message(message, data):
    print(message,data)


def get_js_code():
    js_file = open(js_file_name,encoding='utf-8')  # type: BinaryIO
    return js_file.read()


if __name__ == '__main__':
    rdev = frida.get_usb_device()
    # 附加到进程并得到进程对象
    process = rdev.attach(process_name)
    # 指定JavaScript脚本
    script = process.create_script(get_js_code())
    # 加载JavaScript脚本
    script.on('message', on_message)
    script.load()
    # 读取返回输入
    sys.stdin.read()
