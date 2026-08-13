// ============================================================
// DATOS DE CURSOS - PREDETERMINADOS
// ============================================================
const DATOS_DEFAULT = {
  "Ciclo 2": {
    "teoria": [
      {"nombre": "TOPOGRAFIA APLICADA A LA INGENIERIA CIVIL I", "seccion": "01", "profesor": "CRUZ MONTES, FRANCI BENITO", "creditos": 3, "dia": "MIERCOLES", "hora": "12:00 - 13:00"},
      {"nombre": "TOPOGRAFIA APLICADA A LA INGENIERIA CIVIL II", "seccion": "02", "profesor": "CRUZ MONTES, FRANCI BENITO", "creditos": 3, "dia": "JUEVES", "hora": "12:00 - 13:00"},
      {"nombre": "GEOMETRIA DESCRIPTIVA", "seccion": "01", "profesor": "RAMIREZ PEJERREY, VICTOR NICOLAS", "creditos": 3, "dia": "MARTES", "hora": "18:00 - 20:00"},
      {"nombre": "INVESTIGACION FORMATIVA", "seccion": "01", "profesor": "RIVERA VIDAL, JIM ARTURO", "creditos": 3, "dia": "MIERCOLES", "hora": "08:00 - 10:00"},
      {"nombre": "CALCULO II", "seccion": "01", "profesor": "No especificado", "creditos": 4, "dia": "VIERNES", "hora": "08:00 - 10:00"},
      {"nombre": "FISICA I", "seccion": "01", "profesor": "SANCHEZ NOLASCO, FELIPE", "creditos": 4, "dia": "LUNES", "hora": "13:00 - 16:00"},
      {"nombre": "QUIMICA GENERAL", "seccion": "01", "profesor": "No especificado", "creditos": 4, "dia": "VIERNES", "hora": "14:00 - 17:00"}
    ],
    "laboratorio": [
      {"nombre": "TOPOGRAFIA APLICADA A LA INGENIERIA CIVIL I (LAB)", "seccion": "00", "profesor": "CRUZ MONTES, FRANCI BENITO", "creditos": 3, "dia": "MIERCOLES", "hora": "13:00 - 17:00"},
      {"nombre": "TOPOGRAFIA APLICADA A LA INGENIERIA CIVIL II (LAB)", "seccion": "00", "profesor": "CRUZ MONTES, FRANCI BENITO", "creditos": 3, "dia": "JUEVES", "hora": "13:00 - 17:00"},
      {"nombre": "GEOMETRIA DESCRIPTIVA (LAB)", "seccion": "00", "profesor": "RAMIREZ PEJERREY, VICTOR NICOLAS", "creditos": 3, "dia": "MARTES", "hora": "20:00 - 22:00"},
      {"nombre": "INVESTIGACION FORMATIVA (LAB)", "seccion": "00", "profesor": "RIVERA VIDAL, JIM ARTURO", "creditos": 3, "dia": "MIERCOLES", "hora": "10:00 - 12:00"},
      {"nombre": "CALCULO II (LAB)", "seccion": "00", "profesor": "No especificado", "creditos": 4, "dia": "VIERNES", "hora": "10:00 - 14:00"},
      {"nombre": "FISICA I (LAB)", "seccion": "00", "profesor": "SANCHEZ NOLASCO, FELIPE", "creditos": 4, "dia": "LUNES", "hora": "17:00 - 18:00"},
      {"nombre": "QUIMICA GENERAL (LAB)", "seccion": "00", "profesor": "No especificado", "creditos": 4, "dia": "VIERNES", "hora": "14:00 - 17:00"}
    ]
  },
  "Ciclo 3": {
    "teoria": [
      {"nombre": "CALCULO III", "seccion": "01", "profesor": "BUSTAMANTE RAMOS, ELVIS", "creditos": 4, "dia": "MIERCOLES", "hora": "08:00 - 11:00"},
      {"nombre": "GEOLOGIA", "seccion": "01", "profesor": "MEDINA SANDOVAL, ROSA JULIA", "creditos": 3, "dia": "JUEVES", "hora": "08:00 - 10:00"},
      {"nombre": "FISICA II", "seccion": "01", "profesor": "No especificado", "creditos": 4, "dia": "LUNES", "hora": "13:00 - 16:00"},
      {"nombre": "ESTATICA", "seccion": "01", "profesor": "JIMENEZ RODRIGO, EDGAR GABRIEL", "creditos": 4, "dia": "VIERNES", "hora": "15:00 - 17:00"}
    ],
    "laboratorio": [
      {"nombre": "CALCULO III (LAB)", "seccion": "00", "profesor": "BUSTAMANTE RAMOS, ELVIS", "creditos": 4, "dia": "VIERNES", "hora": "11:00 - 13:00"},
      {"nombre": "GEOLOGIA (LAB)", "seccion": "00", "profesor": "MEDINA SANDOVAL, ROSA JULIA", "creditos": 3, "dia": "JUEVES", "hora": "10:00 - 12:00"},
      {"nombre": "FISICA II (LAB)", "seccion": "00", "profesor": "No especificado", "creditos": 4, "dia": "LUNES", "hora": "16:00 - 18:00"},
      {"nombre": "ESTATICA (LAB)", "seccion": "00", "profesor": "JIMENEZ RODRIGO, EDGAR GABRIEL", "creditos": 4, "dia": "MARTES", "hora": "15:00 - 18:00"}
    ]
  },
  "Ciclo 4": {
    "teoria": [
      {"nombre": "CALCULO IV", "seccion": "01", "profesor": "BUSTAMANTE RAMOS, ELVIS", "creditos": 4, "dia": "JUEVES", "hora": "08:00 - 11:00"},
      {"nombre": "ALGORITMO Y PROGRAMACION", "seccion": "01", "profesor": "AROSOQUIPA MINA, YVAN MANUEL", "creditos": 3, "dia": "JUEVES", "hora": "18:00 - 20:00"},
      {"nombre": "DIBUJO ASISTIDO POR COMPUTADORA", "seccion": "01", "profesor": "CAYA RAMOS, OCTAVIO JOSE", "creditos": 3, "dia": "MIERCOLES", "hora": "13:00 - 14:00"},
      {"nombre": "DINAMICA", "seccion": "01", "profesor": "JIMENEZ RODRIGO, EDGAR GABRIEL", "creditos": 4, "dia": "MARTES", "hora": "17:00 - 21:00"},
      {"nombre": "MECANICA DE SUELOS", "seccion": "01", "profesor": "PEHOVAZ ALVAREZ, HUMBERTO IVAN", "creditos": 4, "dia": "MARTES", "hora": "14:00 - 17:00"},
      {"nombre": "TECNOLOGIA DE LOS MATERIALES", "seccion": "01", "profesor": "ESCALANTE CONTRERAS, JORGE", "creditos": 3, "dia": "LUNES", "hora": "18:00 - 20:00"},
      {"nombre": "ECOLOGIA Y EVALUACION AMBIENTAL", "seccion": "01", "profesor": "CHAMBI ECHEGARAY, GINA GABRIELA", "creditos": 3, "dia": "MARTES", "hora": "08:00 - 10:00"}
    ],
    "laboratorio": [
      {"nombre": "CALCULO IV (LAB)", "seccion": "00", "profesor": "BUSTAMANTE RAMOS, ELVIS", "creditos": 4, "dia": "MIERCOLES", "hora": "11:00 - 13:00"},
      {"nombre": "ALGORITMO Y PROGRAMACION (LAB)", "seccion": "00", "profesor": "AROSOQUIPA MINA, YVAN MANUEL", "creditos": 3, "dia": "JUEVES", "hora": "20:00 - 22:00"},
      {"nombre": "DIBUJO ASISTIDO POR COMPUTADORA (LAB)", "seccion": "00", "profesor": "CAYA RAMOS, OCTAVIO JOSE", "creditos": 3, "dia": "MIERCOLES", "hora": "14:00 - 18:00"},
      {"nombre": "DINAMICA (LAB)", "seccion": "00", "profesor": "JIMENEZ RODRIGO, EDGAR GABRIEL", "creditos": 4, "dia": "VIERNES", "hora": "19:00 - 21:00"},
      {"nombre": "MECANICA DE SUELOS (LAB)", "seccion": "00", "profesor": "PEHOVAZ ALVAREZ, HUMBERTO IVAN", "creditos": 4, "dia": "LUNES", "hora": "14:00 - 16:00"},
      {"nombre": "TECNOLOGIA DE LOS MATERIALES (LAB)", "seccion": "00", "profesor": "ESCALANTE CONTRERAS, JORGE", "creditos": 3, "dia": "LUNES", "hora": "20:00 - 22:00"},
      {"nombre": "ECOLOGIA Y EVALUACION AMBIENTAL (LAB)", "seccion": "00", "profesor": "CHAMBI ECHEGARAY, GINA GABRIELA", "creditos": 3, "dia": "MARTES", "hora": "10:00 - 12:00"}
    ]
  },
  "Ciclo 5": {
    "teoria": [
      {"nombre": "MECANICA DE FLUIDOS", "seccion": "01", "profesor": "AROSOQUIPA MINA, YVAN MANUEL", "creditos": 4, "dia": "VIERNES", "hora": "08:00 - 10:00"},
      {"nombre": "CONSTRUCCION I", "seccion": "01", "profesor": "SANCHEZ BENITES, FELIX SANTIAGO", "creditos": 4, "dia": "LUNES", "hora": "15:00 - 18:00"}
    ],
    "laboratorio": [
      {"nombre": "MECANICA DE FLUIDOS (LAB)", "seccion": "00", "profesor": "AROSOQUIPA MINA, YVAN MANUEL", "creditos": 4, "dia": "VIERNES", "hora": "10:00 - 12:00"},
      {"nombre": "CONSTRUCCION I (LAB)", "seccion": "00", "profesor": "SANCHEZ BENITES, FELIX SANTIAGO", "creditos": 4, "dia": "LUNES", "hora": "18:00 - 20:00"}
    ]
  },
  "Ciclo 6": {
    "teoria": [
      {"nombre": "HIDRAULICA APLICADA", "seccion": "01", "profesor": "QUISCA ASTOCAHUANA, SAMUEL", "creditos": 4, "dia": "MIERCOLES", "hora": "08:00 - 11:00"},
      {"nombre": "ANALISIS ESTRUCTURAL I", "seccion": "01", "profesor": "RICK MILTON, DELGADILLO AYALA", "creditos": 4, "dia": "JUEVES", "hora": "13:00 - 16:00"},
      {"nombre": "GEOLOGIA APLICADA A LA INGENIERIA CIVIL", "seccion": "01", "profesor": "TOLENTINO YPARRAGUIRRE, VICTOR", "creditos": 4, "dia": "LUNES", "hora": "16:00 - 18:00"},
      {"nombre": "DESARROLLO SUSTENTABLE Y RESPONSABILIDAD SOCIAL UNIVERSITARIA", "seccion": "01", "profesor": "CHAMBI ECHEGARAY, GINA GABRIELA", "creditos": 4, "dia": "JUEVES", "hora": "08:00 - 11:00"},
      {"nombre": "MODELAMIENTO INFORMATICO EN LA CONSTRUCCION (BIM)", "seccion": "01", "profesor": "No especificado", "creditos": 3, "dia": "MARTES", "hora": "08:00 - 10:00"},
      {"nombre": "CONSTRUCCION II", "seccion": "01", "profesor": "SANCHEZ BENITES, FELIX SANTIAGO", "creditos": 3, "dia": "MIERCOLES", "hora": "16:00 - 18:00"},
      {"nombre": "GESTION DE RIESGOS DE DESASTRES Y CAMBIO CLIMATICO", "seccion": "01", "profesor": "MORAN YANEZ, LUIS MIGUEL", "creditos": 3, "dia": "LUNES", "hora": "12:00 - 14:00"}
    ],
    "laboratorio": [
      {"nombre": "HIDRAULICA APLICADA (LAB)", "seccion": "00", "profesor": "QUISCA ASTOCAHUANA, SAMUEL", "creditos": 4, "dia": "LUNES", "hora": "09:00 - 11:00"},
      {"nombre": "ANALISIS ESTRUCTURAL I (LAB)", "seccion": "00", "profesor": "RICK MILTON, DELGADILLO AYALA", "creditos": 4, "dia": "JUEVES", "hora": "16:00 - 18:00"},
      {"nombre": "GEOLOGIA APLICADA A LA INGENIERIA CIVIL (LAB)", "seccion": "00", "profesor": "TOLENTINO YPARRAGUIRRE, VICTOR", "creditos": 4, "dia": "LUNES", "hora": "18:00 - 22:00"},
      {"nombre": "DESARROLLO SUSTENTABLE Y RESPONSABILIDAD SOCIAL UNIVERSITARIA (LAB)", "seccion": "00", "profesor": "CHAMBI ECHEGARAY, GINA GABRIELA", "creditos": 4, "dia": "JUEVES", "hora": "11:00 - 13:00"},
      {"nombre": "MODELAMIENTO INFORMATICO EN LA CONSTRUCCION (BIM) (LAB)", "seccion": "00", "profesor": "No especificado", "creditos": 3, "dia": "MARTES", "hora": "10:00 - 12:00"},
      {"nombre": "CONSTRUCCION II (LAB)", "seccion": "00", "profesor": "SANCHEZ BENITES, FELIX SANTIAGO", "creditos": 3, "dia": "MIERCOLES", "hora": "18:00 - 20:00"},
      {"nombre": "GESTION DE RIESGOS DE DESASTRES Y CAMBIO CLIMATICO (LAB)", "seccion": "00", "profesor": "MORAN YANEZ, LUIS MIGUEL", "creditos": 3, "dia": "MIERCOLES", "hora": "11:00 - 13:00"}
    ]
  }
};

