// ============================================================
// DATOS DE CURSOS
// ============================================================
const datos = {
  "Ciclo 0": {
    "teoria": [
      {"nombre": "ECONOMIA GENERAL", "seccion": "01", "profesor": "RENDON SCHNEIR, ERIC", "creditos": 2, "dia": "MIERCOLES", "hora": "19:00 - 21:00"},
      {"nombre": "ECONOMIA GENERAL", "seccion": "02", "profesor": "CRUZ MONTES, FRANCI BENITO", "creditos": 2, "dia": "MARTES", "hora": "08:00 - 09:00"}
    ],
    "laboratorio": [
      {"nombre": "ECONOMIA GENERAL (LAB)", "seccion": "00", "profesor": "RENDON SCHNEIR, ERIC", "creditos": 2, "dia": "MIERCOLES", "hora": "20:00 - 22:00"},
      {"nombre": "ECONOMIA GENERAL (LAB)", "seccion": "00", "profesor": "CRUZ MONTES, FRANCI BENITO", "creditos": 2, "dia": "MARTES", "hora": "09:00 - 11:00"}
    ]
  },
  "Ciclo 2": {
    "teoria": [
      {"nombre": "TOPOGRAFÍA APLICADA A LA INGENIERÍA CIVIL I", "seccion": "01", "profesor": "CRUZ MONTES, FRANCI BENITO", "creditos": 3, "dia": "MIERCOLES", "hora": "12:00 - 13:00"},
      {"nombre": "TOPOGRAFÍA APLICADA A LA INGENIERÍA CIVIL I", "seccion": "02", "profesor": "CRUZ MONTES, FRANCI BENITO", "creditos": 3, "dia": "JUEVES", "hora": "12:00 - 13:00"},
      {"nombre": "TOPOGRAFÍA APLICADA A LA INGENIERÍA CIVIL I", "seccion": "03", "profesor": "CRUZ MONTES, FRANCI BENITO", "creditos": 3, "dia": "LUNES", "hora": "08:00 - 09:00"},
      {"nombre": "GEOMETRÍA DESCRIPTIVA", "seccion": "01", "profesor": "RAMIREZ PEJERREY, VICTOR NICOLAS", "creditos": 3, "dia": "MARTES", "hora": "18:00 - 20:00"},
      {"nombre": "GEOMETRÍA DESCRIPTIVA", "seccion": "02", "profesor": "RAMIREZ PEJERREY, VICTOR NICOLAS", "creditos": 3, "dia": "JUEVES", "hora": "08:00 - 10:00"},
      {"nombre": "INVESTIGACIÓN FORMATIVA", "seccion": "01", "profesor": "RIVERA VIDAL, JIM ARTURO", "creditos": 3, "dia": "MIERCOLES", "hora": "08:00 - 10:00"},
      {"nombre": "INVESTIGACIÓN FORMATIVA", "seccion": "02", "profesor": "JAVE NAKAYO, JORGE LEONARDO", "creditos": 3, "dia": "MIERCOLES", "hora": "08:00 - 10:00"},
      {"nombre": "REALIDAD NACIONAL Y MUNDIAL", "seccion": "01", "profesor": "RENDON SCHNEIR, ERIC", "creditos": 2, "dia": "MIERCOLES", "hora": "17:00 - 19:00"},
      {"nombre": "REALIDAD NACIONAL Y MUNDIAL", "seccion": "02", "profesor": "MALCA CASAVILCA, NORA ROSA CONCEPCIÓN", "creditos": 2, "dia": "MARTES", "hora": "11:00 - 13:00"},
      {"nombre": "CÁLCULO II", "seccion": "01", "profesor": "No especificado", "creditos": 4, "dia": "VIERNES", "hora": "08:00 - 10:00"},
      {"nombre": "FÍSICA I", "seccion": "01", "profesor": "SÁNCHEZ NOLASCO, FELIPE", "creditos": 4, "dia": "LUNES", "hora": "13:00 - 16:00"},
      {"nombre": "FÍSICA I", "seccion": "02", "profesor": "SÁNCHEZ NOLASCO, FELIPE", "creditos": 4, "dia": "MARTES", "hora": "13:00 - 16:00"},
      {"nombre": "QUÍMICA GENERAL", "seccion": "01", "profesor": "No especificado", "creditos": 4, "dia": "VIERNES", "hora": "14:00 - 17:00"}
    ],
    "laboratorio": [
      {"nombre": "TOPOGRAFÍA APLICADA A LA INGENIERÍA CIVIL I (LAB)", "seccion": "00", "profesor": "CRUZ MONTES, FRANCI BENITO", "creditos": 3, "dia": "MIERCOLES", "hora": "13:00 - 17:00"},
      {"nombre": "TOPOGRAFÍA APLICADA A LA INGENIERÍA CIVIL II (LAB)", "seccion": "00", "profesor": "CRUZ MONTES, FRANCI BENITO", "creditos": 3, "dia": "JUEVES", "hora": "13:00 - 17:00"},
      {"nombre": "TOPOGRAFÍA APLICADA A LA INGENIERÍA CIVIL III (LAB)", "seccion": "00", "profesor": "CRUZ MONTES, FRANCI BENITO", "creditos": 3, "dia": "LUNES", "hora": "09:00 - 13:00"},
      {"nombre": "GEOMETRÍA DESCRIPTIVA (LAB)", "seccion": "00", "profesor": "RAMIREZ PEJERREY, VICTOR NICOLAS", "creditos": 3, "dia": "MARTES", "hora": "20:00 - 22:00"},
      {"nombre": "GEOMETRÍA DESCRIPTIVA (LAB)", "seccion": "00", "profesor": "RAMIREZ PEJERREY, VICTOR NICOLAS", "creditos": 3, "dia": "JUEVES", "hora": "10:00 - 12:00"},
      {"nombre": "INVESTIGACIÓN FORMATIVA (LAB)", "seccion": "00", "profesor": "RIVERA VIDAL, JIM ARTURO", "creditos": 3, "dia": "MIERCOLES", "hora": "10:00 - 12:00"},
      {"nombre": "INVESTIGACIÓN FORMATIVA (LAB)", "seccion": "00", "profesor": "JAVE NAKAYO, JORGE LEONARDO", "creditos": 3, "dia": "MIERCOLES", "hora": "10:00 - 12:00"},
      {"nombre": "CÁLCULO II (LAB)", "seccion": "00", "profesor": "No especificado", "creditos": 4, "dia": "VIERNES", "hora": "10:00 - 14:00"},
      {"nombre": "FÍSICA I (LAB)", "seccion": "00", "profesor": "SÁNCHEZ NOLASCO, FELIPE", "creditos": 4, "dia": "LUNES", "hora": "17:00 - 18:00"},
      {"nombre": "FÍSICA I (LAB)", "seccion": "00", "profesor": "SÁNCHEZ NOLASCO, FELIPE", "creditos": 4, "dia": "MARTES", "hora": "17:00 - 18:00"},
      {"nombre": "QUÍMICA GENERAL (LAB)", "seccion": "00", "profesor": "No especificado", "creditos": 4, "dia": "VIERNES", "hora": "14:00 - 17:00"},
      {"nombre": "QUÍMICA GENERAL (LAB)", "seccion": "00", "profesor": "No especificado", "creditos": 4, "dia": "VIERNES", "hora": "17:00 - 19:00"}
    ]
  },
  "Ciclo 3": {
    "teoria": [
      {"nombre": "CÁLCULO III", "seccion": "01", "profesor": "BUSTAMANTE RAMOS, ELVIS", "creditos": 4, "dia": "MIERCOLES", "hora": "08:00 - 11:00"},
      {"nombre": "CÁLCULO III", "seccion": "02", "profesor": "No especificado", "creditos": 4, "dia": "VIERNES", "hora": "08:00 - 11:00"},
      {"nombre": "GEOLOGÍA", "seccion": "01", "profesor": "MEDINA SANDOVAL, ROSA JULIA", "creditos": 3, "dia": "JUEVES", "hora": "08:00 - 10:00"},
      {"nombre": "FÍSICA II", "seccion": "01", "profesor": "No especificado", "creditos": 4, "dia": "LUNES", "hora": "13:00 - 16:00"},
      {"nombre": "ESTÁTICA", "seccion": "01", "profesor": "JIMENEZ RODRIGO, EDGAR GABRIEL", "creditos": 4, "dia": "VIERNES", "hora": "15:00 - 17:00"}
    ],
    "laboratorio": [
      {"nombre": "CÁLCULO III (LAB)", "seccion": "00", "profesor": "BUSTAMANTE RAMOS, ELVIS", "creditos": 4, "dia": "VIERNES", "hora": "11:00 - 13:00"},
      {"nombre": "GEOLOGÍA (LAB)", "seccion": "00", "profesor": "MEDINA SANDOVAL, ROSA JULIA", "creditos": 3, "dia": "JUEVES", "hora": "10:00 - 12:00"},
      {"nombre": "FÍSICA II (LAB)", "seccion": "00", "profesor": "No especificado", "creditos": 4, "dia": "LUNES", "hora": "16:00 - 18:00"},
      {"nombre": "ESTÁTICA (LAB)", "seccion": "00", "profesor": "JIMENEZ RODRIGO, EDGAR GABRIEL", "creditos": 4, "dia": "MARTES", "hora": "15:00 - 18:00"}
    ]
  },
  "Ciclo 4": {
    "teoria": [
      {"nombre": "CÁLCULO IV", "seccion": "01", "profesor": "BUSTAMANTE RAMOS, ELVIS", "creditos": 4, "dia": "JUEVES", "hora": "08:00 - 11:00"},
      {"nombre": "ALGORITMO Y PROGRAMACIÓN", "seccion": "01", "profesor": "AROSOQUIPA MINA, YVAN MANUEL", "creditos": 3, "dia": "JUEVES", "hora": "18:00 - 20:00"},
      {"nombre": "DIBUJO ASISTIDO POR COMPUTADORA", "seccion": "01", "profesor": "CAYA RAMOS, OCTAVIO JOSE", "creditos": 3, "dia": "MIERCOLES", "hora": "13:00 - 14:00"},
      {"nombre": "DIBUJO ASISTIDO POR COMPUTADORA", "seccion": "02", "profesor": "CAYA RAMOS, OCTAVIO JOSE", "creditos": 3, "dia": "JUEVES", "hora": "13:00 - 14:00"},
      {"nombre": "DIBUJO ASISTIDO POR COMPUTADORA", "seccion": "03", "profesor": "CAYA RAMOS, OCTAVIO JOSE", "creditos": 3, "dia": "SABADO", "hora": "08:00 - 09:00"},
      {"nombre": "DINÁMICA", "seccion": "01", "profesor": "JIMENEZ RODRIGO, EDGAR GABRIEL", "creditos": 4, "dia": "MARTES", "hora": "17:00 - 21:00"},
      {"nombre": "DINÁMICA", "seccion": "02", "profesor": "No especificado", "creditos": 4, "dia": "MARTES", "hora": "18:00 - 21:00"},
      {"nombre": "MECÁNICA DE SUELOS", "seccion": "01", "profesor": "PEHOVAZ ALVAREZ, HUMBERTO IVÁN", "creditos": 4, "dia": "MARTES", "hora": "14:00 - 17:00"},
      {"nombre": "MECÁNICA DE SUELOS", "seccion": "02", "profesor": "PEHOVAZ ALVAREZ, HUMBERTO IVÁN", "creditos": 4, "dia": "LUNES", "hora": "14:00 - 17:00"},
      {"nombre": "TECNOLOGÍA DE LOS MATERIALES", "seccion": "01", "profesor": "ESCALANTE CONTRERAS, JORGE", "creditos": 3, "dia": "LUNES", "hora": "18:00 - 20:00"},
      {"nombre": "TECNOLOGÍA DE LOS MATERIALES", "seccion": "02", "profesor": "ESCALANTE CONTRERAS, JORGE", "creditos": 3, "dia": "VIERNES", "hora": "08:00 - 10:00"},
      {"nombre": "ECOLOGÍA Y EVALUACIÓN AMBIENTAL", "seccion": "01", "profesor": "CHAMBI ECHEGARAY, GINA GABRIELA", "creditos": 3, "dia": "MARTES", "hora": "08:00 - 10:00"},
      {"nombre": "ECOLOGÍA Y EVALUACIÓN AMBIENTAL", "seccion": "02", "profesor": "MALCA CASAVILCA, NORA ROSA CONCEPCIÓN", "creditos": 3, "dia": "JUEVES", "hora": "09:00 - 11:00"}
    ],
    "laboratorio": [
      {"nombre": "CÁLCULO IV (LAB)", "seccion": "00", "profesor": "BUSTAMANTE RAMOS, ELVIS", "creditos": 4, "dia": "MIERCOLES", "hora": "11:00 - 13:00"},
      {"nombre": "ALGORITMO Y PROGRAMACIÓN (LAB)", "seccion": "00", "profesor": "AROSOQUIPA MINA, YVAN MANUEL", "creditos": 3, "dia": "JUEVES", "hora": "20:00 - 22:00"},
      {"nombre": "DIBUJO ASISTIDO POR COMPUTADORA (LAB)", "seccion": "00", "profesor": "CAYA RAMOS, OCTAVIO JOSE", "creditos": 3, "dia": "MIERCOLES", "hora": "14:00 - 18:00"},
      {"nombre": "DIBUJO ASISTIDO POR COMPUTADORA (LAB)", "seccion": "00", "profesor": "CAYA RAMOS, OCTAVIO JOSE", "creditos": 3, "dia": "JUEVES", "hora": "14:00 - 18:00"},
      {"nombre": "DIBUJO ASISTIDO POR COMPUTADORA (LAB)", "seccion": "00", "profesor": "CAYA RAMOS, OCTAVIO JOSE", "creditos": 3, "dia": "SABADO", "hora": "09:00 - 13:00"},
      {"nombre": "DINÁMICA (LAB)", "seccion": "00", "profesor": "JIMENEZ RODRIGO, EDGAR GABRIEL", "creditos": 4, "dia": "VIERNES", "hora": "19:00 - 21:00"},
      {"nombre": "DINÁMICA (LAB)", "seccion": "00", "profesor": "No especificado", "creditos": 4, "dia": "MIERCOLES", "hora": "19:00 - 21:00"},
      {"nombre": "MECÁNICA DE SUELOS (LAB)", "seccion": "00", "profesor": "PEHOVAZ ALVAREZ, HUMBERTO IVÁN", "creditos": 4, "dia": "LUNES", "hora": "14:00 - 16:00"},
      {"nombre": "MECÁNICA DE SUELOS (LAB)", "seccion": "00", "profesor": "PEHOVAZ ALVAREZ, HUMBERTO IVÁN", "creditos": 4, "dia": "LUNES", "hora": "16:00 - 18:00"},
      {"nombre": "TECNOLOGÍA DE LOS MATERIALES (LAB)", "seccion": "00", "profesor": "ESCALANTE CONTRERAS, JORGE", "creditos": 3, "dia": "LUNES", "hora": "20:00 - 22:00"},
      {"nombre": "TECNOLOGÍA DE LOS MATERIALES (LAB)", "seccion": "00", "profesor": "ESCALANTE CONTRERAS, JORGE", "creditos": 3, "dia": "VIERNES", "hora": "10:00 - 12:00"},
      {"nombre": "ECOLOGÍA Y EVALUACIÓN AMBIENTAL (LAB)", "seccion": "00", "profesor": "CHAMBI ECHEGARAY, GINA GABRIELA", "creditos": 3, "dia": "MARTES", "hora": "10:00 - 12:00"},
      {"nombre": "ECOLOGÍA Y EVALUACIÓN AMBIENTAL (LAB)", "seccion": "00", "profesor": "MALCA CASAVILCA, NORA ROSA CONCEPCIÓN", "creditos": 3, "dia": "JUEVES", "hora": "11:00 - 13:00"}
    ]
  },
  "Ciclo 5": {
    "teoria": [
      {"nombre": "MECÁNICA DE FLUIDOS", "seccion": "01", "profesor": "AROSOQUIPA MINA, YVAN MANUEL", "creditos": 4, "dia": "VIERNES", "hora": "08:00 - 10:00"},
      {"nombre": "CONSTRUCCIÓN I", "seccion": "01", "profesor": "SANCHEZ BENITES, FELIX SANTIAGO", "creditos": 4, "dia": "LUNES", "hora": "15:00 - 18:00"}
    ],
    "laboratorio": [
      {"nombre": "MECÁNICA DE FLUIDOS (LAB)", "seccion": "00", "profesor": "AROSOQUIPA MINA, YVAN MANUEL", "creditos": 4, "dia": "VIERNES", "hora": "10:00 - 12:00"},
      {"nombre": "CONSTRUCCIÓN I (LAB)", "seccion": "00", "profesor": "SANCHEZ BENITES, FELIX SANTIAGO", "creditos": 4, "dia": "LUNES", "hora": "18:00 - 20:00"}
    ]
  },
  "Ciclo 6": {
    "teoria": [
      {"nombre": "HIDRÁULICA APLICADA", "seccion": "01", "profesor": "QUISCA ASTOCAHUANA, SAMUEL", "creditos": 4, "dia": "MIERCOLES", "hora": "08:00 - 11:00"},
      {"nombre": "ANÁLISIS ESTRUCTURAL I", "seccion": "01", "profesor": "RICK MILTON, DELGADILLO AYALA", "creditos": 4, "dia": "JUEVES", "hora": "13:00 - 16:00"},
      {"nombre": "GEOLOGÍA APLICADA A LA INGENIERÍA CIVIL", "seccion": "01", "profesor": "TOLENTINO YPARRAGUIRRE, VICTOR", "creditos": 4, "dia": "LUNES", "hora": "16:00 - 18:00"},
      {"nombre": "DESARROLLO SUSTENTABLE Y RESPONSABILIDAD SOCIAL UNIVERSITARIA", "seccion": "01", "profesor": "CHAMBI ECHEGARAY, GINA GABRIELA", "creditos": 4, "dia": "JUEVES", "hora": "08:00 - 11:00"},
      {"nombre": "MODELAMIENTO INFORMÁTICO EN LA CONSTRUCCIÓN (BIM)", "seccion": "01", "profesor": "No especificado", "creditos": 3, "dia": "MARTES", "hora": "08:00 - 10:00"},
      {"nombre": "MODELAMIENTO INFORMÁTICO EN LA CONSTRUCCIÓN (BIM)", "seccion": "02", "profesor": "No especificado", "creditos": 3, "dia": "VIERNES", "hora": "08:00 - 10:00"},
      {"nombre": "CONSTRUCCIÓN II", "seccion": "01", "profesor": "SANCHEZ BENITES, FELIX SANTIAGO", "creditos": 3, "dia": "MIERCOLES", "hora": "16:00 - 18:00"},
      {"nombre": "GESTIÓN DE RIESGOS DE DESASTRES Y CAMBIO CLIMÁTICO", "seccion": "01", "profesor": "MORAN YAÑEZ, LUIS MIGUEL", "creditos": 3, "dia": "LUNES", "hora": "12:00 - 14:00"}
    ],
    "laboratorio": [
      {"nombre": "HIDRÁULICA APLICADA (LAB)", "seccion": "00", "profesor": "QUISCA ASTOCAHUANA, SAMUEL", "creditos": 4, "dia": "LUNES", "hora": "09:00 - 11:00"},
      {"nombre": "ANÁLISIS ESTRUCTURAL I (LAB)", "seccion": "00", "profesor": "RICK MILTON, DELGADILLO AYALA", "creditos": 4, "dia": "JUEVES", "hora": "16:00 - 18:00"},
      {"nombre": "GEOLOGÍA APLICADA A LA INGENIERÍA CIVIL (LAB)", "seccion": "00", "profesor": "TOLENTINO YPARRAGUIRRE, VICTOR", "creditos": 4, "dia": "LUNES", "hora": "18:00 - 22:00"},
      {"nombre": "DESARROLLO SUSTENTABLE Y RESPONSABILIDAD SOCIAL UNIVERSITARIA (LAB)", "seccion": "00", "profesor": "CHAMBI ECHEGARAY, GINA GABRIELA", "creditos": 4, "dia": "JUEVES", "hora": "11:00 - 13:00"},
      {"nombre": "MODELAMIENTO INFORMÁTICO EN LA CONSTRUCCIÓN (BIM) (LAB)", "seccion": "00", "profesor": "No especificado", "creditos": 3, "dia": "MARTES", "hora": "10:00 - 12:00"},
      {"nombre": "MODELAMIENTO INFORMÁTICO EN LA CONSTRUCCIÓN (BIM) (LAB)", "seccion": "00", "profesor": "No especificado", "creditos": 3, "dia": "VIERNES", "hora": "10:00 - 12:00"},
      {"nombre": "CONSTRUCCIÓN II (LAB)", "seccion": "00", "profesor": "SANCHEZ BENITES, FELIX SANTIAGO", "creditos": 3, "dia": "MIERCOLES", "hora": "18:00 - 20:00"},
      {"nombre": "GESTIÓN DE RIESGOS DE DESASTRES Y CAMBIO CLIMÁTICO (LAB)", "seccion": "00", "profesor": "MORAN YAÑEZ, LUIS MIGUEL", "creditos": 3, "dia": "MIERCOLES", "hora": "11:00 - 13:00"}
    ]
  }
};

