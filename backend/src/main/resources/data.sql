insert into users (username, password, email, role) values ('workshop1', '123', 'werkstatt@gmail.com', 'workshop');
insert into users (username, password, email, role) values ('warsztat', '1234', 'warsztat.krakow@gmail.com', 'workshop');

insert into users (username, password, email, role) values ('filip', '1234', 'filipw@gmail.com', 'client');
insert into users (username, password, email, role) values ('kamil', '1234', 'kamil123@gmail.com', 'client');
insert into users (username, password, email, role) values ('karol', '1234', 'karol.krakow@gmail.com', 'client');

insert into workshops(name, user_id) values ('Werkstatt Bielefeld GmbH', 1);
insert into workshops(name, user_id) values ('Warsztat Krakow sp. z.o.o.', 2);

insert into clients(user_id, workshop_id) values (3, 1);
insert into clients(user_id, workshop_id) values (4, 1);
insert into clients(user_id, workshop_id) values (5, 2);