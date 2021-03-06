var NameDocumentType = (function() {

    return function NameDocumentType(code_document_type) {
        var name = '';
        switch (code_document_type) {
            case '1':
                name = "DNI";
                break;
            case '6':
                name = "RUC";
                break;
            case '4':
                name = "CARNET EXT.";
                break;
            case '7':
                name = "PASAPORTE";
                break;
            case '0':
                name = "OTROS";
                break;


            default:
                name = '';
                break;
        }

        return name;
    };

})();

var CodeInvoice = (function() {

    return function CodeInvoice(code_invoice) {
        var code = '';
        switch (code_invoice) {
            case '01':
                code = "FT";
                break;
            case '03':
                code = "BT";
                break;
            case '07':
                code = "NC";
                break;
            case '08':
                code = "ND";
                break;
            case '09':
                code = "GR";
                break;
            case '31':
                code = "GRT";
                break;
            case 'NE':
                code = "NE";
                break;
            case 'NS':
                code = "NS";
                break;
            case 'NV':
                code = "NV";
                break;
            case '00':
                code = "OT";
                break;
            case 'NR':
                code = "NR";
                break;
            case 'CS':
                code = "CS";
                break;
            case 'GC':
                code = "GC";
                break;
            case 'AT':
                code = "AT";
                break;
            case 'NA':
                code = "NA";
                break;
            case 'NP':
                code = "NP";
                break;
            case 'GD':
                code = "GD";
                break;
            default:
                code = '';
                break;
        }

        return code;
    };

})();

var NameInvoice = (function() {

    return function NameInvoice(code_invoice) {
        var name = '';
        switch (code_invoice) {
            case '00':
                name = "Otros";
                break;
            case '01':
                name = "Factura";
                break;
            case '03':
                name = "Boleta de Venta";
                break;
            case '04':
                name = "Liquidaci??n de Compra";
                break;
            case '07':
                name = "Nota de Cr??dito";
                break;
            case '08':
                name = "Nota de D??bito";
                break;
            case '09':
                name = "Gu??a Rem Rem";
                break;
            case '12':
                name = "Ticket o cinta emitido por m??quina registradora";
                break;
            case '21':
                name = "Conocimiento de embarque por el servicio de transporte de carga mar??tima";
                break;
            case '22':
                name = "Comprobante por Operaciones No Habituales";
                break;
            case '31':
                name = "Gu??a de Remisi??n - Transportista";
                break;
            case '50':
                name = "Declaraci??n ??nica de Aduanas - Importaci??n definitiva";
                break;
            case '52':
                name = "Despacho Simplificado - Importaci??n Simplificada";
                break;
            case '91':
                name = "Comprobante de No Domiciliado";
                break;
            case 'GC':
                name = "Gu??a de Credito";
                break;
            case 'NR':
                name = "Nota de Requerimiento";
                break;
            case 'AT':
                name = "Asisencia T??cnica";
                break;
            case 'CT':
                name = "Cotizaci??n ";
                break;
            case 'PF':
                name = "Proforma";
                break;
            case 'NS':
                name = "Nota de Salida";
                break;
            case 'NE':
                name = "Nota de Entrada";
                break;
            case 'NV':
                name = "Nota de Venta";
                break;
            case 'NP':
                name = "Nota de Pago";
                break;
            case 'NA':
                name = "Nota de Almacen";
                break;
            case 'NS':
                name = "Nota de Servicio";
                break;
            case 'GD':
                name = "Gu??a de Despacho";
                break;
            default:
                name = '';
                break;
        }

        return toLowerCase(name);
    };

})();



