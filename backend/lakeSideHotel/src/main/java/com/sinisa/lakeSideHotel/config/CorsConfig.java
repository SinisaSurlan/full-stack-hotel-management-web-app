/*
 * Copyright (c) 2024.
 */

package com.sinisa.lakeSideHotel.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public  void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/rooms/room/types")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET");
        registry.addMapping("/rooms/add/new-room")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("POST");
    }
}
