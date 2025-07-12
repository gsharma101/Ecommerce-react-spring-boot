package com.gaurav.ai.services;

import com.gaurav.exception.ProductException;
import com.gaurav.response.ApiResponse;

public interface AiChatBotService {

    ApiResponse aiChatBot(String prompt,Long productId,Long userId) throws ProductException;
}
