package com.idp.app;


import android.app.Notification;
import android.app.PendingIntent;
import android.app.RemoteInput;
import android.app.TaskStackBuilder;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.os.Build;
import android.util.Log;

import androidx.annotation.RequiresApi;
import androidx.core.app.NotificationManagerCompat;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import org.apache.commons.io.output.ByteArrayOutputStream;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

public class PushNotificationService extends FirebaseMessagingService {
    public static  NotificationManagerCompat nm;
    public static  Notification.Builder nb;
    public static  Notification.MessagingStyle ns;
    static String user;
    static JSONObject mainObj = new JSONObject();
    static String Conversation;
    static String other;
static HashMap<String, ArrayList<Message>> capitalCities = new HashMap<String, ArrayList<Message>>();
    static HashMap<String, JSONObject> capitalCities1 = new HashMap<String, JSONObject>();


static List<Message> Messages= new ArrayList<com.idp.app.Message>();
    @RequiresApi(api = Build.VERSION_CODES.O)
    public static void updateNotification(Context context,String conversationid,String notificationid,String sender,String receiver,String title,String channel,String text) {

    }
        @RequiresApi(api = Build.VERSION_CODES.O)
        @Override
        public void onMessageReceived (RemoteMessage remoteMessage){
            nm = NotificationManagerCompat.from(this);
            String title = remoteMessage.getData().get("title");
            String text = remoteMessage.getData().get("body");
            String conversationid = remoteMessage.getData().get("conversationid");
            String sender = remoteMessage.getData().get("sender");
            String receiver = remoteMessage.getData().get("receiver");
            String name = remoteMessage.getData().get("receivername");
            String channel = remoteMessage.getData().get("channel");
            String image1 = remoteMessage.getData().get("image");
            //String id2 = remoteMessage.getData().get("id");
            Date date = new Date();
            int id = (int) date.getTime();
            String notificationid = String.valueOf(id);

            String conversationidint= conversationid.replaceAll("[^0-9]", "").substring(0, 9);

            //final String CHANNEL_ID = "HEADS_UP_NOTIFICATION";
            user =name;
            other=title;
            //Conversation=conversationid;


            File f = new File("/data/data/com.idp.app/files/con.json");
            String path= null;
            FileInputStream is = null;
            JSONObject cconversationprop = null;
            JSONObject jsonObject=null;
            JSONObject jsonObject1=new JSONObject();
            String cconversationid = null;
            //System.out.println("format");
            //güncel chatin takibi ona göre bildirim atmama
            if (f.exists()){

                try {

                    //is = new FileInputStream(f.getAbsolutePath());
                    String text1 = new String(Files.readAllBytes(Paths.get(f.getAbsolutePath())), StandardCharsets.UTF_8);

                    cconversationprop = new JSONObject(text1);
                    cconversationid = (String) cconversationprop.get("cconversationid");


                } catch (FileNotFoundException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    e.printStackTrace();
                } catch (JSONException e) {
                    e.printStackTrace();
                }

            }
            String format = new Date().toString();
            //System.out.println(format);
            //System.out.println(capitalCities);
           String media= null;
               /* try {
                    jsonObject1.put("conversationid", conversationid);
                    jsonObject1.put("sender", sender);
                    jsonObject1.put("createdAt", format);
                    if(image1 !=null){
                        try {
                            URL imageUrl = new URL(image1);
                            URLConnection ucon = imageUrl.openConnection();
                            InputStream iso = ucon.getInputStream();
                            ByteArrayOutputStream baos = new ByteArrayOutputStream();
                            byte[] buffer = new byte[2048];
                            int read = 0;
                            while ((read = iso.read(buffer, 0, buffer.length)) != -1) {
                                baos.write(buffer, 0, read);
                            }
                            baos.flush();
                            media = Base64.getEncoder().withoutPadding().encodeToString(baos.toByteArray()).replace("\\","");
                                   // encodeToString(baos.toByteArray(), Base64.DEFAULT);


                        } catch (Exception e) {
                            Log.d("Error", e.toString());
                        }


                            java.net.URL url = new java.net.URL(image1);
                            InputStream ıs = url.openStream();
                            byte[] bytes = org.apache.commons.io.IOUtils.toByteArray(ıs);
                            String s=  Base64.encodeToString(bytes,Base64.DEFAULT);
                            String news = s.replace("\\","");
                            Gson userGson=new GsonBuilder().create();

                            String old=jsonObject1.toString().replaceFirst(".$","");
                            String media1=old+","+"\"media\":\"data:image/jpeg;base64,"+media+"\""+"}";
                           // JSONObject js = new JSONObject(media1);
                        //System.out.println(media1);
                        //savetodbstr(conversationid,media1,this);


                    }else{
                        jsonObject1.put("text", text);
                        //savetodb(conversationid,jsonObject1,this);
                    }

                } catch (JSONException  e) {
                    e.printStackTrace();
                }*/
            // System.out.println(jsonObject1);

               // DataBaseHelper dbHelper = new DataBaseHelper(this);
                //dbHelper.checkDataBase();
                //System.out.println(conversationid);
                //dbHelper.insertuserdata(conversationid,jsonObject1);


            FileOutputStream fos = null;
            try {
                fos = openFileOutput("sync.json", MODE_PRIVATE);
                JSONObject jo = new JSONObject();
                jo.put("conversationid", conversationid);
                jo.put("sender", sender);
                jo.put("text", text);
                jo.put("createdAt", format);
if(image1!=null){
    try {
        URL imageUrl = new URL(image1);
        URLConnection ucon = imageUrl.openConnection();
        InputStream iso = ucon.getInputStream();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        byte[] buffer = new byte[2048];
        int read = 0;
        while ((read = iso.read(buffer, 0, buffer.length)) != -1) {
            baos.write(buffer, 0, read);
        }
        baos.flush();
        media = Base64.getEncoder().withoutPadding().encodeToString(baos.toByteArray()).replace("\\","");
        // encodeToString(baos.toByteArray(), Base64.DEFAULT);
        //System.out.println(media);
jo.put("media","data:image/jpeg;base64,"+media);
        //System.out.println(jo);
    } catch (Exception e) {
        Log.d("Error", e.toString());
    }
}

                JSONArray ja = new JSONArray();
                ja.put(jo);

                //System.out.println(ja);

                if(mainObj.has(conversationid)) {
                    JSONArray ya= (JSONArray) mainObj.get(conversationid);
                    ya.put(jo);
                    //System.out.println(mainObj.get("employ"));
                    //System.out.println("var");
                    //System.out.println(mainObj);
                }else{
                    mainObj.put(conversationid,ja);
                    //System.out.println(mainObj);
                    //System.out.println("boş");
                }


            } catch (Exception e) {
                e.printStackTrace();
            }
            try {
                if(MainActivity.isVisible==false) {
                    fos.write(mainObj.toString().getBytes());
                }
                //System.out.println(mainObj);
                // mainObj=null;
            } catch (IOException e) {
                e.printStackTrace();
            }
            PendingIntent p;
            PendingIntent pe;
            if (MainActivity.isVisible == false || (!cconversationid.equals(conversationid))) {
                int i=(int) System.currentTimeMillis();
                System.out.println(i);
                Intent intent1 = new Intent(getApplicationContext(), MainActivity.class);
                Intent intent2 = new Intent(getApplicationContext(), MyReceiver.class);
                //intent1.setAction(conversationidint);
                //intent2.setAction(String.valueOf(i));
                TaskStackBuilder stackBuilder = TaskStackBuilder.create(this);
                stackBuilder.addParentStack(MainActivity.class);
                stackBuilder.addNextIntent(intent2);
                //Intent intentEmailView = new Intent (this, MyReceiver.class);
                //intent2.putExtra("EmailId","you can Pass emailId here");
                //stackBuilder.addNextIntent(intent2);
                //PendingIntent pendingIntent = stackBuilder.getPendingIntent(0, PendingIntent.FLAG_UPDATE_CURRENT);
                intent1.putExtra("conversationid", conversationid);
                intent2.putExtra("conversationid", conversationid);
                intent2.putExtra("name", name);
                intent2.putExtra("conversationidint", conversationidint);
                intent2.putExtra("notificationid", notificationid);
                intent2.putExtra("sender", sender);
                intent2.putExtra("receiver", receiver);
                intent2.putExtra("title", title);
                intent2.putExtra("channel", channel);
//sendBroadcast(intent2);
                //startForegroundService(intent2);
                //getApplicationContext().startService(intent1);
                 if(capitalCities.containsKey(conversationid)){
                     capitalCities.get(conversationid).add(new com.idp.app.Message(text,title,conversationid));
                  }else{
    List<Message> newm = new ArrayList<>();
    newm.add(new com.idp.app.Message(text,title,conversationid));
    capitalCities.put(conversationid, (ArrayList<Message>) newm);
}

                 //Messages.add(new com.idp.app.Message(text,title,conversationid));



                intent1.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);

                //intent2.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                 p = PendingIntent.getActivity(getApplicationContext(),Integer.parseInt(conversationidint), intent1,0);
                //PendingIntent pe = stackBuilder.getPendingIntent(id, PendingIntent.FLAG_UPDATE_CURRENT);

                 pe = PendingIntent.getBroadcast(getApplicationContext(),Integer.parseInt(conversationidint), intent2,PendingIntent.FLAG_UPDATE_CURRENT);


                //System.out.println(conversationidint);
                if(channel.equals("2")){
    Bitmap image = null;
    try {
        URL url = new URL(image1);
        image = BitmapFactory.decodeStream(url.openConnection().getInputStream());
    } catch(IOException e) {
        //System.out.println(e);
    }
    //System.out.println("llll");

    nb = new Notification.Builder(getApplicationContext(), channel)
            .setSmallIcon(R.drawable.ic_ss)
            .setContentTitle(title)
            .setContentText(text)
            .setAutoCancel(true)
            .setLargeIcon(image)
            .setStyle(new Notification.BigPictureStyle().bigPicture(image))
            .setContentIntent(p)
            .setColor(Color.argb(1, 138, 0, 0));


}else{
    nb = builder(getApplicationContext(),conversationid,channel,pe,p);

}

               /* Notification.Builder notificationg =
                        new Notification.Builder(getApplicationContext(), channel)
                                .setSmallIcon(R.drawable.ic_launcher_background)
                                .setGroup("g")
                                .setGroupSummary(true);

*/
             /*  if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                    RemoteInput remoteInput = new RemoteInput.Builder("key")
                            .setLabel("yanıtla")
                            .build();
                    Notification.Action action = new Notification.Action.Builder(R.drawable.ic_launcher_background, "yanıtla", pe)
                            .addRemoteInput(remoteInput)
                            .build();
                    nb.addAction(action);

                }*/

                //nm.notify(1,notificationg.build());



                nm.notify(Integer.parseInt(conversationidint),nb.build());


                /*String format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").format(new Date());
                try {
                    jsonObject1.put("conversationid", conversationid);
                    jsonObject1.put("sender", sender);
                    jsonObject1.put("text", text);
                    jsonObject1.put("createdAt", format);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                System.out.println(jsonObject1);

                DataBaseHelper dbHelper = new DataBaseHelper(this);
                //dbHelper.checkDataBase();
                System.out.println(conversationid);
                dbHelper.insertuserdata(conversationid,jsonObject1);
         */

            } if(MainActivity.isVisible == true){

            }
                super.onMessageReceived(remoteMessage);
            }
