create database bdgricel;
use bdgricel;

create table t_rol(
	id_rol integer auto_increment,
    name_rol varchar(100),
    description varchar(200),
    constraint pk_rol primary key(id_rol)
);

create table t_user(
	id_user integer auto_increment,
    name_user varchar(100),
    last_name varchar(100),
    direction varchar(200),
    email varchar(200),
    password varchar(20),
    picture varchar(200),
    phone_main varchar(50),
    phone_secondary varchar(50),
    registrarion_date date,
    date_birth date,
    id_rol integer,
    constraint pk_user primary key(id_user),
    constraint fk_rol foreign key (id_rol) references t_rol(id_rol) on delete cascade
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