// ============================================================
// VARIABLES GLOBALES
// ============================================================
let datos = JSON.parse(JSON.stringify(DATOS_DEFAULT));
let cicloActual = 0;
let ciclos = Object.keys(datos);
let modoActual = 'teoria';
let cursosSeleccionados = [];
let coloresAsignados = {};
let cursosFiltrados = [];
let temporizadorMensaje = null;

const paletaColores = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8C471', '#82E0AA', '#F1948A', '#73C6B6', '#E59866',
    '#AF7AC5', '#5DADE2', '#58D68D', '#F4D03F', '#76D7C4'
];

const dias = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
const horas = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
               '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];

// ============================================================
// FUNCIONES DE COLOR
// ============================================================
function obtenerColor(nombreCurso) {
    if (!coloresAsignados[nombreCurso]) {
        var color = paletaColores[Object.keys(coloresAsignados).length % paletaColores.length];
        coloresAsignados[nombreCurso] = color;
    }
    return coloresAsignados[nombreCurso];
}

// ============================================================
// FUNCIONES DE DATOS DEL USUARIO
// ============================================================
function getUserId() {
    var userId = localStorage.getItem('userId');
    if (!userId) {
        userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
        localStorage.setItem('userId', userId);
    }
    return userId;
}

function getUserData() {
    var userId = getUserId();
    var stored = localStorage.getItem('datosUsuario_' + userId);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            return null;
        }
    }
    return null;
}

