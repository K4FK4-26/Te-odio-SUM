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
    
    for (var i = 0; i < lineas.length; i++) {
        var lineaLimpia = lineas[i].trim().replace(/\r/g, '');
        if (!lineaLimpia) {
            lineasIgnoradas++;
            continue;
        }
        
        // --- NUEVO: Procesar CSV con un método más robusto ---
        // Primero, dividir por comas para obtener las partes base
        var partesBase = lineaLimpia.split(',');
        
        // Si tiene menos de 10 partes, ignorar
        if (partesBase.length < 10) {
            errores.push('Linea ' + (i + 1) + ': Formato incorrecto (' + partesBase.length + ' columnas)');
            lineasIgnoradas++;
            continue;
        }
        
        try {
            // --- Extraer campos fijos (que no tienen comas internas) ---
            // CICLO (columna 0)
            var ciclo = partesBase[0] || '';
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
                errores.push('Linea ' + (i + 1) + ': Ciclo no reconocido "' + partesBase[0] + '"');
                lineasIgnoradas++;
                continue;
            }
            
            if (!nuevosDatos[ciclo]) {
                nuevosDatos[ciclo] = { teoria: [], laboratorio: [] };
            }
            
            // CRÉDITOS (columna 1)
            var creditos = parseInt(partesBase[1]) || 3;
            if (isNaN(creditos) || creditos < 1) creditos = 3;
            
            // CURSO (columna 2) - puede tener comas, pero generalmente no
            var curso = partesBase[2] || 'Curso sin nombre';
            if (curso === '' || curso === ' ') {
                curso = 'Curso sin nombre';
            }
            
            // TIPO (columna 3)
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
            
            // HRS (columna 4) - ignoramos, siempre 0
            
            // GR (columna 5) - este campo es clave para encontrar el profesor
            var gr = partesBase[5] ? partesBase[5].trim() : '00';
            if (gr === '' || gr === ' ') gr = '00';
            
            // --- EXTRAER DOCENTE (campos entre GR y DIA1) ---
            // El profesor empieza en la columna 6 y termina antes del DIA1 (columna 7)
            // Pero el profesor puede tener comas, así que necesitamos reconstruirlo
            
            // Buscar dónde está el DIA1 (debe ser un día de la semana válido)
            var dia1 = '';
            var inicio1 = '';
            var final1 = '';
            var dia2 = '';
            var inicio2 = '';
            var final2 = '';
            var docente = 'No especificado';
            
            // Recorrer desde la columna 6 hasta encontrar un día válido
            var partesDocente = [];
            var encontradoDia = false;
            
            for (var j = 6; j < partesBase.length && !encontradoDia; j++) {
                var posibleDia = partesBase[j].trim().toUpperCase();
                // Verificar si es un día válido
                var diasValidos = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
                if (diasValidos.includes(posibleDia)) {
                    // Es un día válido, entonces el profesor termina en la columna anterior
                    encontradoDia = true;
                    dia1 = posibleDia;
                    
                    // Las siguientes columnas son INICIO1 y FINAL1
                    if (j + 1 < partesBase.length) {
                        inicio1 = partesBase[j + 1].trim();
                    }
                    if (j + 2 < partesBase.length) {
                        final1 = partesBase[j + 2].trim();
                    }
                    
                    // DIA2, INICIO2, FINAL2
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
                    // No es un día, es parte del nombre del profesor
                    partesDocente.push(partesBase[j]);
                }
            }
            
            // Reconstruir el nombre del profesor
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
            if (dia2 && inicio2 && final2) {
                var diasValidos2 = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
                if (diasValidos2.includes(dia2) && (dia2 !== dia1 || inicio2 !== inicio1 || final2 !== final1)) {
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
