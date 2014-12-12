/**
 * Written by Evan Reichard
 * December 2014
 **/

import java.net.*;
import org.json.simple.*;
import org.json.simple.parser.JSONParser;

import org.apache.http.*;
import org.apache.http.message.*;
import org.apache.http.util.EntityUtils;
import org.apache.http.client.*;
import org.apache.http.client.methods.*;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.client.entity.UrlEncodedFormEntity;

public class LicenseKeyAPI{
    
    private String baseServerURLAddress;
    HttpClient httpClient = HttpClientBuilder.create().build(); 

    /**
     * The constructor with the server address specified.
     **/
    public LicenseKeyAPI(String serverAddress){
        baseServerURLAddress = "http://" + serverAddress + ":8080/";
    }

    /**
     * Registers the application with the server
     *
     * @param   licenseKey  The license key to register with the server.
     * @param   appID       The application ID to register with the server.
     * @param   userEmail   The users email to register the app with the server.
     * @return              The status code returned from the server.
     **/
    public int registerApp(String licenseKey, String appID, String userEmail){
        String URLpostFixEndpoint = "api/client/register_application";
        
        // Creates HTTP POST request
        HttpPost httppost = new HttpPost(baseServerURLAddress + URLpostFixEndpoint);
        httppost.addHeader("Content-Type", "application/json");
        httppost.setHeader("Content-Type", "application/json; charset= utf-8");
        httppost.setHeader("Accept", "application/json"); 

        JSONObject json = new JSONObject();
        json.put("email", userEmail);
        json.put("licensekey", licenseKey);
        json.put("appID", appID);

        StringEntity entity = new StringEntity(json.toString(), "utf-8");

        // Adds the POST params to the request
        httppost.setEntity(entity);

        return sendPOST(httppost); 
    }
   
    /**
     * Checks the license status with the server.
     *
     * @param   licenseKey  The license key to verify with the server.
     * @param   appID       The appID to verify with the server.
     * @param   userName    The users name to verify with the server.
     * @return              The status code returned from the server.
     **/ 
    public int checkApp(String licenseKey, String appID, String userEmail){
        String URLpostFixEndpoint = "api/client/check_license";
        
        // Creates HTTP POST request
        HttpPost httppost = new HttpPost(baseServerURLAddress + URLpostFixEndpoint);
        httppost.addHeader("Content-Type", "application/json");
        httppost.setHeader("Content-Type", "application/json; charset= utf-8");
        httppost.setHeader("Accept", "application/json"); 

        JSONObject json = new JSONObject();
        json.put("email", userEmail);
        json.put("licensekey", licenseKey);
        json.put("appID", appID);

        StringEntity entity = new StringEntity(json.toString(), "utf-8");

        // Adds the POST params to the request
        httppost.setEntity(entity);

        return sendPOST(httppost); 
    }

    /**
     * Registers a user with the server
     *
     * @param   userName    The users name to register with the server.
     * @param   userEmail   The users email to register with the server.
     * @return              The status code returned from the server.
     **/
    public int registerUser(String userName, String userEmail){
        String URLpostFixEndpoint = "api/client/register_user";
        
        // Creates HTTP POST request
        HttpPost httppost = new HttpPost(baseServerURLAddress + URLpostFixEndpoint);
        httppost.addHeader("Content-Type", "application/json");
        httppost.setHeader("Content-Type", "application/json; charset= utf-8");
        httppost.setHeader("Accept", "application/json"); 

        JSONObject json = new JSONObject();
        json.put("username", userName);
        json.put("email", userEmail);

        StringEntity entity = new StringEntity(json.toString(), "utf-8");

        // Adds the POST params to the request
        httppost.setEntity(entity);

        return sendPOST(httppost); 
    }
    
    /**
     * The method that sends a post command and reads the status response.
     *
     * @param   postObj     The HttpPost object that contains the params and the URL.
     * @return              The status code returned by the server.
     **/
    private int sendPOST(HttpPost postObj){
        HttpResponse response;

        try{
            response = httpClient.execute(postObj); 
            
            HttpEntity entity = response.getEntity();

            if(entity != null){
                String jsonString = EntityUtils.toString(entity);
                JSONObject json = (JSONObject)new JSONParser().parse(jsonString);
                return Integer.parseInt(json.get("CODE").toString());
            }
        }catch(Exception e){
            
        }
        
        // ERROR: 5000 Communication Error        
        return 5000; 
    }
}
