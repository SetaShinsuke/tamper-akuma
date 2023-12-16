package com.network;

import android.os.Build;
import android.text.TextUtils;
import com.qq.ac.android.bean.enumstate.LoginType;
import com.qq.ac.android.library.manager.NetProxyManager;
import com.qq.ac.android.library.manager.k;
import com.qq.ac.android.library.manager.login.LoginManager;
import com.qq.ac.android.library.manager.s;
import com.qq.ac.android.report.beacon.a;
import com.qq.ac.android.report.beacon.c;
import com.qq.ac.android.report.util.a;
import com.qq.ac.android.teen.manager.TeenManager;
import com.qq.ac.android.utils.n1;
import com.qq.ac.android.utils.q0;
import com.tencent.mobileqq.pandora.Pandora;
import com.tencent.startrail.T;
import g5.b;
import i5.c;
import java.io.IOException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import javax.annotation.Nullable;
import okhttp3.t;
import okhttp3.x;
import okhttp3.y;
import okhttp3.z;
import okio.Buffer;
import okio.BufferedSink;
import v3.a;

public class m implements t {
  private String a(String paramString) {
    StringBuilder stringBuilder = new StringBuilder();
    stringBuilder.append("qimei36=");
    stringBuilder.append(a.a.c());
    stringBuilder.append("&nonce=");
    stringBuilder.append(paramString);
    return stringBuilder.toString();
  }
  
  private Map<String, String> b() {
    HashMap<Object, Object> hashMap = new HashMap<Object, Object>();
    LoginManager loginManager = LoginManager.a;
    if (loginManager.k() == LoginType.QQ) {
      hashMap.put("logintype", "4");
      hashMap.put("fakeduin", loginManager.o());
      hashMap.put("openid", loginManager.m());
      hashMap.put("accesstoken", loginManager.c());
      return (Map)hashMap;
    } 
    if (loginManager.k() == LoginType.WX) {
      hashMap.put("logintype", "2");
      hashMap.put("fakeduin", loginManager.o());
      hashMap.put("openid", loginManager.m());
      hashMap.put("accesstoken", loginManager.c());
      return (Map)hashMap;
    } 
    hashMap.put("logintype", "0");
    hashMap.put("fakeduin", "0");
    return (Map)hashMap;
  }
  
  private String c() {
    return q0.a(String.valueOf((new Random(System.currentTimeMillis())).nextInt(10000) + System.currentTimeMillis()));
  }
  
  private String d(x paramx) {
    String str2 = "";
    String str1 = str2;
    try {
      y y = paramx.a();
      str1 = str2;
      if (y != null) {
        str1 = str2;
        Buffer buffer = new Buffer();
        str1 = str2;
        y.i((BufferedSink)buffer);
        str1 = str2;
        String str = buffer.readUtf8();
        str1 = str;
        buffer.close();
        str1 = str;
      } 
    } catch (IOException iOException) {
      iOException.printStackTrace();
    } 
    StringBuilder stringBuilder = new StringBuilder();
    stringBuilder.append("getSignatureV2Str getPostBody = ");
    stringBuilder.append(str1);
    a.b("VerifyInterceptor", stringBuilder.toString());
    return str1;
  }
  
  private String e(x paramx) {
    String str1 = paramx.h();
    StringBuilder stringBuilder = new StringBuilder();
    y y = paramx.a();
    String str2 = paramx.l().d().replace("//", "/");
    try {
      if ("GET".equals(str1)) {
        stringBuilder.append(URLDecoder.decode(str2, "UTF-8"));
      } else if ("POST".equals(str1)) {
        Buffer buffer = new Buffer();
        y.i((BufferedSink)buffer);
        stringBuilder.append(buffer.readUtf8());
        buffer.close();
      } 
    } catch (Exception exception) {
      exception.printStackTrace();
    } 
    stringBuilder.append(paramx.l().i());
    i(stringBuilder, paramx, "fakeduin");
    i(stringBuilder, paramx, "qimei");
    i(stringBuilder, paramx, "localtime");
    stringBuilder.append("4jo2YHMm0d2VGt59tVYndX9P7eFcw8TvRv5lMqFP1TT");
    return q0.a(stringBuilder.toString());
  }
  
