package main.java.com.project.reference;

public class CustomObject {
   Integer num;

   public CustomObject(Integer num) {
      this.num = num;
   }

   public void setNum(Integer num) {
      this.num = num;
   }

   @Override
   public String toString() {
      return this.num.toString();
   }

}
