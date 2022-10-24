package com.idp.app;

public class Message {
    private CharSequence text;
    private long timestamp;
    private CharSequence sender;
    private CharSequence id;

    public Message(CharSequence text, CharSequence sender,CharSequence id) {
        this.text = text;
        this.sender = sender;
        this.id =id;
        timestamp = System.currentTimeMillis();
    }

    public  CharSequence getText() {
        return text;
    }
    public  CharSequence getId() {
        return id;
    }

    public  long getTimestamp() {
        return timestamp;
    }

    public  CharSequence getSender() {
        return sender;
    }




}
