package eu.filip.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class LoginController {
    @GetMapping("/p")
    public String test(){
        return "access";
    }

    @GetMapping("/pr")
    public String pr(){
        return "no";
    }
}
