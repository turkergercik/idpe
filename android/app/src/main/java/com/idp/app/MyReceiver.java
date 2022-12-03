package com.idp.app;

import android.app.PendingIntent;
import android.app.RemoteInput;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;

import androidx.annotation.RequiresApi;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.net.HttpURLConnection;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Date;

import io.socket.client.IO;
import io.socket.client.Socket;

public class MyReceiver extends BroadcastReceiver {



    public static Socket socket;
    {
        try {
            socket = IO.socket("https://smartifier.onrender.com");
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }
    public void sendPost(JSONObject jsonObject,Context context, String urlAdress, int notificationid,String conversationid) {
        Thread t1 = new Thread(new Runnable() {
            public void run() {
                FileOutputStream fos = null;
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
                    //PushNotificationService.savetodb(conversationid,jsonObject,context.getApplicationContext());
                    //System.out.println("23123");
                    fos = context.openFileOutput("sync.json",Context.MODE_PRIVATE);
                    JSONArray ya= (JSONArray) PushNotificationService.mainObj.get(conversationid);
                    ya.put(jsonObject);
                    //System.out.println("23123");

                    fos.write(PushNotificationService.mainObj.toString().getBytes());
                    //System.out.println("23123");
                    //System.out.println(PushNotificationService.mainObj);
                        // mainObj=null;


                } catch (Exception e) {
                    e.printStackTrace();
                }
            }});
        t1.start();
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    public void onReceive(Context context, Intent intent) {
        //intent.removeExtra("conversationid");
        String i =  intent.getAction();
        System.out.println(i);
        String conversationid = intent.getExtras().getString("conversationid");
        String notificationid = intent.getExtras().getString("notificationid");
        String sender = intent.getExtras().getString("sender");
        String receiver = intent.getExtras().getString("receiver");
        String title = intent.getExtras().getString("title");
        String channel = intent.getExtras().getString("channel");
        String name = intent.getExtras().getString("name");
        //String conversationidint = intent.getExtras().getString("conversationidint");
        Bundle b = RemoteInput.getResultsFromIntent(intent);
        System.out.println(title);
        String conversationidint= conversationid.replaceAll("[^0-9]", "").substring(0, 9);
        if (b != null) {
            String b1 = (String) b.getCharSequence("key");
            //System.out.println(b1);
            String format = new Date().toString();
            JSONObject json = new JSONObject();
            JSONObject json1 = new JSONObject();
            try {
                socket.connect();
                socket.emit("no",receiver);
                json.put("conversationid", conversationid);
                json.put("receiver", sender);
                json.put("sender", receiver);
                json.put("name", title);
                json.put("text", b1);
                json.put("createdAt", format);


                json1.put("receiver", sender);
                json1.put("conversationid", conversationid);
                json1.put("sender", receiver);
                json1.put("createdAt", format);
                json1.put("text", b1);
                json1.put("isNotification",true);

                socket.emit("send",json1);
                //socket.disconnect();
                //System.out.println(json);
                sendPost(json, context.getApplicationContext(), "https://smartifier.onrender.com/messages",Integer.parseInt(notificationid),conversationid);
                //PushNotificationService.other=title;
                //PushNotificationService.Conversation=conversationid;
                Message nm = new Message(b1,null,conversationid);

                //PushNotificationService.Conversation=conversationid;                //PushNotificationService.nm = NotificationManagerCompat.from(context.getApplicationContext());
                PushNotificationService.capitalCities.get(conversationid).add(nm);
                // PushNotificationService.Messages.add(nm);
                //Notification.Builder newbuilder = PushNotificationService.nb;
                //newbuilder.setStyle(PushNotificationService.style(PushNotificationService.Messages));
                PushNotificationService.nb.setStyle(PushNotificationService.style(PushNotificationService.capitalCities.get(conversationid),name,title));

                Intent intent1 = new Intent(context.getApplicationContext(), MainActivity.class);
                Intent intent2 = new Intent(context.getApplicationContext(), MyReceiver.class);
                //intent1.setAction(conversationid);
                //intent2.setAction(conversationid);
                intent1.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
                //intent2.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);

                intent1.putExtra("conversationid", conversationid);
                intent2.putExtra("conversationid", conversationid);
                intent2.putExtra("name", name);
                intent2.putExtra("conversationidint", conversationidint);
                intent2.putExtra("notificationid", notificationid);
                intent2.putExtra("sender", sender);
                intent2.putExtra("receiver", receiver);
                intent2.putExtra("title", title);
                intent2.putExtra("channel", channel);
                PendingIntent p = PendingIntent.getActivity(context.getApplicationContext(), Integer.parseInt(conversationidint), intent1, 0);
                PendingIntent  pe = PendingIntent.getBroadcast(context.getApplicationContext(), Integer.parseInt(conversationidint), intent2, PendingIntent.FLAG_UPDATE_CURRENT);
/*

                Notification.Builder nb1 = new Notification.Builder(context.getApplicationContext(), channel)
                        .setSmallIcon(R.drawable.ic_ss)
                        .setContentTitle(title)
                        .setContentText("text")
                        .setAutoCancel(true)
                        .setContentIntent(p)
                        .setStyle(PushNotificationService.style(PushNotificationService.capitalCities.get(conversationid),receiver,title))
                        .setColor(Color.argb(1, 138, 0, 0));

                RemoteInput remoteInput = new RemoteInput.Builder("key")
                        .setLabel("yanıtla")
                        .build();
                Notification.Action action = new Notification.Action.Builder(R.drawable.ic_launcher_background, "yanıtla", pe)
                        .addRemoteInput(remoteInput)
                        .build();
                nb1.addAction(action);

*/
                //Notification.MessagingStyle ms = new Notification.MessagingStyle("me");

                //NotificationManagerCompat.from(context.getApplicationContext()).notify(1, notification.build());
                //System.out.println(notificationid);
                System.out.println(title);
                // NotificationManagerCompat nm1 = NotificationManagerCompat.from(context);
               // nm1.notify(Integer.parseInt(conversationidint),PushNotificationService.nb.build());
                PushNotificationService.nm.notify(Integer.parseInt(conversationidint),PushNotificationService.builder(context.getApplicationContext(), conversationid,"2",pe,p).build());

                //PushNotificationService.updateNotification(context.getApplicationContext(),name,b1,channel,Integer.parseInt(notificationid),intent,);
                //nm.notify(1,notification.build());
                //nm.cancel(1);

                // nm.cancel(1);
                //nm.deleteNotificationChannel("fcm_default_channel");
            } catch (JSONException  e) {
                e.printStackTrace();
            }


        }
    }

    // an Intent broadcast.

    }
