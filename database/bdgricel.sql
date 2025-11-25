CREATE DATABASE fancy_work;
USE fancy_work;

CREATE TABLE IF NOT EXISTS t_rol (
	id_rol INTEGER AUTO_INCREMENT
	,name_rol VARCHAR(100)
	,description_rol VARCHAR(200)
	,CONSTRAINT pk_rol PRIMARY KEY (id_rol)
	);

CREATE TABLE IF NOT EXISTS t_user (
	id_user INTEGER AUTO_INCREMENT
	,name_user VARCHAR(100)
	,last_name VARCHAR(100)
	,direction VARCHAR(200)
	,email VARCHAR(200)
	,password_user VARCHAR(1000)
	,picture VARCHAR(200)
	,phone_main VARCHAR(50)
	,phone_secondary VARCHAR(50)
	,registrarion_date DATE
	,date_birth DATE
	,id_rol INTEGER
	,CONSTRAINT pk_user PRIMARY KEY (id_user)
	,CONSTRAINT fk_rol FOREIGN KEY (id_rol) REFERENCES t_rol(id_rol) ON DELETE CASCADE
	);

create table t_client(
	id_client integer auto_increment,
    name_client varchar(100),
    last_name varchar(100),
    direction varchar(200),
    email varchar (100),
    registration_date date,
    picture varchar(200),
    phone_main varchar(50),
    phone_secondary varchar(50),
    constraint pk_client primary key(id_client)
);

create table t_design(
	id_design integer auto_increment,
    name_design varchar(150),
    description varchar(200),
    stitch integer,
    price float,
    registration_date date,
    picture varchar(200),
    constraint pk_design primary key(id_design)
);

create table t_size(
	id_size integer auto_increment,
    size varchar(10),
    constraint pk_size primary key(id_size)
);

create table t_garment(
	id_garment integer auto_increment,
    name_garment varchar(150),
    id_size integer,
    constraint pk_garment primary key (id_garment),
    constraint fk_size foreign key (id_size) references t_size(id_size) on delete cascade
);

create table t_order(
	id_order integer auto_increment,
    id_client integer,
    entry_date date,
    embroidery_date date,
    departure_date date,
    state varchar(10),
    id_user integer,
    total float,
    constraint pk_order primary key(id_order),
    constraint fk_client foreign key (id_client) references t_client(id_client),
    constraint fk_user foreign key (id_user) references t_user(id_user)
);

create table t_order_detail(
	id_order_detail integer auto_increment,
	id_garment integer,
    id_design integer,
    units integer,
    colour varchar(150),
    id_size integer,
    id_order integer,
    subtotal_suggested float,
    id_order_fk integer,
    discount float,
    subtotal_actual float,
    constraint pk_order_detail_det primary key(id_order_detail),
    constraint fk_garment_det foreign key (id_garment) references t_garment(id_garment) on delete cascade,
    constraint fk_design_det foreign key (id_design) references t_design(id_design) on delete cascade,
    constraint fk_size_det foreign key (id_size) references t_size(id_size) on delete cascade,
    constraint fk_order_det foreign key(id_order_fk) references t_order(id_order) on delete cascade
);

