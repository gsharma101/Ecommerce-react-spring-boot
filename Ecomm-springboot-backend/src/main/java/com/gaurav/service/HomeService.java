package com.gaurav.service;

import com.gaurav.model.Home;
import com.gaurav.model.HomeCategory;

import java.util.List;

public interface HomeService {

    Home creatHomePageData(List<HomeCategory> categories);

}
