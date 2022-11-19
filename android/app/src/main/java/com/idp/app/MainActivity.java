package com.idp.app;

import android.app.Notification;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;

import androidx.annotation.RequiresApi;
import androidx.core.app.NotificationManagerCompat;

import com.getcapacitor.BridgeActivity;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class MainActivity extends BridgeActivity {

    private static  NotificationManagerCompat nm;

    static boolean isVisible = false;
    public Boolean set (Boolean s){
        isVisible = s;
        return isVisible;
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        System.out.println("helllooo");


        //webView.setOverScrollMode(View.OVER_SCROLL_ALWAYS);

                //.overScrollMode = OVER_SCROLL_NEVER
        //PushNotificationService.mainObj=new JSONObject();
        Intent intent = getIntent();
        System.out.println(PushNotificationService.mainObj);
        String conversationid = intent.getStringExtra("conversationid");
        if(conversationid!=""){
            System.out.println(conversationid);
            JSONObject jsonObject = new JSONObject();
            JSONObject jsonObject1 = new JSONObject();
            FileOutputStream fos = null;
            FileOutputStream fos1 = null;

            try {//socket = IO.socket(); // OK



                jsonObject.put("conversationid",conversationid);
                jsonObject1.put("","");

                //jsonObject.put("cconversationid","");
                fos = openFileOutput("out.json", MODE_PRIVATE);
                //fos1 = openFileOutput("sync.json", MODE_PRIVATE);
                fos.write(jsonObject.toString().getBytes());

                //fos1.write(jsonObject1.toString().getBytes());

                //String userString = jsonObject.toString();
                //FileWriter file = new FileWriter("out.json");
                //file.write(userString);
                //file.flush();
                //file.close();

            } catch (FileNotFoundException e) {
            } catch (JSONException | IOException e) {
                e.printStackTrace();
            }
            //PushNotificationService.mainObj=null;

            super.onCreate(savedInstanceState);


    }

    }
    @RequiresApi(api = Build.VERSION_CODES.O)
    public static void removeNotification(Context context, int notificationId) {
        Notification.Builder notificationg =
                new Notification.Builder(context,"2" )
                        .setSmallIcon(R.drawable.ic_launcher_background)
                        .setContentTitle("title");
        nm.notify(1,notificationg.build());

    }

    @Override
    public void onResume() {

        set(true);
        super.onResume();
    }

    @Override
    public void onPause() {
        super.onPause();
        set(false);
    }
    @Override
    public void onStart() {
        super.onStart();
        // Disable the rubber-band over-scroll effect that causes the app UI to get stretched.
        android.webkit.WebView v = getBridge().getWebView();
        v.setOverScrollMode(v.OVER_SCROLL_IF_CONTENT_SCROLLS);
    }

}