function saveUserData(data) {
    var userId = getUserId();
    localStorage.setItem('datosUsuario_' + userId, JSON.stringify(data));
}

function guardarHorarioSeleccionado() {
    var userData = getUserData() || {};
    userData.cursosSeleccionados = cursosSeleccionados;
    userData.cicloActual = cicloActual;
    userData.modoActual = modoActual;
    saveUserData(userData);
}

// ============================================================
// FUNCIONES PRINCIPALES
// ============================================================
function actualizarCursos() {
    var userData = getUserData();
    if (userData && userData.cursos) {
        datos = userData.cursos;
        ciclos = Object.keys(datos);
        if (cicloActual >= ciclos.length) {
            cicloActual = 0;
        }
    }
    
    if (ciclos.length === 0) {
        document.getElementById('listaCursos').innerHTML = '<li style="text-align:center;padding:20px;color:#e74c3c;">No hay datos de cursos. Carga un CSV o restaura los datos predeterminados.</li>';
        return;
    }
    
    var cicloNombre = ciclos[cicloActual] || ciclos[0];
    document.getElementById('labelCiclo').textContent = cicloNombre;
    
    if (!datos[cicloNombre]) {
        document.getElementById('listaCursos').innerHTML = '<li style="text-align:center;padding:20px;color:#e74c3c;">No hay datos para este ciclo.</li>';
        return;
    }
    
    var cursos = datos[cicloNombre][modoActual] || [];
    cursosFiltrados = cursos.slice();
    mostrarCursos(cursosFiltrados);
    actualizarHorario();
}

function mostrarCursos(cursos) {
    var lista = document.getElementById('listaCursos');
    lista.innerHTML = '';
    
    cursos.forEach(function(curso) {
        var li = document.createElement('li');
        var enHorario = cursosSeleccionados.some(function(c) {
            return c.nombre === curso.nombre && c.dia === curso.dia && c.hora === curso.hora;
        });
        
        var texto = curso.nombre.substring(0, 30) + ' | Sec:' + curso.seccion + ' | ' + curso.profesor.substring(0, 20);
        if (enHorario) {
            texto = '✓ ' + texto;
            li.style.background = obtenerColor(curso.nombre);
        }
        li.textContent = texto;
        li.onclick = function() { clickCurso(curso); };
        lista.appendChild(li);
    });
}

