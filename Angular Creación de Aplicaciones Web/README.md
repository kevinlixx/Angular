# Componentes y servicios de Angular

## Componentes
un componente es una clase de TypeScript que tiene un decorador `@Component` que define su metadatos, como su selector, plantilla y estilos. Los componentes son la unidad básica de construcción de una aplicación Angular y se utilizan para crear la interfaz de usuario.
### comando para crear un componente
```bash
ng g c todo 
```
este comando crea un nuevo componente llamado `todo` en la carpeta `src/app/todo` con los archivos necesarios para su funcionamiento.

### partes del componente
- `@component`: es el decorador que define el componente y sus metadatos.
- `selector`: es el nombre del elemento HTML que se utilizará para insertar el componente en la plantilla.
- `templateUrl`: es la ruta del archivo HTML que contiene la plantilla del componente
- `imports`: es un array que contiene los módulos que se importan para usar en el componente, como `RouterOutlet` o `CommonModule`.
- `styleUrls`: es la ruta del archivo CSS que contiene los estilos del componente.
- `export class`: es la clase que define el comportamiento del componente y sus propiedades.

``` ts
import { Component } from '@angular/core';
@component({
  selector: 'app-todo',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  // propiedades y métodos del componente
}
```

> [!NOTE]
> el router outlet es un componente que se utiliza para mostrar el contenido de las rutas hijas en la plantilla del componente padre. Es necesario importarlo en el componente para poder usarlo en la plantilla.
> common module es un módulo que contiene las directivas y pipes comunes de Angular, como `ngIf`, >`ngFor`, etc. Es necesario importarlo en el componente para poder usar estas directivas en la plantilla.

## Propery Binding
El property binding es una técnica que se utiliza para enlazar una propiedad de un elemento HTML con una propiedad de un componente. Se utiliza la sintaxis de corchetes `[]` para indicar que se está realizando un enlace de propiedad. Por ejemplo, si queremos enlazar la propiedad `disabled` de un botón con una propiedad `isDisabled` de nuestro componente, podemos hacerlo de la siguiente manera:
``` html
<button [disabled]="isDisabled">Click me</button>
```
En este ejemplo, el botón estará deshabilitado si la propiedad `isDisabled` del componente es `true` y habilitado si es `false`. El property binding es una forma eficiente de actualizar la interfaz de usuario en función de los cambios en las propiedades del componente.
``` html 
<input type="text" value="{{ welcome }}" />

<input type="text" [value]="welcome" />
```
En el primer ejemplo, se utiliza la interpolación `{{ welcome }}` para mostrar el valor de la propiedad `welcome` en el atributo `value` del elemento `input`. En el segundo ejemplo, se utiliza el property binding `[value]="welcome"` para enlazar la propiedad `welcome` directamente al atributo `value` del elemento `input`. Ambos enfoques logran el mismo resultado, pero el property binding es más eficiente y recomendado para enlazar propiedades en Angular.

## Eventos en Angular
Los eventos en Angular se utilizan para manejar las interacciones del usuario con la interfaz de usuario. Se pueden utilizar para responder a eventos como clics, cambios de entrada, etc. Para manejar un evento, se utiliza la sintaxis de paréntesis `()` para indicar que se está manejando un evento.
Los mas comunes son:
- `click`: se dispara cuando el usuario hace clic en un elemento.
- `dblclick`: se dispara cuando el usuario hace doble clic en un elemento.
- `keydown`: se dispara cuando el usuario presiona una tecla mientras un elemento tiene el foco.
- `input`: se dispara cuando el usuario ingresa texto en un campo de entrada.
- `change`: se dispara cuando el valor de un elemento cambia.
- `submit`: se dispara cuando se envía un formulario.
- `mouseover`: se dispara cuando el usuario pasa el mouse sobre un elemento.
- `mouseout`: se dispara cuando el usuario mueve el mouse fuera de un elemento. 
Por ejemplo, si queremos manejar un evento de clic en un botón, podemos hacerlo de la siguiente manera:
``` html
<button (click)="handleClick()">Click me</button>
```
En este ejemplo, cuando el usuario hace clic en el botón, se llama al método `handleClick()` del componente para manejar el evento. Los eventos en Angular son una parte fundamental para crear aplicaciones interactivas y dinámicas.


