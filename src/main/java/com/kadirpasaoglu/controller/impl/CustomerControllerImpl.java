package com.kadirpasaoglu.controller.impl;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/api/customer")
@CrossOrigin(origins = "http://localhost:5173") // React uygulamanızın çalıştığı port
public class CustomerControllerImpl implements ICustomerContoller {
    // ... mevcut kodlar
} 