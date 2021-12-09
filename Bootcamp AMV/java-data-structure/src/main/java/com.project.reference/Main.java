package com.project.reference;

import main.java.com.project.reference.CustomObject;

public class Main {
   public static void main(String[] args) {
      int intA = 1;
      int intB = intA;

      System.out.println("intA = " + intA + ", intB = " + intB);
      intA = 2;
      System.out.println("intA = " + intA + ", intB = " + intB);
      
      CustomObject objA = new CustomObject(5);
      CustomObject objB = objA;

      System.out.println("objA = " + objA + ", objB = " + objB);
      objA.setNum(6);
      System.out.println("objA = " + objA + ", objB = " + objB);
   }
}