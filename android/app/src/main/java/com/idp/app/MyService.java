package com.idp.app;

import android.app.NotificationManager;
import android.app.RemoteInput;
import android.app.Service;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;

import androidx.annotation.RequiresApi;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.DataOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class MyService extends Service {
     MyService() {

        System.out.println(MainActivity.isVisible);
    }
    public void sendPost(JSONObject jsonObject,String urlAdress,int notificationid) {
        Thread t1 = new Thread(new Runnable() {
            public void run() {
                try {
                    URL url = new URL(urlAdress);
                    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                    conn.setRequestMethod("POST");
                    conn.setRequestProperty("Content-Type", "application/json;charset=UTF-8");
                    conn.setRequestProperty("Accept", "application/json");
                    conn.setDoOutput(true);
                    conn.setDoInput(true);
                    DataOutputStream os = new DataOutputStream(conn.getOutputStream());
                    //os.writeBytes(URLEncoder.encode(jsonParam.toString(), "UTF-8"));
                    os.writeBytes(jsonObject.toString());

                    os.flush();
                    os.close();

                    Log.i("STATUS", String.valueOf(conn.getResponseCode()));
                    Log.i("MSG", conn.getResponseMessage());

                    conn.disconnect();

                } catch (Exception e) {
                    e.printStackTrace();
                }
            }});
        t1.start();
        }




    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        String conversationid = intent.getExtras().getString("conversationid");
        String notificationid = intent.getExtras().getString("notificationid");
        String sender = intent.getExtras().getString("sender");
        String receiver = intent.getExtras().getString("receiver");
        String name = intent.getExtras().getString("name");
        String channel = intent.getExtras().getString("channel");

        Bundle b = RemoteInput.getResultsFromIntent(intent);
        if (b != null) {
            String b1 = (String) b.getCharSequence("key");
            System.out.println(b1);
            JSONObject json = new JSONObject();

            try {
                json.put("conversationid", conversationid);
                json.put("receiver", sender);
                json.put("sender", receiver);
                json.put("name", name);
                json.put("text", b1);
                System.out.println(json);
                sendPost(json,"https://smartifier.herokuapp.com/messages",Integer.parseInt(notificationid));

                //Notification.Builder notification =
                  //      new Notification.Builder(getApplicationContext(),"2" )
                    //            .setContentTitle("sds")
                      //          .setContentText("text");
                //NotificationManagerCompat.from(this).notify(2, notification.build());

                NotificationManager nm =(NotificationManager) getSystemService(NOTIFICATION_SERVICE);
                nm.cancel(Integer.parseInt(notificationid));
                //nm.cancel(1);

               // nm.cancel(1);
                //nm.deleteNotificationChannel("fcm_default_channel");
            } catch (JSONException  e) {
                e.printStackTrace();
            }

        }
            return super.onStartCommand(intent, flags, startId);
        }


    @Override
    public IBinder onBind(Intent intent) {
        // TODO: Return the communication channel to the service.
        throw new UnsupportedOperationException("Not yet implemented");
    }
}