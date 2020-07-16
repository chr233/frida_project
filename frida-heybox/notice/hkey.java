/$$
 $ @Author       : Chr_
 $ @Date         : 2020-07-15 19:44:44
 $ @LastEditors  : Chr_
 $ @LastEditTime : 2020-07-15 19:45:03
 $ @Description  : 
 $/


//Package com.max.xiaoheihe.network.l;
import okhttp3.L$a;
import java.util.concurrent.TimeUnit;
import okhttp3.L;
import java.lang.String;
import java.lang.StringBuilder;
import com.max.xiaoheihe.utils.Y;
import java.util.HashMap;
import com.max.xiaoheihe.app.HeyBoxApplication;
import com.max.xiaoheihe.bean.account.User;
import com.max.xiaoheihe.bean.account.AccountDetailObj;
import java.util.Map;
import java.lang.Object;
import com.max.xiaoheihe.utils.W;
import android.os.Build$VERSION;
import java.lang.System;
import com.max.xiaoheihe.utils.Qb;
import okhttp3.N$a;
import okhttp3.N;
import com.max.xiaoheihe.network.l$c;
import okhttp3.Y;
import okhttp3.X;
import okhttp3.x;
import java.util.concurrent.ExecutorService;

private void l.i()	//method@db8e
{
   L v0 = new L$a().c(0, TimeUnit.MILLISECONDS).b(0, TimeUnit.MILLISECONDS).a();
   String v1 = this.h();
   Y.null_a("zzzzconntest", new StringBuilder()+"url=="+v1);
   HashMap v2 = new HashMap(16);
   User v3 = HeyBoxApplication.j();
   v4 = (v3.Auto_getValue())? v3.getAccount_detail().getUserid() : "-1";	
   v2.put("userid", v4);
   v2.put("appid", "heybox");
   v2.put("pkey", v3.getPkey());
   v2.put("imei", W.e());
   v2.put("os_type", "Android");
   v2.put("os_version", Build$VERSION.RELEASE.trim());
   v2.put("version", W.i());
   String v4 = "app";
   v2.put("hkey", W.b(W.b(new StringBuilder()+"xiaoheihe/_time="+new StringBuilder()+(System.currentTimeMillis()/1000)+"").replaceAll("a", v4).replaceAll("0", v4)));
   v0.a(new N$a().b(Qb.a(v1, v2)).a(), new l$c(this));
   v0.Auto_getValue().b().shutdown();
   return;
}