function filtrarCursos() {
    var busqueda = document.getElementById('buscador').value.toLowerCase().trim();
    var cicloNombre = ciclos[cicloActual] || ciclos[0];
    var cursos = datos[cicloNombre] ? datos[cicloNombre][modoActual] : [];
    
    if (busqueda === '') {
        cursosFiltrados = cursos.slice();
    } else {
        cursosFiltrados = cursos.filter(function(curso) {
            return curso.nombre.toLowerCase().includes(busqueda) ||
                   curso.profesor.toLowerCase().includes(busqueda) ||
                   curso.seccion.includes(busqueda);
        });
    }
    mostrarCursos(cursosFiltrados);
}

function clickCurso(curso) {
    var index = cursosSeleccionados.findIndex(function(c) {
        return c.nombre === curso.nombre && c.dia === curso.dia && c.hora === curso.hora;
    });
    
    if (index !== -1) {
        cursosSeleccionados.splice(index, 1);
        mostrarMensaje('Quitado: ' + curso.nombre, '#e74c3c');
    } else {
        for (var i = 0; i < cursosSeleccionados.length; i++) {
            var c = cursosSeleccionados[i];
            if (c.dia === curso.dia && horasSeSuperponen(c.hora, curso.hora)) {
                mostrarMensaje('Conflicto: ' + c.nombre + ' ya esta en ' + c.dia + ' ' + c.hora, '#e67e22');
                return;
            }
        }
        cursosSeleccionados.push(curso);
        mostrarMensaje('Agregado: ' + curso.nombre, '#27ae60');
    }
    
    actualizarCreditos();
    guardarHorarioSeleccionado();
    actualizarCursos();
}

function horasSeSuperponen(hora1, hora2) {
    function convertirAMinutos(horaStr) {
        var partes = horaStr.split(' - ');
        var inicio = partes[0].trim();
        var fin = partes[1] ? partes[1].trim() : inicio;
        
        function tiempoAMinutos(t) {
            var h_m = t.split(':');
            return parseInt(h_m[0]) * 60 + parseInt(h_m[1]);
        }
        return [tiempoAMinutos(inicio), tiempoAMinutos(fin)];
    }
    
    var ini1_fin1 = convertirAMinutos(hora1);
    var ini2_fin2 = convertirAMinutos(hora2);
    var ini1 = ini1_fin1[0], fin1 = ini1_fin1[1];
    var ini2 = ini2_fin2[0], fin2 = ini2_fin2[1];
    return !(fin1 <= ini2 || fin2 <= ini1);
}

function mostrarMensaje(texto, color) {
    var label = document.getElementById('labelInfo');
    label.textContent = texto;
    label.style.color = color;
    label.style.fontWeight = 'bold';
    
    if (temporizadorMensaje) {
        clearTimeout(temporizadorMensaje);
    }
    
    temporizadorMensaje = setTimeout(function() {
        label.textContent = 'Haz click en un curso para agregarlo/quitarlo del horario';
        label.style.color = '#b0b0b0';
        label.style.fontWeight = 'normal';
    }, 3000);
}

function actualizarCreditos() {
    var total = 0;
    for (var i = 0; i < cursosSeleccionados.length; i++) {
        total += cursosSeleccionados[i].creditos;
    }
    document.getElementById('labelCreditos').textContent = 'Creditos: ' + total + ' | Cursos: ' + cursosSeleccionados.length;
}

function actualizarHorario() {
    var tbody = document.getElementById('cuerpoHorario');
    tbody.innerHTML = '';
    
    var horario = {};
    dias.forEach(function(dia) {
        horario[dia] = {};
        horas.forEach(function(hora) {
            horario[dia][hora] = null;
        });
    });
    
    cursosSeleccionados.forEach(function(curso) {
        var dia = curso.dia;
        if (!horario[dia]) return;
        
        var partes = curso.hora.split(' - ');
        if (partes.length !== 2) return;
        
        var horaInicio = partes[0].trim();
        var horaFin = partes[1].trim();
        
        var idxInicio = horas.indexOf(horaInicio);
        var idxFin = horas.indexOf(horaFin);
        
        if (idxInicio === -1 || idxFin === -1) return;
        
        for (var i = idxInicio; i < idxFin && i < horas.length; i++) {
            if (horario[dia][horas[i]] === null) {
                horario[dia][horas[i]] = curso;
            }
        }
    });
    
    horas.forEach(function(hora) {
        var tr = document.createElement('tr');
        var tdHora = document.createElement('td');
        tdHora.textContent = hora;
        tdHora.style.fontWeight = 'bold';
        tdHora.style.background = document.body.classList.contains('modo-claro') ? '#ecf0f1' : '#1a2a4a';
        tdHora.style.width = '60px';
        tdHora.style.fontSize = '12px';
        tr.appendChild(tdHora);
        
        dias.forEach(function(dia) {
            var td = document.createElement('td');
            td.style.padding = '2px';
            td.style.height = '40px';
            td.style.verticalAlign = 'middle';
            td.style.textAlign = 'center';
            
            var curso = horario[dia][hora];
            if (curso) {
                var partes = curso.hora.split(' - ');
                var horaInicio = partes[0].trim();
                var horaFin = partes[1].trim();
                var idxInicio = horas.indexOf(horaInicio);
                var idxFin = horas.indexOf(horaFin);
                
                if (idxInicio === horas.indexOf(hora)) {
                    var duracion = idxFin - idxInicio;
                    
                    var div = document.createElement('div');
                    div.className = 'bloque-curso';
                    div.style.background = obtenerColor(curso.nombre);
                    div.style.height = (duracion * 40 - 4) + 'px';
                    div.title = curso.nombre + '\nSeccion: ' + curso.seccion + '\nProfesor: ' + curso.profesor + '\nCreditos: ' + curso.creditos;
                    
                    var nombreSpan = document.createElement('span');
                    nombreSpan.textContent = curso.nombre.substring(0, 15) + (curso.nombre.length > 15 ? '...' : '');
                    
                    var seccionSpan = document.createElement('span');
                    seccionSpan.textContent = 'Sec:' + curso.seccion;
                    
                    div.appendChild(nombreSpan);
                    div.appendChild(seccionSpan);
                    td.appendChild(div);
                } else {
                    td.style.background = obtenerColor(curso.nombre);
                    td.style.opacity = '0.3';
                }
            } else {
                td.className = 'vacio';
            }
            tr.appendChild(td);
        });
        
        tbody.appendChild(tr);
    });
}

