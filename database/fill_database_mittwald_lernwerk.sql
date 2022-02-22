
/*==============================================================*/
/* Fill jobtitle with sample values                             */
/*==============================================================*/

insert into job_title (JOB_TITLE, SALARY) values ('Buechereichef', 3500);
insert into job_title (JOB_TITLE, SALARY) values ('Bibliothekar', 2500);
insert into job_title (JOB_TITLE, SALARY) values ('Ausbilder', 3250);
insert into job_title (JOB_TITLE, SALARY) values ('Azubi', 700);
insert into job_title (JOB_TITLE, SALARY) values ('Hausmeister', 2000);
insert into job_title (JOB_TITLE, SALARY) values ('IT-Admin', 3000);

/*==============================================================*/
/* Fill employees with sample values                            */
/*==============================================================*/

insert into employee (JOB_TITLE, NAME, BIRTHDAY, RESIDENCE, TOWN, POSTAL_CODE) values ('Buechereichef', 'Uta Feierabend', '1986-01-12', 'Holstenwall 63', 'Selbitz', 95146);
insert into employee (JOB_TITLE, ID_CHEF, NAME, PASSWORD, BIRTHDAY, RESIDENCE, TOWN, POSTAL_CODE) values ('Bibliothekar', 1, 'Rene Kuster', 'password', '1985-03-18', 'Halleshes Ufer 63', 'Illingen', 75428);
insert into employee (JOB_TITLE, ID_CHEF, NAME, PASSWORD, BIRTHDAY, RESIDENCE, TOWN, POSTAL_CODE) values ('Bibliothekar', 1, 'Nadine Schmidt', 'password', '1980-04-07', 'Fugger Strasse 72', 'Potsdam', 14413);
insert into employee (JOB_TITLE, ID_CHEF, NAME, PASSWORD, BIRTHDAY, RESIDENCE, TOWN, POSTAL_CODE) values ('Bibliothekar', 1, 'Katja Boehm', 'password', '1969-08-11',  'An der Alster 12', 'Kalbe', 39621);
insert into employee (JOB_TITLE, ID_CHEF, NAME, BIRTHDAY, RESIDENCE, TOWN, POSTAL_CODE) values ('Ausbilder', 1, 'Tom Bader', '1981-02-12', 'Hermannstrasse 87', 'Neckargemünd', 75428);
insert into employee (JOB_TITLE, ID_CHEF, NAME, BIRTHDAY, RESIDENCE, TOWN, POSTAL_CODE) values ('Azubi', 5, 'Jürgen Brauer', '1999-04-23' , 'Bissingzeile 81', 'Selsingen', 27446);
insert into employee (JOB_TITLE, ID_CHEF, NAME, BIRTHDAY, RESIDENCE, TOWN, POSTAL_CODE) values ('Azubi', 5, 'Lisa Goldschmidt', '1999-12-08' , 'Luckenbwalder Strasse 91', 'Despetal', 31035);
insert into employee (JOB_TITLE, ID_CHEF, NAME, BIRTHDAY, RESIDENCE, TOWN, POSTAL_CODE) values ('Azubi', 5, 'Daniel Bumgarner', '2004-05-23', 'Schoenebergerstrasse 58', 'Grünhain', 08358);
insert into employee (JOB_TITLE, ID_CHEF, NAME, BIRTHDAY, RESIDENCE, TOWN, POSTAL_CODE) values ('Hausmeister', 1, 'Stefanie Maier', '1978-02-06' , 'Hermannstrasse 52', 'Gunterblum', 67583);
insert into employee (JOB_TITLE, ID_CHEF, NAME, BIRTHDAY, RESIDENCE, TOWN, POSTAL_CODE) values ('IT-Admin', 1, 'Jan-Henrik Capsius', '1993-11-04' , 'Am Hinkenkamp 8', 'Steyerberg', 31595);

/*==============================================================*/
/* Fill booshelfs with sample values                            */
/*==============================================================*/

insert into BOOKSHELF (DESCRIPTION) values('Lehrbuecher');
insert into BOOKSHELF (DESCRIPTION) values('Lehrbuecher');
insert into BOOKSHELF (DESCRIPTION) values('Lehrbuecher'); 

/*==============================================================*/
/* Fill books with sample values                                */
/*==============================================================*/


insert into BOOK (ID_BOOKSHELF, ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (1,2, 'Java ist auch eine Insel', 'Christian Ullenboom', 'Rheinwerk Computing', 'Lehrbuch', false);
insert into BOOK (ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (3, 'Java ist auch eine Insel', 'Christian Ullenboom', 'Rheinwerk Computing', 'Lehrbuch', false);
insert into BOOK (ID_BOOKSHELF, ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (1,4, 'Java ist auch eine Insel', 'Christian Ullenboom', 'Rheinwerk Computing', 'Lehrbuch', false);
insert into BOOK (ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (2, 'Java ist auch eine Insel', 'Christian Ullenboom', 'Rheinwerk Computing', 'Lehrbuch', false);
insert into BOOK (ID_BOOKSHELF, ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (3,3, 'JavaScript: Das umfassende Handbuch. JavaScript lernen und verstehen.', 'Philip Ackermann', 'Rheinwerk Computing', 'Lehrbuch', false);
insert into BOOK (ID_BOOKSHELF, ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (2,4, 'JavaScript: Das umfassende Handbuch. JavaScript lernen und verstehen.', 'Philip Ackermann', 'Rheinwerk Computing', 'Lehrbuch', false);
insert into BOOK (ID_BOOKSHELF, ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (2,2, 'JavaScript: Das umfassende Handbuch. JavaScript lernen und verstehen.', 'Philip Ackermann', 'Rheinwerk Computing', 'Lehrbuch', false);
insert into BOOK (ID_BOOKSHELF, ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (1,3, 'JavaScript: Das umfassende Handbuch. JavaScript lernen und verstehen.', 'Philip Ackermann', 'Rheinwerk Computing', 'Lehrbuch', false);
insert into BOOK (ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (4, 'Der C++ Programmierer.', 'Ulrich Breymann', 'Carl Hanser Verlag GmbH & Co. KG', 'Lehrbuch', false);
insert into BOOK (ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (2, 'Der C++ Programmierer.', 'Ulrich Breymann', 'Carl Hanser Verlag GmbH & Co. KG', 'Lehrbuch', false);
insert into BOOK (ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (3, 'Der C++ Programmierer.', 'Ulrich Breymann', 'Carl Hanser Verlag GmbH & Co. KG', 'Lehrbuch', false);
insert into BOOK (ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (4, 'Der C++ Programmierer.', 'Ulrich Breymann', 'Carl Hanser Verlag GmbH & Co. KG', 'Lehrbuch', false);
insert into BOOK (ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (2, 'Python: 3 Programmieren für Einsteiger: Der leichte Weg zum Python-Experten', 'Michael Bonacina', 'BMU Verlag', 'Lehrbuch', false);
insert into BOOK (ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (3, 'Python: 3 Programmieren für Einsteiger: Der leichte Weg zum Python-Experten', 'Michael Bonacina', 'BMU Verlag', 'Lehrbuch', false);
insert into BOOK (ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (4, 'Python: 3 Programmieren für Einsteiger: Der leichte Weg zum Python-Experten', 'Michael Bonacina', 'BMU Verlag', 'Lehrbuch', false);
insert into BOOK (ID_EMPLOYEE, TITLE, AUTHOR, PUBLISHER, GENRE, BORROWED) values (2, 'Python: 3 Programmieren für Einsteiger: Der leichte Weg zum Python-Experten', 'Michael Bonacina', 'BMU Verlag', 'Lehrbuch', false);