@RequiresApi(api = Build.VERSION_CODES.O)
public  static Notification.Builder builder(Context c, String conversationid, String channel,PendingIntent pe,PendingIntent p){
    nb = new Notification.Builder(c, channel)
            .setSmallIcon(R.drawable.ic_ss)
            //.setContentTitle(title)
            //.setContentText(text)
            .setAutoCancel(true)
            .setStyle(style(capitalCities.get(conversationid),user,other))
            .setContentIntent(p)
            .setColor(Color.argb(1, 138, 0, 0));

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
        RemoteInput remoteInput = new RemoteInput.Builder("key")
                .setLabel("yanıtla")
                .build();
        Notification.Action action = new Notification.Action.Builder(R.drawable.ic_launcher_background, "yanıtla", pe)
                .addRemoteInput(remoteInput)
                .build();
        nb.addAction(action);

    }

        return  nb;

}

            public static void savetodb(String conversationid, JSONObject jsonObject,Context context){


                DataBaseHelper dbHelper = new DataBaseHelper(context);
                //dbHelper.checkDataBase();
                //System.out.println(conversationid);
                dbHelper.insertuserdata(conversationid,jsonObject);



            }
    public static void savetodbstr(String conversationid, String jsonObject,Context context){


        DataBaseHelper dbHelper = new DataBaseHelper(context);
        //dbHelper.checkDataBase();
        //System.out.println(conversationid);
        dbHelper.insertuserdatastr(conversationid,jsonObject);

    }
            public static Notification.MessagingStyle style(List<Message> list,String user,String other){
                ns = new Notification.MessagingStyle(user);
                ns.setConversationTitle(other);

                for (Message chatMessage : list) {

                    Notification.MessagingStyle.Message notificationMessage =
                            new Notification.MessagingStyle.Message(
                                    chatMessage.getText(),
                                    chatMessage.getTimestamp(),
                                    chatMessage.getSender()
                            );
                    ns.addMessage(notificationMessage);

                }


                return ns;

            }



        }
