
let profile = "dev";

export const retornaOferta=profile == "dev" ?"http://localhost:23362/ServiceRestOFertaSugerida.svc/RetornarOfertaCliente":"http://10.81.163.252/WcfOfertasFidelizacionTest/ServiceRestOFertaSugerida.svc/RetornarOfertaCliente";

export const transformarData=profile == "dev" ?"http://localhost:23362/CifrarDescifrarService.svc/Decrypt":"http://10.81.163.252/WcfCifrar/CifrarDescifrarService.svc/Decrypt";

export const token=profile == "dev" ?"http://localhost:23362/ServiceRestOFertaSugerida.svc/GenerarTokens":"http://10.81.163.252/WcfOfertasFidelizacionTest/ServiceRestOFertaSugerida.svc/GenerarTokens";