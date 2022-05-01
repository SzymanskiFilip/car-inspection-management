package eu.filip.backend.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import eu.filip.backend.entity.User;
import eu.filip.backend.service.UserDetailsServiceImpl;
import eu.filip.backend.service.UserService;
import eu.filip.backend.util.LoginCredentials;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

public class JsonAuthFilter extends UsernamePasswordAuthenticationFilter {
    private final ObjectMapper objectMapper;
    private final UserService userService;

    public JsonAuthFilter(ObjectMapper objectMapper, UserService userService) {
        this.objectMapper = objectMapper;
        this.userService = userService;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
        try {
            BufferedReader reader = request.getReader();
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
            LoginCredentials authRequest = objectMapper.readValue(sb.toString(), LoginCredentials.class);
            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                    authRequest.getUsername(), authRequest.getPassword()
            );
            setDetails(request, token);

            User user = userService.findUserByUsername(authRequest.getUsername());
            Cookie roleCookie = new Cookie("ROLE", user.getRole());
            response.addCookie(roleCookie);

            return this.getAuthenticationManager().authenticate(token);
        } catch (IOException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }
}
