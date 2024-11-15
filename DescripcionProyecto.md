# Proyecto de Aplicación Web: ComicVerse

![](./img/panoramica.jpeg)


1. [Idea de la aplicación](#idea-de-la-aplicación)
2. [Audiencia objetivo](#audiencia-objetivo)
3. [Análisis de mercado](#análisis-de-mercado)
4. [Funcionalidades clave](#funcionalidades-clave)
   - 4.1 [Exploración de cómics](#exploración-detallada-de-cómics)
   - 4.2 [Información de personajes](#información-completa-de-personajes)
   - 4.3 [Perfiles de artistas/creadores](#perfiles-de-artistascreadores)
   - 4.4 [Exploración de eventos](#exploración-de-eventos)
   - 4.5 [Perfil de usuario personalizable](#perfil-de-usuario-personalizable)
5. [Tecnologías a utilizar](#tecnologías-a-utilizar)
   - 5.1 [Frontend](#frontend)
   - 5.2 [API](#api)
   - 5.3 [Entorno de desarrollo](#entorno-de-desarrollo)
   - 5.4 [Control de versiones](#control-de-versiones)
   - 5.5 [Despliegue](#despliegue)
   - 5.6 [Base de datos](#base-de-datos)
   - 5.7 [Librerías](#librerías)
6. [Enlaces de interés](#enlaces-de-interés)


## Idea de la aplicación

ComicVerse es una aplicación web diseñada para los aficionados de los cómics de Marvel. Su propósito principal es proporcionar una plataforma interactiva y fácil de usar donde los usuarios puedan explorar, descubrir y seguir sus cómics, personajes, creadores y eventos favoritos del universo Marvel. La aplicación busca resolver la necesidad de tener un acceso centralizado, organizado y personalizado a la vasta información del mundo de los cómics de Marvel.

## Audiencia objetivo

La aplicación está dirigida principalmente a:

- Fans de los cómics de Marvel de todas las edades
- Coleccionistas de cómics
- Nuevos lectores que quieren explorar el universo Marvel


Estos usuarios se beneficiarán de una plataforma que les permita acceder fácilmente a información detallada, descubrir nuevo contenido y personalizar su experiencia según sus preferencias.

## Análisis de mercado

Existen varias aplicaciones y sitios web que ofrecen información sobre cómics de Marvel, como:

- Marvel.com (sitio oficial)
- Comic Vine
- ComicBookRealm

Sin embargo, ComicVerse se diferencia por:

1. Enfoque exclusivo en el universo Marvel
2. Interfaz de usuario más intuitiva y moderna
3. Funciones de personalización avanzadas
4. Información relacionada (cómics, personajes, creadores y eventos)

## Funcionalidades clave

1. Exploración detallada de cómics:
   - Imagen, título, descripción
   - Personajes involucrados
   - Creadores
   - Cómics relacionados

2. Información completa de personajes:
   - Imagen, nombre, biografía
   - Lista de cómics en los que aparece
   - Eventos relacionados

3. Perfiles de artistas/creadores:
   - Imagen, nombre completo
   - Lista de cómics
   - Eventos en los que participan

4. Exploración de eventos:
   - Imagen, título, fechas de inicio y fin
   - Historia del evento
   - Próximo evento

5. Perfil de usuario personalizable:
   - Imagen de perfil
   - Nombre
   - Cómics favoritos
   - Creadores/atistas favoritos


## Tecnologías a utilizar

- **Frontend**: React con Vite

  React ofrece un rendimiento óptimo y una gran flexibilidad para crear interfaces de usuario interactivas. Vite proporciona una configuración rápida y un entorno de desarrollo eficiente.

- **API**: Marvel API

    Fuente oficial y confiable de datos sobre el universo Marvel.

- **Entorno de desarrollo**: Visual Studio Code
  
  Editor de código versátil con amplio soporte para React y JavaScript.

- **Control de versiones**: Git y GitHub
  
  Facilita el seguimiento de cambios y la colaboración en el proyecto.

- **Despliegue**: Netlify

    Para la implementación y alojamiento de la web.

- **Base de datos**: IndexedDB

    Almacenamiento de datos localmente en el navegador (almacén de configuración de usuario, de comics favoritos y de creador/artista favorito) asegurando la persistencia de la información.

- **Librerías**:
    
    - React Router:

        Realiza el enrutamiento de la aplicación, permitiendo crear rutas dinámicas y gestionando la navegación.

### Enlaces de interés

[Documentación API Marvel](https://developer.marvel.com/docs)

[Enlace a prototipo Figma](https://www.figma.com/design/OAOENSn9ywu4vSe2v8AA9P/ComicVerse?node-id=281-2&node-type=canvas&t=4doWAGlUvXtGJVqN-0)