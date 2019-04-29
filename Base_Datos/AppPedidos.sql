--
-- PostgreSQL database dump
--

-- Dumped from database version 10.7
-- Dumped by pg_dump version 10.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Conductor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Conductor" (
    id_conductor numeric NOT NULL,
    nombre_apellido text,
    estado "char"
);


ALTER TABLE public."Conductor" OWNER TO postgres;

--
-- Name: Direcciones_Usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Direcciones_Usuario" (
    id_direcciones_usuario integer NOT NULL,
    email text,
    direccion text,
    estado_direccion "char"
);


ALTER TABLE public."Direcciones_Usuario" OWNER TO postgres;

--
-- Name: Direcciones_Usuario_id_direcciones_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Direcciones_Usuario_id_direcciones_usuario_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Direcciones_Usuario_id_direcciones_usuario_seq" OWNER TO postgres;

--
-- Name: Direcciones_Usuario_id_direcciones_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Direcciones_Usuario_id_direcciones_usuario_seq" OWNED BY public."Direcciones_Usuario".id_direcciones_usuario;


--
-- Name: Franja_Entrega; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Franja_Entrega" (
    id_franja_entrega integer NOT NULL,
    franja_horaria text
);


ALTER TABLE public."Franja_Entrega" OWNER TO postgres;

--
-- Name: Franja_Entrega_id_franja_entrega_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Franja_Entrega_id_franja_entrega_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Franja_Entrega_id_franja_entrega_seq" OWNER TO postgres;

--
-- Name: Franja_Entrega_id_franja_entrega_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Franja_Entrega_id_franja_entrega_seq" OWNED BY public."Franja_Entrega".id_franja_entrega;


--
-- Name: Pedido; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pedido" (
    id_pedido integer NOT NULL,
    email text,
    id_franja_entrega integer,
    fecha_entrega date
);


ALTER TABLE public."Pedido" OWNER TO postgres;

--
-- Name: Pedido_id_pedido_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Pedido_id_pedido_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Pedido_id_pedido_seq" OWNER TO postgres;

--
-- Name: Pedido_id_pedido_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pedido_id_pedido_seq" OWNED BY public."Pedido".id_pedido;


--
-- Name: Tareas_Conductor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Tareas_Conductor" (
    id_tareas_conductor integer NOT NULL,
    id_conductor numeric,
    id_pedido integer
);


ALTER TABLE public."Tareas_Conductor" OWNER TO postgres;

--
-- Name: Tareas_Conductor_id_tareas_conductor_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Tareas_Conductor_id_tareas_conductor_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Tareas_Conductor_id_tareas_conductor_seq" OWNER TO postgres;

--
-- Name: Tareas_Conductor_id_tareas_conductor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Tareas_Conductor_id_tareas_conductor_seq" OWNED BY public."Tareas_Conductor".id_tareas_conductor;


--
-- Name: Usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Usuario" (
    email text NOT NULL,
    nombre_apellido text,
    telefono numeric
);


ALTER TABLE public."Usuario" OWNER TO postgres;

--
-- Name: Direcciones_Usuario id_direcciones_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Direcciones_Usuario" ALTER COLUMN id_direcciones_usuario SET DEFAULT nextval('public."Direcciones_Usuario_id_direcciones_usuario_seq"'::regclass);


--
-- Name: Franja_Entrega id_franja_entrega; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Franja_Entrega" ALTER COLUMN id_franja_entrega SET DEFAULT nextval('public."Franja_Entrega_id_franja_entrega_seq"'::regclass);


--
-- Name: Pedido id_pedido; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedido" ALTER COLUMN id_pedido SET DEFAULT nextval('public."Pedido_id_pedido_seq"'::regclass);


--
-- Name: Tareas_Conductor id_tareas_conductor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tareas_Conductor" ALTER COLUMN id_tareas_conductor SET DEFAULT nextval('public."Tareas_Conductor_id_tareas_conductor_seq"'::regclass);


--
-- Data for Name: Conductor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Conductor" (id_conductor, nombre_apellido, estado) FROM stdin;
123	Pepito Perez	A
124	Timmy Turner	A
125	Pedrito Perez	I
\.


--
-- Data for Name: Direcciones_Usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Direcciones_Usuario" (id_direcciones_usuario, email, direccion, estado_direccion) FROM stdin;
1	erika.gutierrez@javerianacali.edu.co	cra71 #10a-97	A
2	erika.gutierrez@javerianacali.edu.co	calle73#1j-64	I
\.