function cambiarModo(modo) {
    modoActual = modo;
    document.getElementById('btnTeoria').className = 'btn-teoria' + (modo === 'teoria' ? ' activo' : '');
    document.getElementById('btnLaboratorio').className = 'btn-laboratorio' + (modo === 'laboratorio' ? ' activo' : '');
    document.getElementById('buscador').value = '';
    guardarHorarioSeleccionado();
    actualizarCursos();
}

function cambiarCiclo(direccion) {
    var nuevo = cicloActual + direccion;
    if (nuevo >= 0 && nuevo < ciclos.length) {
        cicloActual = nuevo;
        document.getElementById('buscador').value = '';
        guardarHorarioSeleccionado();
        actualizarCursos();
    }
}

// ============================================================
// LIMPIAR
// ============================================================
function confirmarLimpiar() {
    if (cursosSeleccionados.length === 0) {
        mostrarMensaje('El horario ya esta vacio', '#3498db');
        return;
    }
    
    if (confirm('¿Estas seguro de que quieres limpiar todo el horario?')) {
        limpiarHorario();
    }
}

function limpiarHorario() {
    cursosSeleccionados = [];
    coloresAsignados = {};
    actualizarCreditos();
    guardarHorarioSeleccionado();
    actualizarCursos();
    mostrarMensaje('Horario limpiado', '#e74c3c');
}

// ============================================================
// GENERAR AUTOMATICO
// ============================================================
function generarAutomatico() {
    var cicloNombre = ciclos[cicloActual] || ciclos[0];
    var cursos = datos[cicloNombre] ? datos[cicloNombre][modoActual] : [];
    
    if (!cursos || cursos.length === 0) {
        mostrarMensaje('No hay cursos disponibles', '#e74c3c');
        return;
    }
    
    cursosSeleccionados = [];
    coloresAsignados = {};
    
    var numCursos = Math.min(5 + Math.floor(Math.random() * 4), cursos.length);
    var seleccionados = [];
    var disponibles = cursos.slice();
    
    for (var i = 0; i < numCursos && disponibles.length > 0; i++) {
        var idx = Math.floor(Math.random() * disponibles.length);
        var curso = disponibles.splice(idx, 1)[0];
        
        var conflicto = false;
        for (var j = 0; j < seleccionados.length; j++) {
            var c = seleccionados[j];
            if (c.dia === curso.dia && horasSeSuperponen(c.hora, curso.hora)) {
                conflicto = true;
                break;
            }
        }
        if (!conflicto) {
            seleccionados.push(curso);
        }
    }
    
    cursosSeleccionados = seleccionados;
    actualizarCreditos();
    guardarHorarioSeleccionado();
    actualizarCursos();
    mostrarMensaje('Generado: ' + cursosSeleccionados.length + ' cursos', '#2ecc71');
}

// ============================================================
// EXPORTAR A TEXTO
// ============================================================
function exportarTexto() {
    if (cursosSeleccionados.length === 0) {
        mostrarMensaje('No hay cursos en el horario', '#e74c3c');
        return;
    }
    
    var texto = '='.repeat(70) + '\n';
    texto += 'MI HORARIO GENERADO - UNMSM\n';
    texto += '='.repeat(70) + '\n\n';
    
    dias.forEach(function(dia) {
        texto += '\n' + dia + ':\n';
        texto += '-'.repeat(50) + '\n';
        var cursosDia = cursosSeleccionados.filter(function(c) { return c.dia === dia; });
        if (cursosDia.length > 0) {
            cursosDia.forEach(function(curso) {
                texto += '  ' + curso.hora + ' | ' + curso.nombre + '\n';
                texto += '          Seccion: ' + curso.seccion + ' | Prof: ' + curso.profesor + '\n';
                texto += '          Creditos: ' + curso.creditos + '\n';
            });
        } else {
            texto += '  (Sin cursos)\n';
        }
        texto += '\n';
    });
    
    var blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'mi_horario.txt';
    link.click();
    URL.revokeObjectURL(link.href);
    
    mostrarMensaje('Texto exportado exitosamente', '#27ae60');
}

// ============================================================
// EXPORTAR A IMAGEN
// ============================================================
function exportarImagen() {
    if (cursosSeleccionados.length === 0) {
        mostrarMensaje('No hay cursos en el horario', '#e74c3c');
        return;
    }
    
    var tabla = document.getElementById('tablaContainer');
    mostrarMensaje('Generando imagen...', '#f39c12');
    
    if (typeof html2canvas === 'undefined') {
        mostrarMensaje('Error: html2canvas no cargado', '#e74c3c');
        return;
    }
    
    html2canvas(tabla, {
        scale: 2,
        backgroundColor: document.body.classList.contains('modo-claro') ? '#ffffff' : '#1a1a2e',
        allowTaint: true,
        useCORS: true,
        logging: false
    }).then(function(canvas) {
        var link = document.createElement('a');
        link.download = 'mi_horario.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        mostrarMensaje('Imagen exportada exitosamente', '#27ae60');
    }).catch(function(error) {
        console.error('Error:', error);
        mostrarMensaje('Error al generar imagen', '#e74c3c');
    });
}

