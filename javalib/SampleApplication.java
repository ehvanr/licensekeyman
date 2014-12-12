/**
 * Written by Evan Reichard
 * December 2014
 **/

import java.util.Scanner;

public class SampleApplication{
    
    LicenseKeyAPI API;
    Scanner in = new Scanner(System.in);

    public static void main(String args[]){
        new SampleApplication();
    }

    public SampleApplication(){
        API = new LicenseKeyAPI("localhost");
        mainMenu();
    }

    public void mainMenu(){

        while(true){
            System.out.println("---------------------------------------------------------");
            System.out.println("-------------- SAMPLE LICENSED APPLICATION --------------"); 
            System.out.println("---------------------------------------------------------");
            System.out.println("\t1. Register Application");
            System.out.println("\t2. Check Registration");
            System.out.println("\t3. Register User");
            System.out.print("\n\tPlease Select an Option: ");
            int val = in.nextInt();

            in.nextLine();

            switch(val){
                case 1: registerApp();
                        break;
                case 2: checkRegistration();
                        break;
                case 3: registerUser();
                        break;
            }
        } 
    }

    public void registerApp(){
        System.out.println("---------------------------------------------------------");
        System.out.println("------------------- REGISTER APPLICATION ----------------"); 
        System.out.println("---------------------------------------------------------");

        System.out.print("\n\tLicense Key: ");
        String licenseKey = in.nextLine();

        System.out.print("\tApplication ID: ");
        String applicationID = in.nextLine();

        System.out.print("\tUser Email: ");
        String userEmail = in.nextLine();

        int statusCode = API.registerApp(licenseKey, applicationID, userEmail);

        System.out.println("\n\tSTATUS CODE: " + statusCode);

        mainMenu(); 
    }

    public void checkRegistration(){
        System.out.println("---------------------------------------------------------");
        System.out.println("------------------ CHECK REGISTRATION -------------------"); 
        System.out.println("---------------------------------------------------------");
        
        System.out.print("\n\tLicense Key: ");
        String licenseKey = in.nextLine();

        System.out.print("\tApplication ID: ");
        String applicationID = in.nextLine();

        System.out.print("\tUser Email: ");
        String userEmail = in.nextLine();

        int statusCode = API.checkApp(licenseKey, applicationID, userEmail);

        System.out.println("\n\tSTATUS CODE: " + statusCode);

        mainMenu(); 
    }

    public void registerUser(){
        System.out.println("---------------------------------------------------------");
        System.out.println("-------------------- REGISTER USER ----------------------"); 
        System.out.println("---------------------------------------------------------");
        
        System.out.print("\n\tUser Name: ");
        String userName = in.nextLine();

        System.out.print("\tUser Email: ");
        String userEmail = in.nextLine();

        int statusCode = API.registerUser(userName, userEmail); 

        System.out.println("\n\tSTATUS CODE: " + statusCode);

        mainMenu(); 
    }
}