--
-- Data for Name: Franja_Entrega; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Franja_Entrega" (id_franja_entrega, franja_horaria) FROM stdin;
1	8:00 am - 9:00 am
2	9:00 am - 10:00 am
3	10:00 am - 11:00 am
4	2:00 pm - 3:00 pm
5	3:00 pm - 4:00 pm
6	4:00 pm - 5:00 pm
\.


--
-- Data for Name: Pedido; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pedido" (id_pedido, email, id_franja_entrega, fecha_entrega) FROM stdin;
6	erika.gutierrez@javerianacali.edu.co	3	2019-04-28
7	erika.gutierrez@javerianacali.edu.co	2	2019-04-28
8	erika.gutierrez@javerianacali.edu.co	5	2019-04-29
\.


--
-- Data for Name: Tareas_Conductor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Tareas_Conductor" (id_tareas_conductor, id_conductor, id_pedido) FROM stdin;
1	123	6
2	123	7
4	124	8
\.


--
-- Data for Name: Usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Usuario" (email, nombre_apellido, telefono) FROM stdin;
erika.gutierrez@javerianacali.edu.co	Jissel Beltran	3187381608
\.


--
-- Name: Direcciones_Usuario_id_direcciones_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Direcciones_Usuario_id_direcciones_usuario_seq"', 2, true);


--
-- Name: Franja_Entrega_id_franja_entrega_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Franja_Entrega_id_franja_entrega_seq"', 6, true);


--
-- Name: Pedido_id_pedido_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pedido_id_pedido_seq"', 8, true);


--
-- Name: Tareas_Conductor_id_tareas_conductor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Tareas_Conductor_id_tareas_conductor_seq"', 4, true);


--
-- Name: Conductor Conductor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Conductor"
    ADD CONSTRAINT "Conductor_pkey" PRIMARY KEY (id_conductor);


--
-- Name: Direcciones_Usuario Direcciones_Usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Direcciones_Usuario"
    ADD CONSTRAINT "Direcciones_Usuario_pkey" PRIMARY KEY (id_direcciones_usuario);


--
-- Name: Franja_Entrega Franja_Entrega_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Franja_Entrega"
    ADD CONSTRAINT "Franja_Entrega_pkey" PRIMARY KEY (id_franja_entrega);


--
-- Name: Pedido Pedido_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedido"
    ADD CONSTRAINT "Pedido_pkey" PRIMARY KEY (id_pedido);


--
-- Name: Tareas_Conductor Tareas_Conductor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tareas_Conductor"
    ADD CONSTRAINT "Tareas_Conductor_pkey" PRIMARY KEY (id_tareas_conductor);


--
-- Name: Usuario Usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Usuario"
    ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY (email);


--
-- Name: fki_direccion_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_direccion_fk ON public."Direcciones_Usuario" USING btree (email);


--
-- Name: fki_pedido_fk1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_pedido_fk1 ON public."Pedido" USING btree (email);


--
-- Name: fki_pedido_fk2; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_pedido_fk2 ON public."Pedido" USING btree (id_franja_entrega);


--
-- Name: fki_tareas_fk1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_tareas_fk1 ON public."Tareas_Conductor" USING btree (id_conductor);


--
-- Name: fki_tareas_fk2; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_tareas_fk2 ON public."Tareas_Conductor" USING btree (id_pedido);


--
-- Name: Direcciones_Usuario direccion_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Direcciones_Usuario"
    ADD CONSTRAINT direccion_fk FOREIGN KEY (email) REFERENCES public."Usuario"(email);


--
-- Name: Pedido pedido_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedido"
    ADD CONSTRAINT pedido_fk1 FOREIGN KEY (email) REFERENCES public."Usuario"(email);


--
-- Name: Pedido pedido_fk2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedido"
    ADD CONSTRAINT pedido_fk2 FOREIGN KEY (id_franja_entrega) REFERENCES public."Franja_Entrega"(id_franja_entrega);


--
-- Name: Tareas_Conductor tareas_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tareas_Conductor"
    ADD CONSTRAINT tareas_fk1 FOREIGN KEY (id_conductor) REFERENCES public."Conductor"(id_conductor);


--
-- Name: Tareas_Conductor tareas_fk2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tareas_Conductor"
    ADD CONSTRAINT tareas_fk2 FOREIGN KEY (id_pedido) REFERENCES public."Pedido"(id_pedido);


--
-- PostgreSQL database dump complete
--