// ============================================================
// GUARDAR HORARIO
// ============================================================
function guardarHorario() {
    if (cursosSeleccionados.length === 0) {
        mostrarMensaje('No hay cursos para guardar', '#e74c3c');
        return;
    }
    
    var datosGuardar = {
        fecha: new Date().toLocaleString(),
        ciclo: ciclos[cicloActual] || ciclos[0],
        modo: modoActual,
        cursos: cursosSeleccionados
    };
    
    try {
        var userData = getUserData() || {};
        if (!userData.horariosGuardados) {
            userData.horariosGuardados = [];
        }
        userData.horariosGuardados.push(datosGuardar);
        saveUserData(userData);
        
        mostrarMensaje('Horario guardado exitosamente', '#27ae60');
    } catch (error) {
        mostrarMensaje('Error al guardar', '#e74c3c');
    }
}

// ============================================================
// MODO OSCURO/CLARO
// ============================================================
function toggleModo() {
    document.body.classList.toggle('modo-claro');
    var btn = document.getElementById('btnModo');
    if (document.body.classList.contains('modo-claro')) {
        btn.textContent = 'Modo Oscuro';
        localStorage.setItem('modoOscuro', 'false');
    } else {
        btn.textContent = 'Modo Claro';
        localStorage.setItem('modoOscuro', 'true');
    }
    actualizarHorario();
}

function cargarModo() {
    var modo = localStorage.getItem('modoOscuro');
    if (modo === 'false') {
        document.body.classList.add('modo-claro');
        document.getElementById('btnModo').textContent = 'Modo Oscuro';
    } else {
        document.body.classList.remove('modo-claro');
        document.getElementById('btnModo').textContent = 'Modo Claro';
    }
}

// ============================================================
// PANEL DE GESTION DE DATOS
// ============================================================

function abrirPanelDatos() {
    document.getElementById('panelDatos').style.display = 'block';
    document.body.style.overflow = 'hidden';
    actualizarVistaPrevia();
}

