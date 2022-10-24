package com.idp.app;

import android.annotation.SuppressLint;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import org.json.JSONObject;

public class DataBaseHelper extends SQLiteOpenHelper {
    public static String DB_PATH = "/data/data/com.idp.app/databases/mydb.db";
    public static String DB_NAME = "mydb.db";
    public static final int DB_VERSION = 1;
    public static final String TABLE_NAME = "_ionickv";
    private static  String ID_COL = "id";
    private static  String KEY_COL = "key";
    private static  String KEY_COL1 = KEY_COL.toString();
    private static  String VALUE_COL = "value";


    public DataBaseHelper(Context context) {
        super(context, DB_NAME, null, DB_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase DB) {
        String query = "CREATE TABLE IF NOT EXISTS " + TABLE_NAME + " ("
                + ID_COL + " INTEGER , "
                + KEY_COL + "TEXT PRIMARY KEY,"
                + VALUE_COL + " TEXT)";
        // at last we are calling a exec sql
        // method to execute above sql query
        DB.execSQL(query);


        //String a ="key";
       // DB.execSQL("create Table _ionicv(id INTEGER primary key, a TEXT, value TEXT)");
    }
   /* public boolean checkDataBase() {
        SQLiteDatabase DB = null;
        try {
            System.out.println("ok");
            String myPath = DB_PATH;
            tempDB = SQLiteDatabase.openDatabase(myPath, null, SQLiteDatabase.OPEN_READWRITE);
            System.out.println(tempDB);
        } catch (SQLiteException e) {
            Log.e("tle99 - check", e.getMessage());
        }
        if (tempDB != null)
            tempDB.close();
        return tempDB != null ? true : false;
    }*/

    public Boolean insertuserdata(String convid,JSONObject jsonObject) {
        SQLiteDatabase DB = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        Cursor cursor = DB.rawQuery(" SELECT * FROM " + TABLE_NAME + " WHERE " + KEY_COL1 + "= ? ",new String[]{convid});
        //System.out.println("1123123");
        //System.out.println(cursor);
        if (cursor.moveToFirst()) {
            //System.out.println(cursor);
            @SuppressLint("Range") String str = cursor.getString(cursor.getColumnIndex(VALUE_COL));
            StringBuilder builder = new StringBuilder (str);
           // System.out.println(str);
            builder.insert (1, jsonObject.toString()+",");
            String finalString = builder.toString();
            //System.out.println(finalString);
            //contentValues.put(KEY_COL, convid);
            contentValues.put(VALUE_COL, finalString);

        }

        //contentValues.put(ID_COL,"");
        //long result = DB.insert(TABLE_NAME, null, contentValues);
        //System.out.println(result);

        //System.out.println("ok");

        long result = DB.update(TABLE_NAME,contentValues, KEY_COL1 +" = ? "  ,new String[]{convid});
        //System.out.println("1");
        //System.out.println(result);
        if(result==-1){
            return false;
        }else{
            return true;
        }
    }
    public Boolean insertuserdatastr(String convid,String jsonObject) {
        SQLiteDatabase DB = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        Cursor cursor = DB.rawQuery(" SELECT * FROM " + TABLE_NAME + " WHERE " + KEY_COL1 + "= ? ",new String[]{convid});
        //System.out.println("1");
        if (cursor.moveToFirst()) {
            @SuppressLint("Range") String str = cursor.getString(cursor.getColumnIndex(VALUE_COL));
            StringBuilder builder = new StringBuilder (str);

            builder.insert (1, jsonObject+",");
            String finalString = builder.toString();
            //System.out.println(finalString);
            //contentValues.put(KEY_COL, convid);
            contentValues.put(VALUE_COL, finalString);

        }
        //contentValues.put(ID_COL,"");
        //long result = DB.insert(TABLE_NAME, null, contentValues);
        //System.out.println(result);

        //System.out.println("ok");

        long result = DB.update(TABLE_NAME,contentValues, KEY_COL +" = ? "  ,new String[]{convid});
        //System.out.println("1");
        //System.out.println(result);
        if(result==-1){
            return false;
        }else{
            return true;
        }
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {

    }
}
