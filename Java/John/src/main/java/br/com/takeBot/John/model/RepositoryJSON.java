package br.com.takeBot.John.model;


import java.io.*;
import java.net.*;

/**
 * @author João Victor de Castro Alves
 */
public class RepositoryJSON {

	/**
	 * @return JSONArray of Take.NET repositories on GitHub
	 */
	public String get() {
		HttpURLConnection connection = null;

		  try {
		    URL url = new URL("https://api.github.com/users/takenet/repos");
		    connection = (HttpURLConnection) url.openConnection();
		    connection.setRequestMethod("GET");
		    connection.setRequestProperty("User-Agent", "Mozilla/5.0");
		    connection.setUseCaches(false);
		    connection.setDoOutput(true);

		    InputStream is = connection.getInputStream();
		    BufferedReader rd = new BufferedReader(new InputStreamReader(is));
		    StringBuilder response = new StringBuilder();
		    String line;
		    while ((line = rd.readLine()) != null) {
		      response.append(line);
		      response.append('\r');
		    }
		    rd.close();
		    return  response.toString();	       
		  } catch (Exception e) {
		    e.printStackTrace();
		    return null;
		  } finally {
		    if (connection != null) {
		      connection.disconnect();
		    }
		  }
	}
}
