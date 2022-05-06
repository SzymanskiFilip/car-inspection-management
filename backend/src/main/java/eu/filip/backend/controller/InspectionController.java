package eu.filip.backend.controller;

import eu.filip.backend.entity.Inspection;
import eu.filip.backend.service.InspectionService;
import eu.filip.backend.util.InspectionRequestDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.criteria.CriteriaBuilder;
import java.security.Principal;

@RestController
public class InspectionController {

    private final InspectionService inspectionService;

    public InspectionController(InspectionService inspectionService) {
        this.inspectionService = inspectionService;
    }

    @PostMapping("/request-inspection")
    public ResponseEntity<Inspection> requestInspection(@RequestBody InspectionRequestDto inspection, Principal principal){

        Inspection inspection1 = inspectionService.createInspection(inspection, principal.getName());

        return ResponseEntity.ok().build();
    }
}
