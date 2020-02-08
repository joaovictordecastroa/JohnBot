package br.com.takeBot.John.controller;

import java.text.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Main {
	
	@RequestMapping("/")
	@ResponseBody 	
	public String get() throws ParseException {
		RepositoryService repositoryService = new RepositoryService();
		return repositoryService.getJSONRepositories().toString();
	}
}