function cerrarPanelDatos() {
    document.getElementById('panelDatos').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function copiarPrompt() {
    var promptText = document.getElementById('promptText').textContent;
    navigator.clipboard.writeText(promptText).then(function() {
        mostrarMensajePanel('Prompt copiado al portapapeles', 'exito');
    }).catch(function() {
        mostrarMensajePanel('Error al copiar', 'error');
    });
}

function copiarEjemploCSV() {
    var ejemplo = 'Ciclo 2,3,TOPOGRAFIA APLICADA A LA INGENIERIA CIVIL I,TEORIA,0,01,CRUZ MONTES, FRANCI BENITO,MIERCOLES,12:00,13:00,,,\nCiclo 2,3,TOPOGRAFIA APLICADA A LA INGENIERIA CIVIL I,LABORATORIO,0,00,CRUZ MONTES, FRANCI BENITO,MIERCOLES,13:00,17:00,,,';
    navigator.clipboard.writeText(ejemplo).then(function() {
        mostrarMensajePanel('Ejemplo CSV copiado al portapapeles', 'exito');
    }).catch(function() {
        mostrarMensajePanel('Error al copiar', 'error');
    });
}

function mostrarMensajePanel(texto, tipo) {
    var div = document.getElementById('mensajeProcesamiento');
    div.textContent = texto;
    div.className = 'mensaje-procesamiento ' + tipo;
    div.style.display = 'block';
    
    clearTimeout(window.timerMensajePanel);
    window.timerMensajePanel = setTimeout(function() {
        div.style.display = 'none';
    }, 5000);
}

function limpiarCSV() {
    document.getElementById('csvInput').value = '';
    document.getElementById('mensajeProcesamiento').style.display = 'none';
}

function procesarCSV() {
    var csvText = document.getElementById('csvInput').value.trim();
    
    if (!csvText) {
        mostrarMensajePanel('Por favor, pega un CSV valido', 'error');
        return;
    }
    
    try {
        var nuevosDatos = convertirCSVaJSON(csvText);
        
        if (Object.keys(nuevosDatos).length === 0) {
            mostrarMensajePanel('No se encontraron cursos en el CSV', 'error');
            return;
        }
        
        var totalCursos = 0;
        var totalCiclos = Object.keys(nuevosDatos).length;
        for (var ciclo in nuevosDatos) {
            totalCursos += nuevosDatos[ciclo].teoria.length + nuevosDatos[ciclo].laboratorio.length;
        }
        
        var userData = getUserData() || {};
        userData.cursos = nuevosDatos;
        saveUserData(userData);
        
        datos = nuevosDatos;
        ciclos = Object.keys(datos);
        if (cicloActual >= ciclos.length) {
            cicloActual = 0;
        }
        
        cursosSeleccionados = [];
        coloresAsignados = {};
        actualizarCreditos();
        guardarHorarioSeleccionado();
        actualizarCursos();
        
        mostrarMensajePanel('Datos cargados exitosamente: ' + totalCiclos + ' ciclos, ' + totalCursos + ' cursos', 'exito');
        actualizarVistaPrevia();
        
    } catch (error) {
        mostrarMensajePanel('Error al procesar CSV: ' + error.message, 'error');
        console.error('Error CSV:', error);
    }
}

function convertirCSVaJSON(csvText) {
    var lineas = csvText.split('\n').filter(function(line) { return line.trim() !== ''; });
    var nuevosDatos = {};
    
    var ciclosPosibles = ['Ciclo 2', 'Ciclo 3', 'Ciclo 4', 'Ciclo 5', 'Ciclo 6', 'Ciclo 0'];
    ciclosPosibles.forEach(function(c) {
        nuevosDatos[c] = { teoria: [], laboratorio: [] };
    });
    
    var cursosProcesados = 0;
    var errores = [];
    var lineasIgnoradas = 0;
    
    lineas.forEach(function(linea, numLinea) {
        var lineaLimpia = linea.trim().replace(/\r/g, '');
        if (!lineaLimpia) {
            lineasIgnoradas++;
            return;
        }
        
        if (lineaLimpia.startsWith('"') && lineaLimpia.endsWith('"')) {
            lineaLimpia = lineaLimpia.substring(1, lineaLimpia.length - 1);
        }
        
        var partes = lineaLimpia.split(',');
        partes = partes.map(function(p) { return p.trim(); });
        
        if (partes.length < 10) {
            errores.push('Linea ' + (numLinea + 1) + ': Formato incorrecto (' + partes.length + ' columnas)');
            lineasIgnoradas++;
            return;
        }
        
        try {
            var ciclo = partes[0] || '';
            if (ciclo.toLowerCase().includes('ciclo 2') || ciclo === '2') {
                ciclo = 'Ciclo 2';
            } else if (ciclo.toLowerCase().includes('ciclo 3') || ciclo === '3') {
                ciclo = 'Ciclo 3';
            } else if (ciclo.toLowerCase().includes('ciclo 4') || ciclo === '4') {
                ciclo = 'Ciclo 4';
            } else if (ciclo.toLowerCase().includes('ciclo 5') || ciclo === '5') {
                ciclo = 'Ciclo 5';
            } else if (ciclo.toLowerCase().includes('ciclo 6') || ciclo === '6') {
                ciclo = 'Ciclo 6';
            } else if (ciclo.toLowerCase().includes('ciclo 0') || ciclo === '0') {
                ciclo = 'Ciclo 0';
            } else {
                errores.push('Linea ' + (numLinea + 1) + ': Ciclo no reconocido "' + partes[0] + '"');
                lineasIgnoradas++;
                return;
            }
            
            if (!nuevosDatos[ciclo]) {
                nuevosDatos[ciclo] = { teoria: [], laboratorio: [] };
            }
            
            var creditos = parseInt(partes[1]) || 3;
            if (isNaN(creditos) || creditos < 1) creditos = 3;
            
            var curso = partes[2] || 'Curso sin nombre';
            if (curso === '' || curso === ' ') {
                curso = 'Curso sin nombre';
            }
            
            var tipo = partes[3] ? partes[3].toUpperCase() : '';
            var tipoFinal = '';
            if (tipo.includes('TEORIA') || tipo.includes('TEORICA') || tipo === 'T' || tipo === 'TEORIA') {
                tipoFinal = 'teoria';
            } else if (tipo.includes('LABORATORIO') || tipo.includes('LAB') || tipo === 'L' || tipo === 'LAB') {
                tipoFinal = 'laboratorio';
            } else {
                if (curso.includes('LAB') || curso.includes('LABORATORIO')) {
                    tipoFinal = 'laboratorio';
                } else {
                    tipoFinal = 'teoria';
                }
            }
            
            var gr = partes[5] ? partes[5].trim() : '00';
            if (gr === '' || gr === ' ') gr = '00';
            
            var docente = partes[6] ? partes[6].trim() : 'No especificado';
            if (docente === '' || docente === ' ') docente = 'No especificado';
            
            var diasValidos = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
            
            var dia1 = partes[7] ? partes[7].trim().toUpperCase() : '';
            var inicio1 = partes[8] ? partes[8].trim() : '';
            var final1 = partes[9] ? partes[9].trim() : '';
            var dia2 = partes[10] ? partes[10].trim().toUpperCase() : '';
            var inicio2 = partes[11] ? partes[11].trim() : '';
            var final2 = partes[12] ? partes[12].trim() : '';
            
            if (!dia1 || !diasValidos.includes(dia1)) {
                errores.push('Linea ' + (numLinea + 1) + ': Dia invalido "' + dia1 + '"');
                lineasIgnoradas++;
                return;
            }
            
            if (!inicio1 || !final1) {
                errores.push('Linea ' + (numLinea + 1) + ': Horas invalidas "' + inicio1 + ' - ' + final1 + '"');
                lineasIgnoradas++;
                return;
            }
            
            var cursoObj = {
                nombre: curso,
                seccion: gr,
                profesor: docente,
                creditos: creditos,
                dia: dia1,
                hora: inicio1 + ' - ' + final1
            };
            nuevosDatos[ciclo][tipoFinal].push(cursoObj);
            cursosProcesados++;
            
            if (dia2 && diasValidos.includes(dia2) && inicio2 && final2) {
                if (dia2 !== dia1 || inicio2 !== inicio1 || final2 !== final1) {
                    var cursoObj2 = {
                        nombre: curso,
                        seccion: gr,
                        profesor: docente,
                        creditos: creditos,
                        dia: dia2,
                        hora: inicio2 + ' - ' + final2
                    };
                    nuevosDatos[ciclo][tipoFinal].push(cursoObj2);
                    cursosProcesados++;
                }
            }
            
        } catch (e) {
            errores.push('Linea ' + (numLinea + 1) + ': Error al procesar - ' + e.message);
            lineasIgnoradas++;
        }
    });
    
    for (var ciclo in nuevosDatos) {
        if (nuevosDatos[ciclo].teoria.length === 0 && nuevosDatos[ciclo].laboratorio.length === 0) {
            delete nuevosDatos[ciclo];
        }
    }
    
    if (errores.length > 0) {
        console.warn('Errores en CSV:', errores);
        if (cursosProcesados === 0) {
            throw new Error('No se pudo procesar ningun curso.\nErrores:\n' + errores.slice(0, 5).join('\n'));
        }
        mostrarMensajePanel('' + cursosProcesados + ' cursos procesados, ' + lineasIgnoradas + ' lineas ignoradas.', 'info');
    }
    
    if (cursosProcesados === 0) {
        throw new Error('No se pudo procesar ningun curso del CSV. Verifica el formato.');
    }
    
    return nuevosDatos;
}

function actualizarVistaPrevia() {
    var div = document.getElementById('vistaPrevia');
    var userData = getUserData();
    var datosActuales = userData && userData.cursos ? userData.cursos : datos;
    
    var html = '';
    var totalCursos = 0;
    
    for (var ciclo in datosActuales) {
        var teoria = datosActuales[ciclo].teoria.length;
        var laboratorio = datosActuales[ciclo].laboratorio.length;
        var total = teoria + laboratorio;
        totalCursos += total;
        html += '<div class="resumen-linea">' + ciclo + ': ' + total + ' cursos (Teoria: ' + teoria + ' | Laboratorio: ' + laboratorio + ')</div>';
    }
    
    html += '<div class="resumen-linea total">Total: ' + totalCursos + ' cursos en ' + Object.keys(datosActuales).length + ' ciclos</div>';
    
    if (totalCursos === 0) {
        div.innerHTML = '<p>No hay datos cargados. Carga un CSV o restaura los datos predeterminados.</p>';
    } else {
        div.innerHTML = html;
    }
}

function verDatosActuales() {
    actualizarVistaPrevia();
    mostrarMensajePanel('Vista previa actualizada', 'info');
}

function restaurarDatosDefault() {
    if (!confirm('¿Estas seguro de que quieres restaurar los datos predeterminados? Se perderan tus datos personalizados.')) {
        return;
    }
    
    datos = JSON.parse(JSON.stringify(DATOS_DEFAULT));
    ciclos = Object.keys(datos);
    if (cicloActual >= ciclos.length) {
        cicloActual = 0;
    }
    
    var userData = getUserData() || {};
    userData.cursos = datos;
    saveUserData(userData);
    
    cursosSeleccionados = [];
    coloresAsignados = {};
    actualizarCreditos();
    guardarHorarioSeleccionado();
    actualizarCursos();
    actualizarVistaPrevia();
    mostrarMensajePanel('Datos restaurados a los valores predeterminados', 'exito');
}

// ============================================================
// INICIALIZACION
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    cargarModo();
    
    var userData = getUserData();
    if (userData && userData.cursos) {
        datos = userData.cursos;
        ciclos = Object.keys(datos);
        console.log('Datos de cursos cargados desde LocalStorage');
    }
    if (userData && userData.cursosSeleccionados) {
        cursosSeleccionados = userData.cursosSeleccionados;
        console.log('Horario cargado desde LocalStorage');
    }
    if (userData && userData.cicloActual !== undefined) {
        cicloActual = userData.cicloActual;
    }
    if (userData && userData.modoActual) {
        modoActual = userData.modoActual;
        document.getElementById('btnTeoria').className = 'btn-teoria' + (modoActual === 'teoria' ? ' activo' : '');
        document.getElementById('btnLaboratorio').className = 'btn-laboratorio' + (modoActual === 'laboratorio' ? ' activo' : '');
    }
    
    actualizarCreditos();
    actualizarCursos();
    
    try {
        var userData2 = getUserData();
        if (userData2 && userData2.horariosGuardados) {
            var cantidad = userData2.horariosGuardados.length;
            if (cantidad > 0) {
                setTimeout(function() {
                    mostrarMensaje(cantidad + ' horario(s) guardado(s)', '#3498db');
                }, 500);
            }
        }
    } catch (e) {}
});

