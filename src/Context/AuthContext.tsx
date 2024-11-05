import axios from "axios";
import React, { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { AuthUser, Voluntario, Partida, Admin, Area, Coleta, Participacao } from "@/Types";

import authClient from "@/Services/api";

import { AuthContextProps } from "@/Types";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<AuthUser | null>(null);
  const [voluntarioData, setVoluntarioData] = useState<Voluntario | null>(null);
  const [adminData, setAdminData] = useState<Admin | null>(null);
  const [partidasAtivas, setPartidasAtivas] = useState<Partida[]>([]);
  const [partidasEncerradas, setPartidasEncerradas] = useState<Partida[]>([]);
  const [partidasAgendadas, setPartidasAgendadas] = useState<Partida[]>([]);
  const [partidasCanceladas, setPartidasCanceladas] = useState<Partida[]>([]);
  const [participacoes, setParticipacoes] = useState<Participacao[]>([]);
  const { getItem, setItem, removeItem } = useAsyncStorage("token");

  const login = async (username: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await authClient.post("/login", { username, password });
      const token = response.data.token;
      const role = response.data.role;
      console.log("Token:", token)
      console.log("Role:", role)

      if (token) {
        await setItem(token);
        setToken(token);
        setIsLoggedIn(true);
        setUserRole(role);
      } else {
        throw new Error("Token de autenticação não encontrado nos cabeçalhos da resposta");
      }
    } catch (err: any) {
      console.error("Erro de autenticação:", err.message);
      setError(err.message || "Problema de autenticação");
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (userData: Voluntario) => {
    try {
      setIsLoading(true);
      setError(null);
      await authClient.post("/voluntarios", userData);
      console.log("Cadastro bem-sucedido!");
    } catch (err: any) {
      console.error("Erro ao cadastrar usuário:", err);
      setError(err.message || "Erro ao cadastrar usuário");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await removeItem();
    setIsLoggedIn(false);
    setUserRole(null);
    setToken(null);
  };

  const loadData = async () => {
    const storedToken = await getItem();
    if (storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken);
    }
  };

  const updateVoluntario = async (voluntarioId: number, voluntarioData: Partial<Voluntario>) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await authClient.put(
        `/voluntarios/${voluntarioId}`,
        {
          ...voluntarioData,
          email: voluntarioData.email,
        },
        {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          },
        }
      );
      setVoluntarioData(response.data);
      console.log("Email do voluntário atualizado:", response.data.email);
    } catch (err: any) {
      console.error("Erro ao atualizar email do voluntário:", err.message);
      setError(err.message || "Erro ao atualizar email do voluntário");
    } finally {
      setIsLoading(false);
    }
  };

  const getAllMatches = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await authClient.get("/partidas");
      const responseData = response.data;

      if (responseData.content && Array.isArray(responseData.content)) {
        const activeMatches = responseData.content.filter((match: Partida) => match.status === "ATIVA");
        const closedMatches = responseData.content.filter((match: Partida) => match.status === "ENCERRADA");
        const scheduledMatches = responseData.content.filter((match: Partida) => match.status === "AGENDADA");
        const canceledMatches = responseData.content.filter((match: Partida) => match.status === "CANCELADA");
        setPartidasAtivas(activeMatches);
        setPartidasEncerradas(closedMatches);
        setPartidasAgendadas(scheduledMatches);
        setPartidasCanceladas(canceledMatches);
      } else {
        throw new Error("Resposta do servidor não contém uma array de partidas");
      }
    } catch (err: any) {
      console.error("Erro ao buscar partidas:", err.message);
      setError(err.message || "Erro ao buscar partidas");
    } finally {
      setIsLoading(false);
    }
  };

  const getParticipacoes = async () => {
    try {
      const response = await authClient.get("/participacoes", {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
      });
      setParticipacoes(response.data);
      console.log("Participações obtidas com sucesso:", response.data);
    } catch (err: any) {
    }
  };

  useEffect(() => {
    getParticipacoes();
  }, []);


  // ENTRAR PARTICIPACOES
  const entrarNoEvento = async (participacao: Participacao) => {
    try {
      setIsLoading(true);
      setError(null);
      await authClient.post(
        "/participacoes",
        participacao,
        {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("Entrou no evento com sucesso!");
    } catch (err: any) {
      console.error("Erro ao entrar no evento:", err.message);
      setError(err.message || "Erro ao entrar no evento");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllMatches();
  }, []);

  // GET AREAS


  // INICIAR PARTIDA
  const iniciarPartida = async (partidaId: number, token: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const partidaData = {
        status: "ATIVA"
      };

      await authClient.patch(`/partidas/encerrar-ativar/${partidaId}`, partidaData, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        },
      });

      console.log("Partida iniciada com sucesso!");
      await getAllMatches();
    } catch (err: any) {
      console.error("Erro ao iniciar partida:", err.message);
      setError(err.message || "Erro ao iniciar partida");
    } finally {
      setIsLoading(false);
    }
  };

  // FINALIZAR PARTIDA
  const finalizarPartida = async (partidaId: number, token: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const partidaData = {
        status: "ENCERRADA" 
      };

      await authClient.patch(`/partidas/encerrar-ativar/${partidaId}`, partidaData, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        },
      });

      console.log("Partida finalizada com sucesso!");
      await getAllMatches();
    } catch (err: any) {
      console.error("Erro ao finalizar partida:", err.message);
      setError(err.message || "Erro ao finalizar partida");
    } finally {
      setIsLoading(false);
    }
  };


  // CRIAR EVENTO
  const createPartida = async (partidaData: { nome: string; descricao: string; areaId: number; voluntarioAdminId: number | undefined }) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await authClient.post("/partidas", partidaData, {
        headers: {
          'Authorization': token,
          "Content-Type": "application/json",
        },
      });

      console.log("Partida criada com sucesso:", response.data);

    } catch (err: any) {
      console.error("Erro ao criar a partida:", err.message);
      setError(err.message || "Erro ao criar a partida");
    } finally {
      setIsLoading(false);
    }
  };


  const registrarColeta = async (coletaData: Coleta) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await authClient.post("/coletas", coletaData, {
        headers: {
          'Authorization': token,
          "Content-Type": "application/json",
        },
      });

      console.log("Coleta registrada com sucesso:", response.data);
      // Adicione qualquer outra lógica necessária após o registro da coleta

    } catch (err: any) {
      console.error("Erro ao registrar a coleta:", err.message);
      setError(err.message || "Erro ao registrar a coleta");
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          setIsLoading(true);

          const responseLogin = await authClient.get("/auth", {
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json'
            },
          });

          const userData = responseLogin.data;
          setUserData(userData);
          console.log("Dados de login:", responseLogin.data);

          const voluntarioId = userData.id;
          console.log("role:", userData.auth.role)
          console.log("Id usuario:", userData.auth.id)
          console.log("id voluntario:", userData.id)
          if (voluntarioId) {
            if (userData.auth.role === "VOLUNTARIO") {
              const responseVoluntario = await authClient.get(`/voluntarios/${voluntarioId}`, {
                headers: {
                  'Authorization': token,
                  'Content-Type': 'application/json'
                },
              });

              setVoluntarioData(responseVoluntario.data);
              console.log("Dados do voluntário:", responseVoluntario.data);
            } else if (userData.auth.role === "ADMIN") {
              const responseAdmin = await authClient.get(`/voluntarios-admin/${voluntarioId}`, {
                headers: {
                  'Authorization': token,
                  'Content-Type': 'application/json'
                },
              });
              setVoluntarioData(responseAdmin.data);
              console.log("Dados do admin:", responseAdmin.data);
            }

          } else {
            throw new Error("ID do usuario não encontrado nos dados de autenticação");
          }

        } catch (err: any) {
          console.error("Erro ao buscar dados do usuário:", err.message);
          setError(err.message || "Erro ao buscar dados do usuário");
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchUserData();
  }, [token]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, signUp, logout, isLoading, error, userRole, createPartida, participacoes, getParticipacoes, token, iniciarPartida, finalizarPartida, registrarColeta, userData, voluntarioData, adminData, updateVoluntario, partidasAtivas, partidasEncerradas, partidasAgendadas, partidasCanceladas, getAllMatches, entrarNoEvento }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
