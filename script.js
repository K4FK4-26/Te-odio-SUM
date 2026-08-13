function convertirCSVaJSON(csvText) {
    // Dividir el CSV en líneas
    var lineas = csvText.split('\n').filter(function(line) { return line.trim() !== ''; });
    var nuevosDatos = {};
    
    // Inicializar todos los ciclos posibles
    var ciclosPosibles = ['Ciclo 2', 'Ciclo 3', 'Ciclo 4', 'Ciclo 5', 'Ciclo 6', 'Ciclo 0'];
    for (var c = 0; c < ciclosPosibles.length; c++) {
        nuevosDatos[ciclosPosibles[c]] = { teoria: [], laboratorio: [] };
    }
    
    var cursosProcesados = 0;
    var errores = [];
    var lineasIgnoradas = 0;
    
    // Mapeo de cursos a su ciclo correcto (para corregir errores de la IA)
    var mapeoCursosACiclo = {
        'HIDRÁULICA APLICADA': 'Ciclo 6',
        'ANÁLISIS ESTRUCTURAL I': 'Ciclo 6',
        'GEOLOGÍA APLICADA A LA INGENIERÍA CIVIL': 'Ciclo 6',
        'DESARROLLO SUSTENTABLE Y RESPONSABILIDAD SOCIAL UNIVERSITARIA': 'Ciclo 6',
        'MODELAMIENTO INFORMÁTICO EN LA CONSTRUCCIÓN (BIM)': 'Ciclo 6',
        'CONSTRUCCIÓN II': 'Ciclo 6',
        'GESTIÓN DE RIESGOS DE DESASTRES Y CAMBIO CLIMÁTICO': 'Ciclo 6',
        'ECONOMIA GENERAL': 'Ciclo 2'
    };
    
    for (var i = 0; i < lineas.length; i++) {
        var lineaLimpia = lineas[i].trim().replace(/\r/g, '');
        if (!lineaLimpia) {
            lineasIgnoradas++;
            continue;
        }
        
        // Dividir por comas para obtener las partes base
        var partesBase = lineaLimpia.split(',');
        
        if (partesBase.length < 10) {
            errores.push('Linea ' + (i + 1) + ': Formato incorrecto (' + partesBase.length + ' columnas)');
            lineasIgnoradas++;
            continue;
        }
        
        try {
            // --- Extraer campos fijos ---
            var ciclo = partesBase[0] || '';
            
            // --- CORREGIR CICLOS BASADO EN EL NOMBRE DEL CURSO ---
            var nombreCurso = partesBase[2] || '';
            // Limpiar el nombre del curso (puede tener comas internas)
            if (nombreCurso.indexOf('"') === 0) {
                nombreCurso = nombreCurso.replace(/^"|"$/g, '');
            }
            
            // Si el curso está en el mapeo, corregir el ciclo
            var nombreCursoLimpio = nombreCurso.trim().toUpperCase();
            for (var clave in mapeoCursosACiclo) {
                if (nombreCursoLimpio.includes(clave) || nombreCursoLimpio === clave) {
                    ciclo = mapeoCursosACiclo[clave];
                    break;
                }
            }
            
            // Si el ciclo sigue sin reconocerse, intentar con el valor original
            if (!ciclo || ciclo === '' || ciclo === ' ') {
                ciclo = partesBase[0] || '';
            }
            
            // Normalizar ciclo
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
                // Si no se reconoce, intentar inferir del nombre del curso
                if (nombreCurso.includes('HIDRÁULICA') || nombreCurso.includes('ANÁLISIS ESTRUCTURAL') || 
                    nombreCurso.includes('GEOLOGÍA APLICADA') || nombreCurso.includes('DESARROLLO SUSTENTABLE') ||
                    nombreCurso.includes('MODELAMIENTO') || nombreCurso.includes('CONSTRUCCIÓN II') ||
                    nombreCurso.includes('GESTIÓN DE RIESGOS')) {
                    ciclo = 'Ciclo 6';
                } else {
                    errores.push('Linea ' + (i + 1) + ': Ciclo no reconocido "' + partesBase[0] + '"');
                    lineasIgnoradas++;
                    continue;
                }
            }
            
            if (!nuevosDatos[ciclo]) {
                nuevosDatos[ciclo] = { teoria: [], laboratorio: [] };
            }
            
            // CRÉDITOS
            var creditos = parseInt(partesBase[1]) || 3;
            if (isNaN(creditos) || creditos < 1) creditos = 3;
            
            // CURSO
            var curso = nombreCurso || 'Curso sin nombre';
            if (curso === '' || curso === ' ') {
                curso = 'Curso sin nombre';
            }
            
            // TIPO
            var tipo = partesBase[3] ? partesBase[3].toUpperCase() : '';
            var tipoFinal = '';
            if (tipo.includes('TEORIA') || tipo.includes('TEORICA') || tipo === 'T') {
                tipoFinal = 'teoria';
            } else if (tipo.includes('LABORATORIO') || tipo.includes('LAB') || tipo === 'L') {
                tipoFinal = 'laboratorio';
            } else {
                if (curso.includes('LAB') || curso.includes('LABORATORIO')) {
                    tipoFinal = 'laboratorio';
                } else {
                    tipoFinal = 'teoria';
                }
            }
            
            // GR (sección)
            var gr = partesBase[5] ? partesBase[5].trim() : '00';
            if (gr === '' || gr === ' ') gr = '00';
            
            // --- EXTRAER DOCENTE ---
            var docente = 'No especificado';
            var dia1 = '';
            var inicio1 = '';
            var final1 = '';
            var dia2 = '';
            var inicio2 = '';
            var final2 = '';
            
            var partesDocente = [];
            var encontradoDia = false;
            var diasValidos = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
            
            for (var j = 6; j < partesBase.length && !encontradoDia; j++) {
                var posibleDia = partesBase[j].trim().toUpperCase();
                if (diasValidos.includes(posibleDia)) {
                    encontradoDia = true;
                    dia1 = posibleDia;
                    
                    if (j + 1 < partesBase.length) {
                        inicio1 = partesBase[j + 1].trim();
                    }
                    if (j + 2 < partesBase.length) {
                        final1 = partesBase[j + 2].trim();
                    }
                    if (j + 3 < partesBase.length) {
                        dia2 = partesBase[j + 3].trim().toUpperCase();
                    }
                    if (j + 4 < partesBase.length) {
                        inicio2 = partesBase[j + 4].trim();
                    }
                    if (j + 5 < partesBase.length) {
                        final2 = partesBase[j + 5].trim();
                    }
                } else {
                    partesDocente.push(partesBase[j]);
                }
            }
            
            if (partesDocente.length > 0) {
                docente = partesDocente.join(', ').trim();
                if (docente === '' || docente === ' ') {
                    docente = 'No especificado';
                }
            }
            
            // Validar que tenemos día y horas
            if (!dia1 || !inicio1 || !final1) {
                errores.push('Linea ' + (i + 1) + ': No se encontraron día/hora válidos');
                lineasIgnoradas++;
                continue;
            }
            
            // Crear curso DÍA 1
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
            
            // Crear curso DÍA 2 (si existe y es diferente)
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
            errores.push('Linea ' + (i + 1) + ': Error - ' + e.message);
            lineasIgnoradas++;
        }
    }
    
    // Eliminar ciclos vacíos
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
