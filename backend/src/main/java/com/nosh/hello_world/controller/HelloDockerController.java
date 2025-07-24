package com.nosh.hello_world.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "https://hellodocker.vercel.app")
@RestController
@RequestMapping("/api")
public class HelloDockerController {
    @GetMapping("/hello")
    public String helloDocker() {
        return "Hello Docker, wassup !. Give my regards to vite reactjs.";
    }
}
