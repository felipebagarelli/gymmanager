package com.felipebagarelli.gymmanager.controller;

import com.felipebagarelli.gymmanager.dto.request.CreateMemberRequest;
import com.felipebagarelli.gymmanager.dto.response.MemberResponse;
import com.felipebagarelli.gymmanager.service.MemberService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
public class MemberController {

    private MemberService memberService;

    public MemberController(MemberService memberService){
        this.memberService = memberService;
    }

    @PostMapping
    public MemberResponse addMembers(@RequestBody CreateMemberRequest request ){
        return memberService.addMember(request);
    }
    
    @GetMapping
    public List<MemberResponse> getAllMembers(){
        return memberService.findAllMembers();
    }
}