## ¿Qué son los eventos de teclado en programación?

Los eventos de teclado son esenciales en la interacción de usuario con aplicaciones web, ya que nos permiten capturar acciones específicas cuando el usuario presiona teclas en su teclado. Estos eventos son particularmente útiles para mejorar la experiencia de usuario al proporcionar respuestas rápidas a sus acciones, como el autocompletado o la ejecución de comandos rápidos.

### ¿Cuáles son los eventos de teclado más utilizados?

Existen varios tipos de eventos de teclado que puedes manejar en la programación, entre los más comunes se encuentran:

- `keydown`: Este evento se dispara en el momento en que el usuario presiona una tecla. Es muy útil para detectar la acción en tiempo real y es uno de los eventos más utilizados.
- `keyup`: Se activa cuando el usuario suelta una tecla que previamente había presionado. Es útil para detectar la finalización de una acción.
- `keypress`: Aunque es menos utilizado actualmente, se dispara cuando se presiona una tecla que produce un valor de entrada en el campo, como las teclas de letras y números.
### ¿Cómo funcionan los eventos keydown en JavaScript?

Veamos un ejemplo de uso del evento keydown en un entorno de programación, utilizando TypeScript y Angular como caso de estudio. La siguiente función maneja el evento de keydown, logrando capturar detalles como qué tecla fue presionada y sobre qué elemento se efectuó la acción:
```ts

// Método manejador para el evento Keydown
kDownHandler(event: KeyboardEvent): void {
  const input: HTMLInputElement = event.target as HTMLInputElement;
  console.log(`Tecla presionada: ${event.key}`);
  console.log(`Valor actual del input: ${input.value}`);
}
```
En este código, cada vez que se presione una tecla, se capturará el evento y se imprimirá en consola la tecla presionada y el valor actual del campo donde se está escribiendo.

### ¿Cuál es la diferencia entre los eventos keydown y change?

Una cuestión interesante es cómo los eventos keydown y change difieren entre sí y en qué situaciones es más apropiado usar uno u otro:

keydown: Permite capturar en tiempo real cada tecla que el usuario presiona. Es ideal para situaciones donde necesitas reaccionar inmediatamente a la entrada del usuario. Por ejemplo, al implementar atajos de teclado.

change: Solo se dispara cuando el usuario termina de editar un campo de texto y realiza una acción de "desenfoque" (como presionar Enter o hacer click fuera del campo). No se activa con cada tecla presionada, lo que lo hace más apropiado para validaciones finales después de que el usuario ha completado una entrada.

#### ¿Cómo configurar atajos de teclado en Angular?

Angular facilita la implementación de atajos de teclado, lo que permite a los desarrolladores asignar acciones específicas a combinaciones de teclas. Por ejemplo, podrías configurar un manejador que se active solo cuando se presione una combinación específica como Shift + T:
``` ts

// Configuración de un evento Keydown con atajo de teclado
@Component({
  selector: 'app-root',
  template: `<input (keydown.Shift.T)="clickHandler()">`
})
export class AppComponent {
  clickHandler(): void {
    console.log('¡Atajo de teclado ejecutado!');
  }
}
```
En este código, el método clickHandler se ejecutará solo cuando la combinación de teclas Shift + T sea detectada en el campo de entrada, permitiendo funcionalidades avanzadas y optimizadas para los usuarios.

Explorar y manejar adecuadamente los eventos de teclado puede mejorar significativamente la interacción en tiempo real y la usabilidad de tus aplicaciones, permitiendo responder de manera dinámica a las acciones del usuario. Al aplicar estas técnicas, no solo aumentas la interactividad de la aplicación, sino que también proporcionas una experiencia de usuario enriquecida y profesional. ¡Continúa practicando y explorando, el aprendizaje nunca termina!

## Crear señales reactivas en Frontend

