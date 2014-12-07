public class SampleApplication{
    
    LicenseKeyAPI API;

    public static void main(String args[]){
        new SampleApplication();
    }

    public SampleApplication(){
        API = new LicenseKeyAPI("localhost");
        
        // UserEmail, Key, AppID
        // int statusCode = API.checkApp("cgonzalez2@dyndns.org", "a58b852d-c3db-4ea1-a008-3d299aa144fd", "24");
        
        // AppID, Email, LicenseKey 
        // int statusCode = API.registerApp("34", "cgonzalez2@dyndns.org", "000150fe-14f6-4074-bcc0-481e410d339b");
        
        // UserName, UserEmail
        // int statusCode = API.registerUser("Poopie Doopie", "wah@wahmbulance.com"); 


        System.out.println("STATUS: " + statusCode);
    }
}
