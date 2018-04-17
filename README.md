## Componentes presentacionales (Cómo se ve?)
* Puede contener smart components u otros componentes de UI
* Permiten composición con `[props.children]``
* No depeden del resto de la aplicación
* No especifica cómo los datos son cargados o mutados
* Recibe datos y callbacks solo con propiedades
* Rara vez tienen su propio estado
* Están escritos como componentes funcionales a menos que necesiten mejoras de performance. Sólo pueden ser Componentes funcionales o Pure Components

## Componentes Containers (Què hace?)
* Concetrado en el funcionamiento de la aplicación
* Contienen componentes de UI u otros containers
* No tienen estilos
* Proveen de datos a componentes de UI u otros contenedores
* Proveen de callbacks a la UI
* Normalmente tienen estado
* Llaman acciones
* Generados por higher order components
