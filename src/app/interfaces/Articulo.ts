

export interface Articulo {
    id:                number;
    clave:             string;
    nombre:            string;
    familiaId:         number;
    familia:           null;
    cuenta:            string;
    tipoArticulo:      number;
    unidadIdBase:      number;
    unidadBase:        Unidad;
    subUnidades:       SubUnidades[];
    sucursales:        null;
    detalles:          null;
    precios:           null;
    gravaIva:          boolean;
    tieneFSR:          boolean;
    tieneMI:           boolean;
    tieneHER:          boolean;
    estadoBD:          number;
    fechaCreacion:     Date;
    fechaUltModif:     null;
    usuarioIdCreo:     number;
    usuarioCreo:       null;
    usuarioIdUltModif: null;
    usuarioUltModif:   null;
    ip:                null;
}
export interface SubUnidades {
    id:          number;
    unidad_Id:   number;
    unidad:      Unidad;
    factor:      number;
    estadoBD:    number;
    articulo_Id: number;
}

export interface Unidad {
    id:       number;
    clave:    string;
    nombre:   string;
    estadoBD: number;
}