Las señales reactivas en el desarrollo Frontend son un concepto fundamental para lograr interfaces de usuario dinámicas y reactivas. Al implementar señales, transformamos variables estáticas en entidades capaces de adaptarse a cambios y eventos, facilitando la creación de aplicaciones web modernas e interactivas. Profundicemos en cómo podemos convertir variables en señales y gestionar su reactividad para enriquecer la experiencia del usuario.

### ¿Cómo convertimos una variable común en una señal reactiva?

Para convertir una variable común en una señal, debemos inicializarla como tal. Tomando como ejemplo la variable name, al declararla como una señal, esta obtiene la habilidad de ser reactiva. La reactividad en Frontend implica que cualquier cambio que sufra la variable será reflejado automáticamente en el HTML, sin intervención manual. Imagina que name ya no es sólo un cadena de texto simple, sino que ahora es una señal con la capacidad de actualizarse y notificar cambios.

### ¿Cómo obtener el valor de una señal?

Obtener el valor de una señal requiere ejecutar la función que la representa. Si no ejecutamos esta función, en lugar de obtener el valor deseado, recibiremos la propia función de señal como tal. Para trabajar adecuadamente con señales y extraer su valor, es esencial recordar ejecutarlas, permitiéndonos acceder a la información que contienen y manipularla conforme a nuestras necesidades.

### ¿Qué sucede si queremos modificar el valor de una señal?

Modificar el valor de una señal no es tan directo como asignar un nuevo valor a una variable común. Para cambiar el valor de una señal, debemos usar su método set. Por ejemplo, si tenemos una señal llamada name y queremos actualizarla, haríamos uso de name.set(nuevoValor). Este método es parte crucial del manejo de la reactividad, ya que asegura que todos los elementos dependientes de la señal reaccionen y se actualicen en respuesta al cambio.

### ¿Cómo reaccionan las señales a los eventos en tiempo real?s

Las señales están diseñadas para responder a eventos y actualizar el contenido de forma proactiva. Considera un campo de texto (input) asociado con una señal; cada vez que se modifica el valor de entrada, se puede configurar un evento, como un change o keydown, para que la señal reaccione y actualice los elementos correspondientes en la interfaz. Esto se logra gracias a la interpolación de cadenas y la capacidad de las señales de notificar cambios, mostrando en tiempo real los nuevos valores en el HTML.

En conclusión, las señales reactivas son herramientas poderosas en el arsenal del desarrollo Frontend. Al emplearlas sabiamente, podemos construir aplicaciones web que destaquen por su interactividad y capacidad de adaptarse a los cambios de forma fluida y orgánica. Continúa explorando y experimentando con señales para crear experiencias de usuario más ricas y dinámicas. ¡El aprendizaje constante es la clave del éxito en el mundo del desarrollo web!

## Directivas estructurales en Angular

- `nFor`: Es una directiva estructural que se utiliza para iterar sobre una colección de datos y generar un bloque de HTML para cada elemento de la colección. Es útil para mostrar listas, tablas o cualquier conjunto de elementos dinámicos en la interfaz de usuario.
- `nIf`: Es una directiva estructural que se utiliza para mostrar u ocultar un bloque de HTML en función de una condición booleana. Si la condición es verdadera, el bloque de HTML se muestra; si es falsa, el bloque se oculta. Es útil para controlar la visibilidad de elementos en la interfaz de usuario según ciertas condiciones.
- `nSwitch`: Es una directiva estructural que se utiliza para mostrar un bloque de HTML entre varios posibles, dependiendo del valor de una expresión. Es útil para manejar múltiples casos y mostrar diferentes contenidos según el valor de una

ejemplo:
``` html
<div *ngIf="isLoggedIn; else loginTemplate">
  <p>Bienvenido, usuario!</p>
</div>
<ng-template #loginTemplate> <!-- Este bloque se muestra si isLoggedIn es falso -->
  <p>Por favor, inicia sesión.</p>
</ng-template>

<div *ngFor="let item of items">
  <p>{{ item.name }}</p>
</div>

<div [ngSwitch]="userRole">
  <p *ngSwitchCase="'admin'">Eres un administrador.</p>
  <p *ngSwitchCase="'user'">Eres un usuario.</p>
  <p *ngSwitchDefault>Rol desconocido.</p>
</div>
```