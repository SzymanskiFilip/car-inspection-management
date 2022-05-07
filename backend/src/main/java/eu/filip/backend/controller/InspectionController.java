package eu.filip.backend.controller;

import eu.filip.backend.entity.Inspection;
import eu.filip.backend.repository.WorkshopRepository;
import eu.filip.backend.service.InspectionService;
import eu.filip.backend.util.InspectionDto;
import eu.filip.backend.util.InspectionRequestDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.criteria.CriteriaBuilder;
import java.security.Principal;
import java.util.List;

@RestController
public class InspectionController {

    private final InspectionService inspectionService;

    public InspectionController(InspectionService inspectionService) {
        this.inspectionService = inspectionService;
    }

    @PostMapping("/request-inspection")
    public ResponseEntity<Inspection> requestInspection(@RequestBody InspectionRequestDto inspection, Principal principal){

        inspectionService.createInspection(inspection, principal.getName());

        return ResponseEntity.ok().build();
    }

    @GetMapping("/inspections")
    public ResponseEntity<List<InspectionDto>> inspections(Principal principal){
        List<InspectionDto> inspections = inspectionService.findInspectionsByWorkshopId(principal.getName());

        return ResponseEntity.ok(inspections);
    }
}
