CREATE TABLE kb.organization (
    id serial primary key,
    name varchar(45) not null,
    created_at timestamp default CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP,
    deleted_at timestamp default null
);

CREATE TABLE kb.document (
    id serial primary key,
    name varchar(255) not null,
    path varchar(255) not null,
    file_type varchar(45) not null,
    num_pages integer not null,
    file_size integer not null,
    organization_id integer not null,
    created_at timestamp default CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP,
    deleted_at timestamp default null,
    foreign key (organization_id) references kb.organization(id)
);

CREATE TABLE kb.document_version (
    id serial primary key,
    name varchar(255) not null,
    raw_text text not null,
    path varchar(255) not null,
    document_id integer not null,
    created_at timestamp default CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP,
    deleted_at timestamp default null,
    foreign key (document_id) references kb.document(id)
);


CREATE TABLE kb.chunk (
    id serial primary key,
    data text not null,
    seq smallint not null,
    document_version_id integer not null,
    created_at timestamp default CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP,
    deleted_at timestamp default null,
    foreign key (document_version_id) references kb.document_version(id)
);

CREATE TABLE kb.embedding (
    id serial primary key,
    data text not null,
    indexed boolean default false,
    chunk_id integer not null,
    created_at timestamp default CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP,
    deleted_at timestamp default null,
    foreign key (chunk_id) references kb.chunk(id)   
);
