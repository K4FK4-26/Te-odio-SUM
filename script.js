// ============================================================
// VARIABLES GLOBALES
// ============================================================
var datos = {};
var cicloActual = 0;
var ciclos = [];
var modoActual = 'teoria';
var cursosSeleccionados = [];
var coloresAsignados = {};
var cursosFiltrados = [];
var temporizadorMensaje = null;

var paletaColores = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8C471', '#82E0AA', '#F1948A', '#73C6B6', '#E59866',
    '#AF7AC5', '#5DADE2', '#58D68D', '#F4D03F', '#76D7C4'
];

var dias = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
var horas = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
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
// FUNCIONES DE INTERFAZ
// ============================================================
function mostrarBienvenida(mostrar) {
    var bienvenida = document.getElementById('mensajeBienvenida');
    var mainContent = document.getElementById('mainContent');
    var botones = document.getElementById('botonesInferiores');
    
    if (mostrar) {
        bienvenida.style.display = 'block';
        mainContent.style.display = 'none';
        botones.style.display = 'none';
    } else {
        bienvenida.style.display = 'none';
        mainContent.style.display = 'flex';
        botones.style.display = 'flex';
    }
}

function verificarDatos() {
    var userData = getUserData();
    if (userData && userData.cursos && Object.keys(userData.cursos).length > 0) {
        datos = userData.cursos;
        ciclos = Object.keys(datos);
        if (cicloActual >= ciclos.length) {
            cicloActual = 0;
        }
        mostrarBienvenida(false);
        actualizarCursos();
        return true;
    } else {
        datos = {};
        ciclos = [];
        mostrarBienvenida(true);
        return false;
    }
}

