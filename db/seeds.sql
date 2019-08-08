-- drop table if EXISTS user_info;
-- drop table if exists credentials;
-- drop table if exists account;
-- drop table if exists transfer;

create table user_info(
user_id serial primary key,
username varchar(50),
email varchar(100)
);

create table credentials(
user_id int,
hash text);

create table account(
account_id serial primary key,
user_id int references user_info(user_id),
account_balance INT
);

create table transfer(
transfer_id serial primary key,
account_id int references account(account_id),
transfer_type varchar(20),
transfer_amount int
);

insert into user_info(username, email) values ('Jonathan', 'jon@than.com');