// ============================================================
// VARIABLES GLOBALES
// ============================================================
let cicloActual = 0;
const ciclos = Object.keys(datos);
let modoActual = 'teoria';
let cursosSeleccionados = [];
let coloresAsignados = {};

const paletaColores = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8C471', '#82E0AA', '#F1948A', '#73C6B6', '#E59866',
    '#AF7AC5', '#5DADE2', '#58D68D', '#F4D03F', '#76D7C4'
];

const dias = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
const horas = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
               '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];

// ============================================================
// FUNCIONES PRINCIPALES
// ============================================================

function obtenerColor(nombreCurso) {
    if (!coloresAsignados[nombreCurso]) {
        const color = paletaColores[Object.keys(coloresAsignados).length % paletaColores.length];
        coloresAsignados[nombreCurso] = color;
    }
    return coloresAsignados[nombreCurso];
}

function actualizarCursos() {
    const cicloNombre = ciclos[cicloActual];
    document.getElementById('labelCiclo').textContent = cicloNombre;
    
    const cursos = datos[cicloNombre][modoActual];
    const lista = document.getElementById('listaCursos');
    lista.innerHTML = '';
    
    cursos.forEach(curso => {
        const li = document.createElement('li');
        const enHorario = cursosSeleccionados.some(c => 
            c.nombre === curso.nombre && c.dia === curso.dia && c.hora === curso.hora
        );
        
        let texto = `${curso.nombre.substring(0, 30)} | Sec:${curso.seccion} | ${curso.profesor.substring(0, 20)}`;
        if (enHorario) {
            texto = '✓ ' + texto;
            li.style.background = obtenerColor(curso.nombre);
        }
        li.textContent = texto;
        li.dataset.idx = cursos.indexOf(curso);
        li.onclick = () => clickCurso(curso);
        lista.appendChild(li);
    });
    
    actualizarHorario();
}

