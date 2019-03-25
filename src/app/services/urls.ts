
let profile = "dev";

export const retornaOferta=profile == "dev" ?"http://localhost:23362/ServiceRestOFertaSugerida.svc/RetornarOfertaCliente":"http://10.81.163.252/WcfOfertasFidelizacionTest/ServiceRestOFertaSugerida.svc/RetornarOfertaCliente";

export const transformarData=profile == "dev" ?"http://localhost:61706/CifrarDescifrarService.svc/Decrypt":"http://10.81.163.252/WcfCifrar/CifrarDescifrarService.svc/Decrypt";

export const transformar_Data=profile == "dev" ?"http://localhost:61706/CifrarDescifrarService.svc/Encrypt":"http://10.81.163.252/WcfCifrar/CifrarDescifrarService.svc/Encrypt";

export const token=profile == "dev" ?"http://localhost:23362/ServiceRestOFertaSugerida.svc/GenerarTokens":"http://10.81.163.252/WcfOfertasFidelizacionTest/ServiceRestOFertaSugerida.svc/GenerarTokens";

export const terminosYCondiciones=profile == "dev" ?"http://localhost:23362/ServiceRestOFertaSugerida.svc/ObtenerTerminosyCondiciones":"http://10.81.163.252/WcfOfertasFidelizacionTest/ServiceRestOFertaSugerida.svc/ObtenerTerminosyCondiciones";

export const plantilla_Robot=profile == "dev" ?"http://localhost:23362/ServiceRestOFertaSugerida.svc/ProgramarActivacionRobot":"http://10.81.163.252/WcfOfertasFidelizacionTest/ServiceRestOFertaSugerida.svc/ProgramarActivacionRobot";

export const registro_Eventos=profile == "dev" ?"http://localhost:23362/ServiceRestOFertaSugerida.svc/RegistrarEvento":"http://10.81.163.252/WcfOfertasFidelizacionTest/ServiceRestOFertaSugerida.svc/RegistrarEvento";
