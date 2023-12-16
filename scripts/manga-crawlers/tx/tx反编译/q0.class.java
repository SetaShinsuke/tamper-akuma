package com.qq.ac.android.utils;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class q0 {
  public static String a(String paramString) {
    try {
      MessageDigest messageDigest = MessageDigest.getInstance("MD5");
      messageDigest.reset();
      messageDigest.update(paramString.getBytes("UTF-8"));
      byte[] arrayOfByte = messageDigest.digest();
      StringBuffer stringBuffer = new StringBuffer();
      for (int i = 0; i < arrayOfByte.length; i++) {
        if (Integer.toHexString(arrayOfByte[i] & 0xFF).length() == 1) {
          stringBuffer.append("0");
          stringBuffer.append(Integer.toHexString(arrayOfByte[i] & 0xFF));
        } else {
          stringBuffer.append(Integer.toHexString(arrayOfByte[i] & 0xFF));
        } 
      } 
      return stringBuffer.toString();
    } catch (NoSuchAlgorithmException|java.io.UnsupportedEncodingException|NullPointerException noSuchAlgorithmException) {
      return null;
    } 
  }
  
  public static String b(byte[] paramArrayOfbyte) {
    try {
      MessageDigest messageDigest = MessageDigest.getInstance("MD5");
      messageDigest.reset();
      messageDigest.update(paramArrayOfbyte);
      paramArrayOfbyte = messageDigest.digest();
      StringBuffer stringBuffer = new StringBuffer();
      for (int i = 0; i < paramArrayOfbyte.length; i++) {
        if (Integer.toHexString(paramArrayOfbyte[i] & 0xFF).length() == 1) {
          stringBuffer.append("0");
          stringBuffer.append(Integer.toHexString(paramArrayOfbyte[i] & 0xFF));
        } else {
          stringBuffer.append(Integer.toHexString(paramArrayOfbyte[i] & 0xFF));
        } 
      } 
      return stringBuffer.toString();
    } catch (NoSuchAlgorithmException|NullPointerException noSuchAlgorithmException) {
      return null;
    } 
  }
  
  public static String c(String paramString) throws IOException {
    byte[] arrayOfByte1;
    byte[] arrayOfByte2;
    MessageDigest messageDigest = null;
    try {
    
    } catch (NoSuchAlgorithmException noSuchAlgorithmException) {
      return null;
    } catch (FileNotFoundException fileNotFoundException) {
    
    } finally {
      arrayOfByte1 = arrayOfByte2;
      if (arrayOfByte1 != null)
        arrayOfByte1.close(); 
    } 
    if (arrayOfByte1 != null)
      arrayOfByte1.close(); 
    return null;
  }
}