function clickCurso(curso) {
    const index = cursosSeleccionados.findIndex(c => 
        c.nombre === curso.nombre && c.dia === curso.dia && c.hora === curso.hora
    );
    
    if (index !== -1) {
        cursosSeleccionados.splice(index, 1);
        document.getElementById('labelInfo').textContent = `❌ Quitado: ${curso.nombre}`;
        document.getElementById('labelInfo').style.color = '#e74c3c';
    } else {
        // Verificar conflicto
        for (const c of cursosSeleccionados) {
            if (c.dia === curso.dia && horasSeSuperponen(c.hora, curso.hora)) {
                alert(`¡Conflicto de horario!\n${c.nombre} ya está en ${c.dia} ${c.hora}`);
                return;
            }
        }
        cursosSeleccionados.push(curso);
        document.getElementById('labelInfo').textContent = `✅ Agregado: ${curso.nombre}`;
        document.getElementById('labelInfo').style.color = '#27ae60';
    }
    
    actualizarCreditos();
    actualizarCursos();
}

function horasSeSuperponen(hora1, hora2) {
    function convertirAMinutos(horaStr) {
        const partes = horaStr.split(' - ');
        const inicio = partes[0].trim();
        const fin = partes[1] ? partes[1].trim() : inicio;
        
        function tiempoAMinutos(t) {
            const [h, m] = t.split(':').map(Number);
            return h * 60 + m;
        }
        return [tiempoAMinutos(inicio), tiempoAMinutos(fin)];
    }
    
    const [ini1, fin1] = convertirAMinutos(hora1);
    const [ini2, fin2] = convertirAMinutos(hora2);
    return !(fin1 <= ini2 || fin2 <= ini1);
}

