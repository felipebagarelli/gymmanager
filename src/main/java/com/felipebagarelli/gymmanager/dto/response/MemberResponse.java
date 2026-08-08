package com.felipebagarelli.gymmanager.dto.response;

import java.time.LocalDate;

public record MemberResponse(
        Long id,
        String name,
        String email,
        String phone,
        LocalDate birthDate,
        Double height,
        Double weight,
        Boolean active
) {}
