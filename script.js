function convertirCSVaJSON(csvText) {
    // Dividir el CSV en líneas, eliminar líneas vacías
    const lineas = csvText.split('\n').filter(line => line.trim() !== '');
    const nuevosDatos = {};
    
    // Inicializar todos los ciclos posibles
    const ciclosPosibles = ['Ciclo 2', 'Ciclo 3', 'Ciclo 4', 'Ciclo 5', 'Ciclo 6', 'Ciclo 0'];
    ciclosPosibles.forEach(c => {
        nuevosDatos[c] = { teoria: [], laboratorio: [] };
    });
    
    let cursosProcesados = 0;
    let errores = [];
    let lineasIgnoradas = 0;
    
    lineas.forEach((linea, numLinea) => {
        // Limpiar la línea: eliminar espacios al inicio/final, comillas y retornos de carro
        let lineaLimpia = linea.trim().replace(/\r/g, '');
        
        // Si la línea está vacía, ignorar
        if (!lineaLimpia) {
            lineasIgnoradas++;
            return;
        }
        
        // Eliminar comillas al inicio y final si existen
        if (lineaLimpia.startsWith('"') && lineaLimpia.endsWith('"')) {
            lineaLimpia = lineaLimpia.substring(1, lineaLimpia.length - 1);
        }
        
        // Dividir por coma
        let partes = lineaLimpia.split(',');
        
        // Limpiar cada parte (eliminar espacios al inicio/final)
        partes = partes.map(p => p.trim());
        
        // Si la línea tiene menos de 10 columnas, intentar reparar
        if (partes.length < 10) {
            errores.push(`Línea ${numLinea + 1}: Formato incorrecto (${partes.length} columnas) - Línea ignorada`);
            lineasIgnoradas++;
            return;
        }
        
        try {
            // === 1. PROCESAR CICLO ===
            let ciclo = partes[0] || '';
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
                // Si no reconoce el ciclo, intentar inferir de otros campos
                errores.push(`Línea ${numLinea + 1}: Ciclo no reconocido "${partes[0]}" - Línea ignorada`);
                lineasIgnoradas++;
                return;
            }
            
            // Asegurar que el ciclo existe
            if (!nuevosDatos[ciclo]) {
                nuevosDatos[ciclo] = { teoria: [], laboratorio: [] };
            }
            
            // === 2. PROCESAR CRÉDITOS ===
            let creditos = parseInt(partes[1]) || 3;
            if (isNaN(creditos) || creditos < 1) creditos = 3;
            
            // === 3. PROCESAR CURSO ===
            let curso = partes[2] || 'Curso sin nombre';
            if (curso === '' || curso === ' ') {
                curso = 'Curso sin nombre';
            }
            
            // === 4. PROCESAR TIPO ===
            let tipo = partes[3] ? partes[3].toUpperCase() : '';
            let tipoFinal = '';
            if (tipo.includes('TEORIA') || tipo.includes('TEÓRICA') || tipo === 'T' || tipo === 'TEORÍA') {
                tipoFinal = 'teoria';
            } else if (tipo.includes('LABORATORIO') || tipo.includes('LAB') || tipo === 'L' || tipo === 'LAB') {
                tipoFinal = 'laboratorio';
            } else if (tipo.includes('PRACTICA') || tipo.includes('PRÁCTICA')) {
                tipoFinal = 'teoria';
            } else {
                // Si no reconoce el tipo, intentar inferir del nombre
                if (curso.includes('LAB') || curso.includes('LABORATORIO')) {
                    tipoFinal = 'laboratorio';
                } else {
                    tipoFinal = 'teoria';
                }
                errores.push(`Línea ${numLinea + 1}: Tipo no reconocido "${partes[3]}", se asume ${tipoFinal.toUpperCase()}`);
            }
            
            // === 5. PROCESAR GR (grupo/sección) ===
            let gr = partes[5] ? partes[5].trim() : '00';
            if (gr === '' || gr === ' ') gr = '00';
            
            // === 6. PROCESAR DOCENTE ===
            let docente = partes[6] ? partes[6].trim() : 'No especificado';
            if (docente === '' || docente === ' ') docente = 'No especificado';
            
            // === 7. PROCESAR DÍAS Y HORAS ===
            const diasValidos = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
            
            const dia1 = partes[7] ? partes[7].trim().toUpperCase() : '';
            const inicio1 = partes[8] ? partes[8].trim() : '';
            const final1 = partes[9] ? partes[9].trim() : '';
            const dia2 = partes[10] ? partes[10].trim().toUpperCase() : '';
            const inicio2 = partes[11] ? partes[11].trim() : '';
            const final2 = partes[12] ? partes[12].trim() : '';
            
            // Validar día1 (debe existir)
            if (!dia1 || !diasValidos.includes(dia1)) {
                errores.push(`Línea ${numLinea + 1}: Día inválido "${dia1}" - Línea ignorada`);
                lineasIgnoradas++;
                return;
            }
            
            // Validar horas del día 1
            if (!inicio1 || !final1) {
                errores.push(`Línea ${numLinea + 1}: Horas inválidas "${inicio1} - ${final1}" - Línea ignorada`);
                lineasIgnoradas++;
                return;
            }
            
            // === 8. CREAR CURSO DÍA 1 ===
            const cursoObj = {
                nombre: curso,
                seccion: gr,
                profesor: docente,
                creditos: creditos,
                dia: dia1,
                hora: `${inicio1} - ${final1}`
            };
            nuevosDatos[ciclo][tipoFinal].push(cursoObj);
            cursosProcesados++;
            
            // === 9. CREAR CURSO DÍA 2 (si existe) ===
            if (dia2 && diasValidos.includes(dia2) && inicio2 && final2) {
                // Verificar que no sea el mismo día y hora que el día 1
                if (dia2 !== dia1 || inicio2 !== inicio1 || final2 !== final1) {
                    const cursoObj2 = {
                        nombre: curso,
                        seccion: gr,
                        profesor: docente,
                        creditos: creditos,
                        dia: dia2,
                        hora: `${inicio2} - ${final2}`
                    };
                    nuevosDatos[ciclo][tipoFinal].push(cursoObj2);
                    cursosProcesados++;
                }
            }
            
        } catch (e) {
            errores.push(`Línea ${numLinea + 1}: Error al procesar - ${e.message}`);
            lineasIgnoradas++;
        }
    });
    
    // Eliminar ciclos vacíos
    for (const ciclo in nuevosDatos) {
        if (nuevosDatos[ciclo].teoria.length === 0 && nuevosDatos[ciclo].laboratorio.length === 0) {
            delete nuevosDatos[ciclo];
        }
    }
    
    // Mostrar resumen de errores
    if (errores.length > 0) {
        console.warn('⚠️ Errores en CSV:', errores);
        if (cursosProcesados === 0) {
            throw new Error(`No se pudo procesar ningún curso.\nErrores:\n${errores.slice(0, 5).join('\n')}${errores.length > 5 ? `\n... y ${errores.length - 5} más` : ''}`);
        }
        // Mostrar advertencia con el número de cursos procesados
        const mensaje = `⚠️ ${cursosProcesados} cursos procesados, ${lineasIgnoradas} líneas ignoradas. Revisa la consola para más detalles.`;
        mostrarMensajePanel(mensaje, 'info');
    }
    
    // Si no se procesó ningún curso, lanzar error
    if (cursosProcesados === 0) {
        throw new Error('No se pudo procesar ningún curso del CSV. Verifica el formato.');
    }
    
    return nuevosDatos;
}
