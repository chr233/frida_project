/*
 * @Author       : Chr_
 * @Date         : 2020-09-12 19:35:23
 * @LastEditors  : Chr_
 * @LastEditTime : 2021-11-18 20:03:21
 * @Description  : 
 */

console.log("脚本载入成功");

Java.perform(function () {
    var Ghook = false;
    var Gurlpath = '';
    var Gtimestamp = '';
    var Gnonce = '';
    var Gresult = undefined;

    var NDKTools = Java.use('com.max.xiaoheihe.utils.NDKTools');
    NDKTools.encode.implementation = function (p1, p2, p3, p4) {

        if (Ghook) {
            // console.log('hook in')
            Ghook = false
            p2 = Gurlpath;
            p3 = Gtimestamp;
            p4 = Gnonce;
            // console.log('in:', p1, p2, p3, p4)
            var ps = this.encode(p1, p2, p3, p4);
            Gresult = ps;
            // console.log('out:', Gresult, ps)
            return ps;
        }
        else {
            // console.log('in:', p1, p2, p3, p4);
            var ps = this.encode(p1, p2, p3, p4);
            // console.log('out:', ps);
            return (ps);
        }
    }

    function rpcPayload(urlpath, timestamp, nonce) {
        if (!urlpath.toString().endsWith('/')) {
            urlpath += '/';
        }

        Ghook = true;
        Gnonce = nonce;
        Gtimestamp = timestamp;
        Gurlpath = urlpath;

        let flag = false;
        Java.choose("com.max.xiaoheihe.utils.o1", {
            onMatch: function (instance) {
                console.log('find it');
                instance.y();
                flag = true;
            }, onComplete: function () {
                console.log('complete');

                if (!flag) {
                    Gresult = undefined;
                }
            }
        });
    }

    rpc.exports = {
        encode(a, b, c) {
            rpcPayload(a, b, c);
            return Gresult;
        },
    };
});