var NameOperationType = (function() {

    return function NameOperationType(code_operation_type) {
        var name = '';
        switch (code_operation_type) {
            case '01':
                name = "Venta Nacional";
                break;
            case '02':
                name = "Compra Nacional";
                break;
            case '03':
                name = "Consignaci??n Recibida";
                break;
            case '04':
                name = "Consignaci??n Entregada";
                break;
            case '05':
                name = "Devoluci??n Recibida";
                break;
            case '06':
                name = "Devoluci??n Entregada";
                break;
            case '07':
                name = "Bonificaci??n";
                break;
            case '08':
                name = "Premio";
                break;
            case '09':
                name = "Donaci??n";
                break;
            case '10':
                name = "Salida A Producci??n";
                break;
            case '11':
                name = "Transferencia Entre Almacenes ";
                break;
            case '12':
                name = "Retiro";
                break;
            case '13':
                name = "Mermas";
                break;
            case '14':
                name = "Desmedros";
                break;
            case '15':
                name = "Destrucci??n";
                break;
            case '16':
                name = "Saldo Inicial";
                break;
            case '17':
                name = "Exportaci??n";
                break;
            case '18':
                name = "Importaci??n";
                break;
            case '19':
                name = "Entrada De Producci??n";
                break;
            case '20':
                name = "Entrada Por Devoluci??n De Producci??n";
                break;
            case '21':
                name = "Transferencia Entre Almacenes";
                break;
            case '22':
                name = "Entrada Por Identificaci??n Erronea";
                break;
            case '23':
                name = "Salida Por Identificaci??n Erronea";
                break;
            case '24':
                name = "Entrada Por Devoluci??n Del Cliente";
                break;
            case '25':
                name = "Salida Por Devoluci??n Al Proveedor";
                break;
            case '26':
                name = "Entrada Para Servicio De Producci??n";
                break;
            case '27':
                name = "Salida Por Servicio De Producci??n";
                break;
            case '28':
                name = "Ajuste Por Diferencia De Inventario";
                break;
            case '29':
                name = "Entrada De Bienes En Pr??stamo";
                break;
            case '30':
                name = "Salida De Bienes En Pr??stamo";
                break;
            case '31':
                name = "Entrada De Bienes En Custodia";
                break;
            case '32':
                name = "Salida De Bienes En Custodia";
                break;
            case '33':
                name = "Muestras M??dicas";
                break;
            case '34':
                name = "Publicidad";
                break;
            case '35':
                name = "Gastos De Representaci??n";
                break;
            case '36':
                name = "Retiro Para Entrega A Trabajadores";
                break;
            case '37':
                name = "Retiro Por Convenio Colectivo";
                break;
            case '38':
                name = "Retiro Por Sustituci??n De Bien Siniestrado";
                break;
            case '91':
                name = "Otros 1";
                break;
            case '92':
                name = "Otros 2";
                break;
            case '93':
                name = "Otros 3 ";
                break;
            case '94':
                name = "Otros 4";
                break;
            case '99':
                name = "Otros";
                break;

            default:
                name = '';
                break;
        }

        return (name);
    };
})();


var NameMethodPayment = (function() {

    return function NameMethodPayment(code_method_payment) {
        var name = '';
        switch (code_method_payment) {
            case '001':
                name = 'DEP??SITO EN CUENTA';
                break;
            case '003':
                name = 'TRANSFERENCIA DE FONDOS';
                break;
            case '004':
                name = 'ORDEN DE PAGO';
                break;
            case '005':
                name = 'TARJETA DE D??BITO';
                break;
            case '006':
                name = 'TARJETA DE CR??DITO';
                break;
            case '007':
                name = 'CHEQUES CON LA CL??USULA DE "NO NEGOCIABLE"';
                break;
            case '008':
                name = 'EFECTIVO';
                break;
            case '009':
                name = 'EFECTIVO, EN LOS DEM??S CASOS';
                break;
            case '101':
                name = 'TRANSFERENCIAS - COMERCIO EXTERIOR';
                break;
            case '102':
                name = 'CHEQUES BANCARIOS  - COMERCIO EXTERIOR';
                break;
            default:
                name = '';
                break;
        }

        return (name);
    };
})();


var NameReasonNCD = (function() {

    return function NameReasonNCD(type_invoice, code) {
        var name = '';

        if (type_invoice == "07") {
            switch (code) {
                case '01':
                    name = "Anulaci??n de la operaci??n";
                    break;
                case '02':
                    name = "Anulaci??n por error en el RUC";
                    break;
                case '03':
                    name = "Correcci??n por error en la descripci??n";
                    break;
                case '04':
                    name = "Descuento global";
                    break;
                case '05':
                    name = "Descuento por ??tem";
                    break;
                case '06':
                    name = "Devoluci??n total";
                    break;
                case '07':
                    name = "Devoluci??n por ??tem";
                    break;
                case '08':
                    name = "Bonificaci??n";
                    break;
                case '09':
                    name = "Disminuci??n en el valor";
                    break;
                case '10':
                    name = "Otros Conceptos ";
                    break;
                default:
                    name = '';
                    break;
            }
            return name;
        }
        if (type_invoice == "08") {
            switch (code) {
                case '01':
                    name = "Intereses por mora";
                    break;
                case '02':
                    name = "Aumento en el valor";
                    break;
                case '03':
                    name = "Penalidades/ otros conceptos";
                    break;
                default:
                    name = '';
                    break;
            }
            return name;
        }
    };
})();


export default { NameDocumentType, CodeInvoice, NameInvoice, NameOperationType, NameMethodPayment, NameReasonNCD }