  @Nullable
  private String f(x paramx, String paramString) {
    try {
      StringBuilder stringBuilder = new StringBuilder();
      stringBuilder.append(paramx.h().toUpperCase());
      stringBuilder.append("&");
      stringBuilder.append(g(paramx));
      if (paramx.h().equals("POST")) {
        stringBuilder.append("&");
        stringBuilder.append(d(paramx));
      } 
      stringBuilder.append("&");
      stringBuilder.append(a(paramString));
      return T.signatureV2Str(stringBuilder.toString().getBytes());
    } catch (Exception exception) {
      StringBuilder stringBuilder = new StringBuilder();
      stringBuilder.append("getSignatureV2Str crash ");
      stringBuilder.append(exception.getMessage());
      a.b("VerifyInterceptor", stringBuilder.toString());
      return null;
    } 
  }
  
  private String g(x paramx) {
    String str = paramx.l().toString();
    return str.substring(str.indexOf('/', paramx.l().s().length() + 3));
  }
  
  private void h(x.a parama, String paramString1, String paramString2) {
    if (TextUtils.isEmpty(paramString2))
      return; 
    try {
      parama.g(paramString1, paramString2);
      return;
    } catch (Exception exception) {
      exception.printStackTrace();
      return;
    } 
  }
  
  private void i(StringBuilder paramStringBuilder, x paramx, String paramString) {
    String str = paramx.d(paramString);
    if (!TextUtils.isEmpty(str))
      paramStringBuilder.append(str); 
  }
  
  private void j(x.a parama, x paramx) {
    if (paramx.l().toString().indexOf("uploadPic") == -1)
      parama.g("sc", e(paramx)); 
  }
  
  private void k(x.a parama, x paramx) {
    String str = paramx.l().toString();
    if (str.contains("Chapter/chapterPictureList") || str.contains("Chapter/chapterPictureListForDownload") || str.contains("Chapter/preview")) {
      str = c();
      h(parama, "nonce", str);
      h(parama, "sig", f(paramx, str));
    } 
  }
  
  private void l(x.a parama) {
    Map<String, String> map = b();
    for (String str : map.keySet())
      h(parama, str, map.get(str)); 
  }
  
  private void m(x.a parama) {
    if (k.b().a().equals("2001")) {
      h(parama, "oversea", "2");
      return;
    } 
    h(parama, "oversea", "1");
  }
  
  private void n(x.a parama, x paramx) {
    String str;
    p(parama);
    h(parama, "localtime", String.valueOf(System.currentTimeMillis()));
    h(parama, "AC-ENV", NetProxyManager.b.c());
    a a1 = a.a;
    h(parama, "qimei", a1.b());
    h(parama, "qimei36", a1.c());
    h(parama, "oaid", c.a.b());
    h(parama, "version", k.b().e());
    h(parama, "channel", k.b().a());
    h(parama, "resolution", k.b().c());
    h(parama, "network", s.f().j());
    h(parama, "osversion", Build.VERSION.RELEASE);
    h(parama, "teen-state", TeenManager.a.i());
    StringBuilder stringBuilder = new StringBuilder();
    stringBuilder.append(n1.I0());
    stringBuilder.append("");
    h(parama, "gender", stringBuilder.toString());
    h(parama, "model", Pandora.getModel());
    h(parama, "brand", Pandora.getBrand());
    h(parama, "os-bit", n1.w0());
    if (n1.f1()) {
      str = "1";
    } else {
      str = "2";
    } 
    h(parama, "recommend-switch", str);
    h(parama, "RECOMMEND-TRACE-ID", a.l());
    m(parama);
    q(parama);
    l(parama);
  }
  
  private String o(String paramString) {
    String str = paramString;
    if (n1.R0()) {
      StringBuilder stringBuilder = new StringBuilder();
      stringBuilder.append(paramString);
      stringBuilder.append("?monitor=2");
      str = stringBuilder.toString();
    } 
    return str;
  }
  
  private void p(x.a parama) {
    NetProxyManager netProxyManager = NetProxyManager.b;
    if (netProxyManager.d() == 0) {
      h(parama, "envtype", "dev");
      return;
    } 
    if (netProxyManager.d() == 1)
      h(parama, "envtype", "test"); 
  }
  
  private void q(x.a parama) {
    h(parama, "userstate", String.valueOf(b.e()));
  }
  
  public z intercept(t.a parama) throws IOException {
    x x = parama.request();
    x.a a2 = x.i();
    String str = x.l().i();
    if (str.endsWith("ac.qq.com"))
      n(a2, x); 
    x.a a1 = a2;
    if (c.a.contains(str)) {
      x x1 = a2.t(o(x.l().toString())).b();
      a1 = x1.i();
      k(a1, x1);
      j(a1, x1);
    } 
    return parama.a(a1.b());
  }
}
