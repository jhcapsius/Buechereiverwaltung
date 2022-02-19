drop table if exists BOOK;

drop table if exists BOOKSHELF;

drop table if exists USER;

drop table if exists EMPLOYEE;

drop table if exists JOB_TITLE;

drop table if exists VACATION;

/*==============================================================*/
/* Table: BOOK                                                  */
/*==============================================================*/
create table BOOK
(
   ID_BOOK int not null AUTO_INCREMENT,
   EMAIL_ADDRESS varchar(200),
   ID_BOOKSHELF int,
   ID_EMPLOYEE int,
   TITLE varchar(200) not null,
   AUTHOR varchar(200) not null,
   PUBLISHER varchar(200) not null,
   GENRE varchar(200) not null,
   BORROWED bool not null,
   primary key (ID_BOOK)
);

/*==============================================================*/
/* Table: BOOKSHELF                                             */
/*==============================================================*/
create table BOOKSHELF
(
   ID_BOOKSHELF int not null AUTO_INCREMENT,
   DESCRIPTION varchar(255),
   primary key (ID_BOOKSHELF)
);

/*==============================================================*/
/* Table: CUSTOMER                                              */
/*==============================================================*/
create table USER
(
   EMAIL_ADDRESS varchar(200) not null,
   NAME varchar(300) not null,
   PASSWORD varchar(200) not null,
   primary key (EMAIL_ADDRESS)
);

/*==============================================================*/
/* Table: EMPLOYEE                                              */
/*==============================================================*/
create table EMPLOYEE
(
   ID_EMPLOYEE int not null AUTO_INCREMENT,
   JOB_TITLE varchar(200) not null,
   ID_CHEF int,
   NAME varchar(300) not null,
   PASSWORD varchar(300),
   BIRTHDAY date not null,
   RESIDENCE varchar(200) not null,
   TOWN varchar(200) not null,
   POSTAL_CODE int not null,
   primary key (ID_EMPLOYEE)
);
/*==============================================================*/
/* Table: JOB_TITLE                                             */
/*==============================================================*/
create table JOB_TITLE
(
   JOB_TITLE varchar(200) not null,
   SALARY int not null,
   primary key (JOB_TITLE)
);



alter table BOOK add constraint FK_BOOK_USER foreign key (EMAIL_ADDRESS)
      references USER (EMAIL_ADDRESS) on delete restrict on update restrict;

alter table BOOK add constraint FK_BOOK_SHELF foreign key (ID_BOOKSHELF)
      references BOOKSHELF (ID_BOOKSHELF) on delete restrict on update restrict;

alter table BOOK add constraint FK_BOOK_EMPLOYEE foreign key (ID_EMPLOYEE)
      references EMPLOYEE (ID_EMPLOYEE) on delete restrict on update restrict;

alter table EMPLOYEE add constraint FK_EMPLOYEE_JOBTITLE foreign key (JOB_TITLE)
      references JOB_TITLE (JOB_TITLE) on delete restrict on update restrict;

alter table EMPLOYEE add constraint FK_EMPLYOYEE_CHEF foreign key (ID_CHEF)
      references EMPLOYEE (ID_EMPLOYEE) on delete restrict on update restrict;