// ============================================================
// EVENTOS
// ============================================================
document.getElementById('btnAnterior').addEventListener('click', function() { cambiarCiclo(-1); });
document.getElementById('btnSiguiente').addEventListener('click', function() { cambiarCiclo(1); });
document.getElementById('btnTeoria').addEventListener('click', function() { cambiarModo('teoria'); });
document.getElementById('btnLaboratorio').addEventListener('click', function() { cambiarModo('laboratorio'); });
document.getElementById('btnModo').addEventListener('click', toggleModo);
document.getElementById('btnGuardar').addEventListener('click', guardarHorario);
document.getElementById('btnGestionarDatos').addEventListener('click', abrirPanelDatos);
document.getElementById('btnCerrarModal').addEventListener('click', cerrarPanelDatos);
document.getElementById('btnCerrarModalFooter').addEventListener('click', cerrarPanelDatos);
document.getElementById('btnCopiarPrompt').addEventListener('click', copiarPrompt);
document.getElementById('btnCopiarEjemplo').addEventListener('click', copiarEjemploCSV);
document.getElementById('btnProcesarCSV').addEventListener('click', procesarCSV);
document.getElementById('btnVerDatos').addEventListener('click', verDatosActuales);
document.getElementById('btnLimpiarCSV').addEventListener('click', limpiarCSV);
document.getElementById('btnRestaurar').addEventListener('click', restaurarDatosDefault);
document.getElementById('btnGenerar').addEventListener('click', generarAutomatico);
document.getElementById('btnLimpiar').addEventListener('click', confirmarLimpiar);
document.getElementById('btnExportarTexto').addEventListener('click', exportarTexto);
document.getElementById('btnExportarImagen').addEventListener('click', exportarImagen);
document.getElementById('buscador').addEventListener('keyup', filtrarCursos);

// ============================================================
// ATEJOS DE TECLADO
// ============================================================
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        cambiarCiclo(-1);
        event.preventDefault();
    } else if (event.key === 'ArrowRight') {
        cambiarCiclo(1);
        event.preventDefault();
    } else if (event.key === 'l' || event.key === 'L') {
        confirmarLimpiar();
        event.preventDefault();
    } else if (event.key === 'g' || event.key === 'G') {
        generarAutomatico();
        event.preventDefault();
    } else if (event.key === 'd' || event.key === 'D') {
        toggleModo();
        event.preventDefault();
    } else if (event.key === 'Escape') {
        if (document.getElementById('panelDatos').style.display === 'block') {
            cerrarPanelDatos();
        }
    }
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', function(event) {
    var modal = document.getElementById('panelDatos');
    if (event.target === modal) {
        cerrarPanelDatos();
    }
});
