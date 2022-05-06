package eu.filip.backend.service;

import eu.filip.backend.entity.Client;
import eu.filip.backend.entity.Inspection;
import eu.filip.backend.entity.User;
import eu.filip.backend.entity.Workshop;
import eu.filip.backend.repository.ClientRepository;
import eu.filip.backend.repository.InspectionRepository;
import eu.filip.backend.repository.UserRepository;
import eu.filip.backend.repository.WorkshopRepository;
import eu.filip.backend.util.InspectionRequestDto;
import org.springframework.stereotype.Service;

@Service
public class InspectionService {
    private final UserRepository userRepository;
    private final ClientRepository clientRepository;
    private final WorkshopRepository workshopRepository;
    private final InspectionRepository inspectionRepository;

    public InspectionService(UserRepository userRepository, ClientRepository clientRepository, WorkshopRepository workshopRepository, InspectionRepository inspectionRepository) {
        this.userRepository = userRepository;
        this.clientRepository = clientRepository;
        this.workshopRepository = workshopRepository;
        this.inspectionRepository = inspectionRepository;
    }

    public Inspection createInspection(InspectionRequestDto inspection, String username){
        User user = userRepository.findUserByUsername(username).get();
        Client client = clientRepository.findClientByUser_id(user.getId());
        Workshop workshop = workshopRepository.findWorkshopByUser_id(client.getWorkshop_id().getId());

        Inspection newInspection = new Inspection(
                client,
                workshop,
                inspection.getMake(),
                inspection.getModel(),
                inspection.getYear(),
                inspection.getInspectionType()
        );

        inspectionRepository.save(newInspection);
        return newInspection;
    }
}
