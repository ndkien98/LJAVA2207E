package com.t3h;

import java.lang.reflect.Field;

public class Main {

    public static void main(String[] args) {
	    Address address = new Address();
        address.setAddr1("a");
        address.setAddr2("b");


        Field[] fields = address.getClass().getDeclaredFields();
        for (int i = 0; i < fields.length; i++) {
            Field field = fields[i];
            field.setAccessible(true);
            try {
                Object value = field.get(field);
                if (value == null){
                    field.set(field,"");
                }
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        System.out.println(address.toString());
    }
}
