package com.CustomerService.CustomerService.Model.Dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerCreateRequest {
    @Size(min = 12, max = 12, message = "IDNo must have 12 characters")
    private String customerId;

    @NotNull(message = "Issue date can't be blank")
    private LocalDate issuedOn;

    @NotBlank(message = "Issue date can't be blank")
    private String issuedAt;

    private String frontImage;

    private String backImage;

    @NotBlank(message = "First name date can't be blank")
    private String firstName;

    @NotBlank(message = "Last name date can't be blank")
    private String lastName;

    @NotBlank(message = "Nation can't be blank")
    private String nation;

    @NotBlank(message = "Address can't be blank")
    private String address;

    @NotBlank(message = "Email can't be blank")
    @Email(message = "Invalid Email")
    private String email;

    @Size(min = 10, max = 10, message = "Phone Number must have 10 characters")
    private String phone;

    @NotNull(message = "Birth can't be blank")
    private LocalDate dateOfBirth;

    private LocalDateTime createdAt;

    private Boolean deleted;

    private LocalDateTime deletedAt;

}



