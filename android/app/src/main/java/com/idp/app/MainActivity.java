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
        PushNotificationService.mainObj=new JSONObject();
        Intent intent = getIntent();
        System.out.println(PushNotificationService.mainObj);
        String conversationid = intent.getStringExtra("conversationid");
        if(conversationid!=""){
            System.out.println(conversationid);
            JSONObject jsonObject = new JSONObject();
            FileOutputStream fos = null;

            try {//socket = IO.socket(); // OK



                jsonObject.put("conversationid",conversationid);
                //jsonObject.put("cconversationid","");
                fos = openFileOutput("out.json", MODE_PRIVATE);
                fos.write(jsonObject.toString().getBytes());
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

}
