# MoviesCatalog

Práctica final angular: Catálogo de Películas
Desarrolla una aplicación de catálogo de películas en Angular que permita a
los usuarios navegar entre las secciones de Inicio, Lista de Películas y

Detalles de Película. La aplicación debe incluir lo siguiente:

1. Componentes:
• HomeComponent: muestra una introducción a la aplicación.
• MovieListComponent: muestra una lista de películas con su título y
fecha de lanzamiento.
• MovieDetailComponent: muestra los detalles de una película específica
cuando se selecciona en la lista.

2. Enrutado:
• Configura un sistema de enrutado que permita a los usuarios navegar
entre el inicio, la lista de películas y los detalles de una película
específica.
• La ruta para MovieDetailComponent debe incluir un parámetro
dinámico para identificar la película (por ejemplo, /movies/:id).


3. Directivas:
• Usa la directiva ngFor para iterar sobre las películas en
MovieListComponent.
• Aplica la directiva ngClass para resaltar las películas más recientes en
la lista (ej. películas de los últimos dos años).
• Crea una directiva personalizada highlight que resalte el título de
una película en el detalle cuando se pasa el mouse por encima.


4. Pipes:
• Usa el pipe date de Angular para formatear la fecha de lanzamiento en
la lista de películas.
• Crea un pipe personalizado llamado genrePipe que convierte el género
de cada película a un formato amigable (por ejemplo, convierte sci-fi
a Ciencia Ficción).


5. Datos de Películas:
• Usa un servicio MovieService que almacene una lista de películas y
ofrezca métodos para:
• Obtener la lista completa de películas.
• Obtener detalles de una película específica por su id.