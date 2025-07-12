package com.gaurav.ai.services;

import com.gaurav.exception.ProductException;
import com.gaurav.mapper.OrderMapper;
import com.gaurav.mapper.ProductMapper;
import com.gaurav.model.Cart;
import com.gaurav.model.Order;
import com.gaurav.model.Product;
import com.gaurav.model.User;
import com.gaurav.repository.CartRepository;
import com.gaurav.repository.OrderRepository;
import com.gaurav.repository.ProductRepository;
import com.gaurav.repository.UserRepository;
import com.gaurav.response.ApiResponse;
import com.gaurav.response.FunctionResponse;
import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AiChatBotServiceImpl implements AiChatBotService {


    String GEMINI_API_KEY = "AIzaSyDp-jeRRqqbr08scpIn1p9rLEL_Nqv5Zuo";

    private final CartRepository cartRepository;

    private final OrderRepository orderRepository;

    private final ProductRepository productRepository;
    private final UserRepository userRepository;


    private JSONArray createFunctionDeclarations() {
        return new JSONArray()
                .put(new JSONObject()
                        .put("name", "getUserCart")
                        .put("description", "Retrieve the user's cart details")
                        .put("parameters", new JSONObject()
                                .put("type", "OBJECT")
                                .put("properties", new JSONObject()
                                        .put("cart", new JSONObject()
                                                .put("type", "STRING")
                                                .put("description", "Cart Details, like total item in cart, cart item, remove item from cart, cart Id")
                                        )
                                )
                                .put("required", new JSONArray()
                                        .put("cart")
                                )
                        )
                )
                .put(new JSONObject()
                        .put("name", "getUsersOrder")
                        .put("description", "Retrieve the user's order details")
                        .put("parameters", new JSONObject()
                                .put("type", "OBJECT")
                                .put("properties", new JSONObject()
                                        .put("order", new JSONObject()
                                                .put("type", "STRING")
                                                .put("description", "Order Details, order, total order, current order, delivered order, pending order, current order, cancled order")
                                        )
                                )
                                .put("required", new JSONArray()
                                        .put("order")
                                )
                        )
                )
                .put(new JSONObject()
                        .put("name", "getProductDetails")
                        .put("description", "Retrieve product details")
                        .put("parameters", new JSONObject()
                                .put("type", "OBJECT")
                                .put("properties", new JSONObject()
                                        .put("product", new JSONObject()
                                                .put("type", "STRING")
                                                .put("description", "The Product Details like, Product title, product id, product color, product size, selling price, mrp price, rating extra...")
                                        )
                                )
                                .put("required", new JSONArray()
                                        .put("product")
                                )
                        )
                );
    }


    private FunctionResponse processFunctionCall(JSONObject functionCall,
                                                 Long productId,
                                                 Long userId
    ) throws ProductException {
        String functionName = functionCall.getString("name");
        JSONObject args = functionCall.getJSONObject("args");

        FunctionResponse res = new FunctionResponse();
        res.setFunctionName(functionName);
        User user=userRepository.findById(userId).orElse(null);

        switch (functionName) {
            case "getUserCart":
//                Long userId = Long.parseLong(args.getString("userId"));
                Cart cart = cartRepository.findByUserId(userId);
                System.out.println("cart: " + cart.getId());
                res.setUserCart(cart);
                break;
            case "getUsersOrder":
//                Long orderId = Long.parseLong(args.getString("orderId"));
                List<Order> orders = orderRepository.findByUserId(userId);
                res.setOrderHistory(OrderMapper.toOrderHistory(orders,user));
                System.out.println("order history: " + OrderMapper.toOrderHistory(orders,user));
                break;
            case "getProductDetails":
//                Long productId = Long.parseLong(args.getString("productId"));
                Product product = productRepository.findById(productId).orElseThrow(
                        () -> new ProductException("product not found")
                );

                res.setProduct(product);
                break;
            default:
                throw new IllegalArgumentException("Unsupported function: " + functionName);
        }
        return res;
    }


    public FunctionResponse getFunctionResponse(String prompt, Long productId, Long userId) throws ProductException {
        String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + GEMINI_API_KEY;

        JSONObject requestBodyJson = new JSONObject()
                .put("contents", new JSONArray()
                        .put(new JSONObject()
                                .put("parts", new JSONArray()
                                        .put(new JSONObject()
                                                .put("text", prompt)
                                        )
                                )
                        )
                ).put("tools", new JSONArray()
                        .put(new JSONObject()
                                .put("functionDeclarations", createFunctionDeclarations())
                        )
                );


        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(org.springframework.http.MediaType.APPLICATION_JSON);

        HttpEntity<String> requestEntity = new HttpEntity<>(requestBodyJson.toString(), headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(GEMINI_API_URL, requestEntity, String.class);

        String responseBody = response.getBody();
        JSONObject jsonObject = new JSONObject(responseBody);

        System.out.println("functionResponse: " + responseBody);
        JSONArray candidates = jsonObject.getJSONArray("candidates");
        JSONObject firstCandidate = candidates.getJSONObject(0);
        JSONObject content = firstCandidate.getJSONObject("content");
        JSONArray parts = content.getJSONArray("parts");
        JSONObject firstPart = parts.getJSONObject(0);
        JSONObject functionCall = firstPart.getJSONObject("functionCall");

        return processFunctionCall(functionCall, productId, userId);
    }


    @Override
    public ApiResponse aiChatBot(String prompt, Long productId, Long userId) throws ProductException {
        String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + GEMINI_API_KEY;

        System.out.println("------- " + prompt);

        FunctionResponse functionResponse = getFunctionResponse(prompt, productId, userId);
        System.out.println("------- " + functionResponse);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Construct the request body
        String body = new JSONObject()
                .put("contents", new JSONArray()
                        .put(new JSONObject()
                                .put("role", "user")
                                .put("parts", new JSONArray()
                                        .put(new JSONObject()
                                                .put("text", prompt)
                                        )
                                )
                        )
                        .put(new JSONObject()
                                .put("role", "model")
                                .put("parts", new JSONArray()
                                        .put(new JSONObject()
                                                .put("functionCall", new JSONObject()
                                                        .put("name", functionResponse.getFunctionName())
                                                        .put("args", new JSONObject()
                                                                .put("cart", functionResponse.getUserCart()!=null?functionResponse.getUserCart().getUser():null)
                                                                .put("order",  functionResponse.getOrderHistory()!=null? functionResponse.getOrderHistory() :null )
                                                                .put("product", functionResponse.getProduct()!=null?ProductMapper.toProductDto(functionResponse.getProduct()):null)
                                                        )
                                                )
                                        )
                                )
                        )
                        .put(new JSONObject()
                                .put("role", "function")
                                .put("parts", new JSONArray()
                                        .put(new JSONObject()
                                                .put("functionResponse", new JSONObject()
                                                        .put("name", functionResponse.getFunctionName())
                                                        .put("response", new JSONObject()
                                                                .put("name", functionResponse.getFunctionName())
                                                                .put("content", functionResponse)
                                                        )
                                                )
                                        )
                                )
                        )
                )
                .put("tools", new JSONArray()
                        .put(new JSONObject()
                                .put("functionDeclarations", createFunctionDeclarations())
                        )
                )
                .toString();

        // Make the API request
        HttpEntity<String> request = new HttpEntity<>(body, headers);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(GEMINI_API_URL, request, String.class);

        // Process the response
        String responseBody = response.getBody();
        JSONObject jsonObject = new JSONObject(responseBody);

        // Extract the first candidate
        JSONArray candidates = jsonObject.getJSONArray("candidates");
        JSONObject firstCandidate = candidates.getJSONObject(0);

        // Extract the text
        JSONObject content = firstCandidate.getJSONObject("content");
        JSONArray parts = content.getJSONArray("parts");
        JSONObject firstPart = parts.getJSONObject(0);
        String text = firstPart.getString("text");

        // Prepare and return the API response
        ApiResponse res = new ApiResponse();
        res.setMessage(text);
        return res;

    }
}