function actualizarCreditos() {
    const total = cursosSeleccionados.reduce((sum, c) => sum + c.creditos, 0);
    document.getElementById('labelCreditos').textContent = `Créditos: ${total} | Cursos: ${cursosSeleccionados.length}`;
}

function actualizarHorario() {
    const tbody = document.getElementById('cuerpoHorario');
    tbody.innerHTML = '';
    
    // Crear estructura de horario
    const horario = {};
    dias.forEach(dia => {
        horario[dia] = {};
        horas.forEach(hora => {
            horario[dia][hora] = null;
        });
    });
    
    // Llenar con cursos seleccionados
    cursosSeleccionados.forEach(curso => {
        const dia = curso.dia;
        if (!horario[dia]) return;
        
        const partes = curso.hora.split(' - ');
        if (partes.length !== 2) return;
        
        const horaInicio = partes[0].trim();
        const horaFin = partes[1].trim();
        
        const idxInicio = horas.indexOf(horaInicio);
        const idxFin = horas.indexOf(horaFin);
        
        if (idxInicio === -1 || idxFin === -1) return;
        
        for (let i = idxInicio; i < idxFin && i < horas.length; i++) {
            if (horario[dia][horas[i]] === null) {
                horario[dia][horas[i]] = curso;
            }
        }
    });
    
    // Dibujar tabla
    horas.forEach(hora => {
        const tr = document.createElement('tr');
        const tdHora = document.createElement('td');
        tdHora.textContent = hora;
        tdHora.style.fontWeight = 'bold';
        tdHora.style.background = '#ecf0f1';
        tr.appendChild(tdHora);
        
        dias.forEach(dia => {
            const td = document.createElement('td');
            const curso = horario[dia][hora];
            if (curso) {
                const div = document.createElement('div');
                div.className = 'bloque-curso';
                div.style.background = obtenerColor(curso.nombre);
                div.textContent = curso.nombre.substring(0, 15) + '...';
                td.appendChild(div);
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
    document.getElementById('btnTeoria').className = `btn-teoria ${modo === 'teoria' ? 'activo' : ''}`;
    document.getElementById('btnLaboratorio').className = `btn-laboratorio ${modo === 'laboratorio' ? 'activo' : ''}`;
    actualizarCursos();
}

function cambiarCiclo(direccion) {
    const nuevo = cicloActual + direccion;
    if (nuevo >= 0 && nuevo < ciclos.length) {
        cicloActual = nuevo;
        actualizarCursos();
    }
}

function limpiarHorario() {
    if (cursosSeleccionados.length > 0) {
        cursosSeleccionados = [];
        coloresAsignados = {};
        actualizarCreditos();
        actualizarCursos();
        document.getElementById('labelInfo').textContent = '🗑️ Horario limpiado';
        document.getElementById('labelInfo').style.color = '#e74c3c';
    }
}

function generarAutomatico() {
    const cicloNombre = ciclos[cicloActual];
    const cursos = datos[cicloNombre][modoActual];
    
    if (!cursos || cursos.length === 0) {
        alert('No hay cursos disponibles');
        return;
    }
    
    cursosSeleccionados = [];
    coloresAsignados = {};
    
    // Selección aleatoria simple
    const numCursos = Math.min(5 + Math.floor(Math.random() * 4), cursos.length);
    const seleccionados = [];
    const disponibles = [...cursos];
    
    for (let i = 0; i < numCursos && disponibles.length > 0; i++) {
        const idx = Math.floor(Math.random() * disponibles.length);
        const curso = disponibles.splice(idx, 1)[0];
        
        // Verificar conflicto
        let conflicto = false;
        for (const c of seleccionados) {
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
    actualizarCursos();
    document.getElementById('labelInfo').textContent = `⚡ Generado automáticamente: ${cursosSeleccionados.length} cursos`;
    document.getElementById('labelInfo').style.color = '#2ecc71';
}

function exportarTexto() {
    if (cursosSeleccionados.length === 0) {
        alert('No hay cursos en el horario');
        return;
    }
    
    let texto = '='.repeat(70) + '\n';
    texto += 'MI HORARIO GENERADO - UNMSM\n';
    texto += '='.repeat(70) + '\n\n';
    
    dias.forEach(dia => {
        texto += `\n${dia}:\n`;
        texto += '-'.repeat(50) + '\n';
        const cursosDia = cursosSeleccionados.filter(c => c.dia === dia);
        if (cursosDia.length > 0) {
            cursosDia.forEach(curso => {
                texto += `  ${curso.hora} | ${curso.nombre}\n`;
                texto += `          Sección: ${curso.seccion} | Prof: ${curso.profesor}\n`;
                texto += `          Créditos: ${curso.creditos}\n`;
            });
        } else {
            texto += '  (Sin cursos)\n';
        }
        texto += '\n';
    });
    
    // Descargar archivo
    const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'mi_horario.txt';
    link.click();
    URL.revokeObjectURL(link.href);
}

function toggleModo() {
    document.body.classList.toggle('modo-oscuro');
    const btn = document.getElementById('btnModo');
    if (document.body.classList.contains('modo-oscuro')) {
        btn.textContent = '☀️ Modo Claro';
    } else {
        btn.textContent = '🌙 Modo Oscuro';
    }
}

// ============================================================
// EVENTOS
// ============================================================
document.getElementById('btnAnterior').onclick = () => cambiarCiclo(-1);
document.getElementById('btnSiguiente').onclick = () => cambiarCiclo(1);
document.getElementById('btnTeoria').onclick = () => cambiarModo('teoria');
document.getElementById('btnLaboratorio').onclick = () => cambiarModo('laboratorio');
document.getElementById('btnModo').onclick = toggleModo;

// ============================================================
// INICIALIZAR
// ============================================================
actualizarCursos();