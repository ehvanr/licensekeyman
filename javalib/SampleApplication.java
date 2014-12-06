public class SampleApplication{
    
    LicenseKeyAPI API;

    public static void main(String args[]){
        new SampleApplication();
    }

    public SampleApplication(){
        API = new LicenseKeyAPI("localhost");
        
        // UserEmail, Key, AppID
        int statusCode = API.checkApp("cgonzalez2@dyndns.org", "a58b852d-c3db-4ea1-a008-3d299aa144fd", "24");
        
        System.out.println("STATUS: " + statusCode);
    }
}