// ============================================================
// FUNCIONES PRINCIPALES
// ============================================================
function actualizarCursos() {
    if (ciclos.length === 0) {
        document.getElementById('listaCursos').innerHTML = '<li style="text-align:center;padding:20px;color:#7f8c8d;">No hay cursos cargados. Ve a "Gestionar Datos"</li>';
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
    
    if (cursos.length === 0) {
        lista.innerHTML = '<li style="text-align:center;padding:20px;color:#7f8c8d;">No hay cursos en este ciclo/modo</li>';
        return;
    }
    
    for (var i = 0; i < cursos.length; i++) {
        var curso = cursos[i];
        var li = document.createElement('li');
        var enHorario = false;
        for (var j = 0; j < cursosSeleccionados.length; j++) {
            var c = cursosSeleccionados[j];
            if (c.nombre === curso.nombre && c.dia === curso.dia && c.hora === curso.hora) {
                enHorario = true;
                break;
            }
        }
        
        var texto = curso.nombre.substring(0, 30) + ' | Sec:' + curso.seccion + ' | ' + curso.profesor.substring(0, 20);
        if (enHorario) {
            texto = '✓ ' + texto;
            li.style.background = obtenerColor(curso.nombre);
        }
        li.textContent = texto;
        li.onclick = (function(curso) {
            return function() { clickCurso(curso); };
        })(curso);
        lista.appendChild(li);
    }
}

function filtrarCursos() {
    var busqueda = document.getElementById('buscador').value.toLowerCase().trim();
    var cicloNombre = ciclos[cicloActual] || ciclos[0];
    var cursos = datos[cicloNombre] ? datos[cicloNombre][modoActual] : [];
    
    if (busqueda === '') {
        cursosFiltrados = cursos.slice();
    } else {
        cursosFiltrados = [];
        for (var i = 0; i < cursos.length; i++) {
            var curso = cursos[i];
            if (curso.nombre.toLowerCase().includes(busqueda) || curso.profesor.toLowerCase().includes(busqueda) || curso.seccion.includes(busqueda)) {
                cursosFiltrados.push(curso);
            }
        }
    }
    mostrarCursos(cursosFiltrados);
}

function clickCurso(curso) {
    var index = -1;
    for (var i = 0; i < cursosSeleccionados.length; i++) {
        var c = cursosSeleccionados[i];
        if (c.nombre === curso.nombre && c.dia === curso.dia && c.hora === curso.hora) {
            index = i;
            break;
        }
    }
    
    if (index !== -1) {
        cursosSeleccionados.splice(index, 1);
        mostrarMensaje('Quitado: ' + curso.nombre, '#e74c3c');
    } else {
        var conflicto = false;
        for (var i = 0; i < cursosSeleccionados.length; i++) {
            var c = cursosSeleccionados[i];
            if (c.dia === curso.dia && horasSeSuperponen(c.hora, curso.hora)) {
                conflicto = true;
                mostrarMensaje('Conflicto: ' + c.nombre, '#e67e22');
                break;
            }
        }
        if (!conflicto) {
            cursosSeleccionados.push(curso);
            mostrarMensaje('Agregado: ' + curso.nombre, '#27ae60');
        }
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
        label.textContent = '💡 Haz click en un curso para agregarlo/quitarlo del horario';
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
    
    if (cursosSeleccionados.length === 0) {
        for (var h = 0; h < horas.length; h++) {
            var tr = document.createElement('tr');
            var tdHora = document.createElement('td');
            tdHora.textContent = horas[h];
            tdHora.style.fontWeight = 'bold';
            tdHora.style.background = document.body.classList.contains('modo-claro') ? '#ecf0f1' : '#1a2a4a';
            tdHora.style.width = '60px';
            tdHora.style.fontSize = '12px';
            tr.appendChild(tdHora);
            
            for (var d = 0; d < dias.length; d++) {
                var td = document.createElement('td');
                td.className = 'vacio';
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        return;
    }
    
    var horario = {};
    for (var d = 0; d < dias.length; d++) {
        horario[dias[d]] = {};
        for (var h = 0; h < horas.length; h++) {
            horario[dias[d]][horas[h]] = null;
        }
    }
    
    for (var i = 0; i < cursosSeleccionados.length; i++) {
        var curso = cursosSeleccionados[i];
        var dia = curso.dia;
        if (!horario[dia]) continue;
        
        var partes = curso.hora.split(' - ');
        if (partes.length !== 2) continue;
        
        var horaInicio = partes[0].trim();
        var horaFin = partes[1].trim();
        
        var idxInicio = horas.indexOf(horaInicio);
        var idxFin = horas.indexOf(horaFin);
        
        if (idxInicio === -1 || idxFin === -1) continue;
        
        for (var j = idxInicio; j < idxFin && j < horas.length; j++) {
            if (horario[dia][horas[j]] === null) {
                horario[dia][horas[j]] = curso;
            }
        }
    }
    
    for (var h = 0; h < horas.length; h++) {
        var hora = horas[h];
        var tr = document.createElement('tr');
        var tdHora = document.createElement('td');
        tdHora.textContent = hora;
        tdHora.style.fontWeight = 'bold';
        tdHora.style.background = document.body.classList.contains('modo-claro') ? '#ecf0f1' : '#1a2a4a';
        tdHora.style.width = '60px';
        tdHora.style.fontSize = '12px';
        tr.appendChild(tdHora);
        
        for (var d = 0; d < dias.length; d++) {
            var dia = dias[d];
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
        }
        
        tbody.appendChild(tr);
    }
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
    if (ciclos.length === 0) return;
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
    if (ciclos.length === 0) {
        mostrarMensaje('No hay cursos disponibles', '#e74c3c');
        return;
    }
    
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
    
    for (var d = 0; d < dias.length; d++) {
        var dia = dias[d];
        texto += '\n' + dia + ':\n';
        texto += '-'.repeat(50) + '\n';
        var cursosDia = [];
        for (var i = 0; i < cursosSeleccionados.length; i++) {
            if (cursosSeleccionados[i].dia === dia) {
                cursosDia.push(cursosSeleccionados[i]);
            }
        }
        if (cursosDia.length > 0) {
            for (var i = 0; i < cursosDia.length; i++) {
                var curso = cursosDia[i];
                texto += '  ' + curso.hora + ' | ' + curso.nombre + '\n';
                texto += '          Seccion: ' + curso.seccion + ' | Prof: ' + curso.profesor + '\n';
                texto += '          Creditos: ' + curso.creditos + '\n';
            }
        } else {
            texto += '  (Sin cursos)\n';
        }
        texto += '\n';
    }
    
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
        btn.textContent = '🌙 Modo Oscuro';
        localStorage.setItem('modoOscuro', 'false');
    } else {
        btn.textContent = '☀️ Modo Claro';
        localStorage.setItem('modoOscuro', 'true');
    }
    actualizarHorario();
}

function cargarModo() {
    var modo = localStorage.getItem('modoOscuro');
    if (modo === 'false') {
        document.body.classList.add('modo-claro');
        document.getElementById('btnModo').textContent = '🌙 Modo Oscuro';
    } else {
        document.body.classList.remove('modo-claro');
        document.getElementById('btnModo').textContent = '☀️ Modo Claro';
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
    var ejemplo = 'Ciclo 2,3,TOPOGRAFIA I,TEORIA,0,01,CRUZ MONTES,MIERCOLES,12:00,13:00,,,\nCiclo 2,3,TOPOGRAFIA I,LABORATORIO,0,00,CRUZ MONTES,MIERCOLES,13:00,17:00,,,';
    navigator.clipboard.writeText(ejemplo).then(function() {
        mostrarMensajePanel('Ejemplo CSV copiado', 'exito');
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
        mostrarBienvenida(false);
        actualizarCursos();
        
        mostrarMensajePanel('✅ Datos cargados: ' + totalCiclos + ' ciclos, ' + totalCursos + ' cursos', 'exito');
        actualizarVistaPrevia();
        
    } catch (error) {
        mostrarMensajePanel('❌ Error: ' + error.message, 'error');
        console.error('Error CSV:', error);
    }
}

function convertirCSVaJSON(csvText) {
    var lineas = csvText.split('\n').filter(function(line) { return line.trim() !== ''; });
    var nuevosDatos = {};
    
    var ciclosPosibles = ['Ciclo 2', 'Ciclo 3', 'Ciclo 4', 'Ciclo 5', 'Ciclo 6', 'Ciclo 0'];
    for (var c = 0; c < ciclosPosibles.length; c++) {
        nuevosDatos[ciclosPosibles[c]] = { teoria: [], laboratorio: [] };
    }
    
    var cursosProcesados = 0;
    var errores = [];
    var lineasIgnoradas = 0;
    
    for (var i = 0; i < lineas.length; i++) {
        var lineaLimpia = lineas[i].trim().replace(/\r/g, '');
        if (!lineaLimpia) {
            lineasIgnoradas++;
            continue;
        }
        
        if (lineaLimpia.startsWith('"') && lineaLimpia.endsWith('"')) {
            lineaLimpia = lineaLimpia.substring(1, lineaLimpia.length - 1);
        }
        
        var partes = lineaLimpia.split(',');
        for (var p = 0; p < partes.length; p++) {
            partes[p] = partes[p].trim();
        }
        
        if (partes.length < 10) {
            errores.push('Linea ' + (i + 1) + ': Formato incorrecto (' + partes.length + ' columnas)');
            lineasIgnoradas++;
            continue;
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
                errores.push('Linea ' + (i + 1) + ': Ciclo no reconocido "' + partes[0] + '"');
                lineasIgnoradas++;
                continue;
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
                errores.push('Linea ' + (i + 1) + ': Dia invalido "' + dia1 + '"');
                lineasIgnoradas++;
                continue;
            }
            
            if (!inicio1 || !final1) {
                errores.push('Linea ' + (i + 1) + ': Horas invalidas "' + inicio1 + ' - ' + final1 + '"');
                lineasIgnoradas++;
                continue;
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
            errores.push('Linea ' + (i + 1) + ': Error al procesar - ' + e.message);
            lineasIgnoradas++;
        }
    }
    
    for (var ciclo in nuevosDatos) {
        if (nuevosDatos[ciclo].teoria.length === 0 && nuevosDatos[ciclo].laboratorio.length === 0) {
            delete nuevosDatos[ciclo];
        }
    }
    
    if (errores.length > 0) {
        console.warn('⚠️ Errores en CSV:', errores);
        if (cursosProcesados === 0) {
            throw new Error('No se pudo procesar ningun curso.\n' + errores.slice(0, 3).join('\n'));
        }
        mostrarMensajePanel('⚠️ ' + cursosProcesados + ' cursos procesados, ' + lineasIgnoradas + ' ignoradas.', 'info');
    }
    
    if (cursosProcesados === 0) {
        throw new Error('No se pudo procesar ningun curso. Verifica el formato.');
    }
    
    return nuevosDatos;
}

function actualizarVistaPrevia() {
    var div = document.getElementById('vistaPrevia');
    var userData = getUserData();
    var datosActuales = userData && userData.cursos ? userData.cursos : {};
    
    var html = '';
    var totalCursos = 0;
    
    for (var ciclo in datosActuales) {
        var teoria = datosActuales[ciclo].teoria ? datosActuales[ciclo].teoria.length : 0;
        var laboratorio = datosActuales[ciclo].laboratorio ? datosActuales[ciclo].laboratorio.length : 0;
        var total = teoria + laboratorio;
        totalCursos += total;
        html += '<div class="resumen-linea">📂 ' + ciclo + ': ' + total + ' cursos (Teoría: ' + teoria + ' | Laboratorio: ' + laboratorio + ')</div>';
    }
    
    html += '<div class="resumen-linea total">📊 Total: ' + totalCursos + ' cursos en ' + Object.keys(datosActuales).length + ' ciclos</div>';
    
    if (totalCursos === 0) {
        div.innerHTML = '<p>No hay datos cargados. Carga un CSV.</p>';
    } else {
        div.innerHTML = html;
    }
}

function verDatosActuales() {
    actualizarVistaPrevia();
    mostrarMensajePanel('Vista previa actualizada', 'info');
}

function restaurarDatosDefault() {
    if (!confirm('¿Estas seguro de que quieres restaurar? Se perderan tus datos.')) {
        return;
    }
    
    var userData = getUserData() || {};
    delete userData.cursos;
    delete userData.cursosSeleccionados;
    saveUserData(userData);
    
    datos = {};
    ciclos = [];
    cicloActual = 0;
    cursosSeleccionados = [];
    coloresAsignados = {};
    actualizarCreditos();
    mostrarBienvenida(true);
    actualizarVistaPrevia();
    mostrarMensajePanel('Datos restaurados', 'exito');
}

// ============================================================
// INICIALIZACION
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    cargarModo();
    
    var userData = getUserData();
    if (userData && userData.cursos && Object.keys(userData.cursos).length > 0) {
        datos = userData.cursos;
        ciclos = Object.keys(datos);
        if (userData.cursosSeleccionados) {
            cursosSeleccionados = userData.cursosSeleccionados;
        }
        if (userData.cicloActual !== undefined) {
            cicloActual = userData.cicloActual;
        }
        if (userData.modoActual) {
            modoActual = userData.modoActual;
            document.getElementById('btnTeoria').className = 'btn-teoria' + (modoActual === 'teoria' ? ' activo' : '');
            document.getElementById('btnLaboratorio').className = 'btn-laboratorio' + (modoActual === 'laboratorio' ? ' activo' : '');
        }
        actualizarCreditos();
        mostrarBienvenida(false);
        actualizarCursos();
        
        var cantidad = 0;
        if (userData.horariosGuardados) {
            cantidad = userData.horariosGuardados.length;
        }
        if (cantidad > 0) {
            setTimeout(function() {
                mostrarMensaje('📂 ' + cantidad + ' horario(s) guardado(s)', '#3498db');
            }, 500);
        }
    } else {
        mostrarBienvenida(true);
    }
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
document.getElementById('btnIrGestionar').addEventListener('click', abrirPanelDatos);
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
