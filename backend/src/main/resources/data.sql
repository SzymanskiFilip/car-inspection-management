insert into users (username, password, role) values ('workshop133', '1234', 'workshop');
insert into workshops (user_id, name) values (1, 'Werkstatt 21');

insert into users (username, password, role) values ('client133', '123', 'client');
insert into clients (first_name, last_name, user_id, workshop_id) values ('Filip', 'Szymanski', 2, 1);

insert into inspections (client_id, workshop_id, make, model, year_of_production, inspection_type) values (1, 1, 'BMW', 'M4', 2014, 1);
insert into todo_points (inspection_id, body, status) values (1, 'Check Lights', false);