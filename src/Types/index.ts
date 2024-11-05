
type Voluntario = {
    id?: number;
    nome: string;
    dataNascimento: Date;
    email: string;
    sexo: string;
    username: string;
    password: string;

};

type AuthUser = {
    id?: number;
    nome: string;
    email: string;
    token: string;
    auth: {
        id: number;
        password: string;
        username: string;
        role: "ADMIN" | "VOLUNTARIO"
    }
}

type Area = {
    id?: number;
    cep: number;
    cidade: string;
    estado: string;
    rua: string;
    descricao: string;
    latitudex: string;
    latitudey: string
}

type Admin = {
    id?: number;
    nome: string;
    email: string;
    username: string;
    password: string;
};

type Partida = {
    id?: number;
    nome: string;
    descricao: string;
    status: "ATIVA" | "ENCERRADA" | "AGENDADA" | "CANCELADA";
    area: Area; 
    idAdmin: number;
}

type Participacao = {
    id?: number;
    idVoluntario: number;
    idPartida: number;
}

type Coleta = {
    id?: number;
    tipoLixo: number;
    quantidade: number;
    idParticipacao: number;
}

type AuthContextProps = {
    isLoggedIn: boolean;
    isLoading: boolean;
    userRole: string | null;
    token: string | null;
    error: string | null;
    userData: AuthUser | null;
    voluntarioData: Voluntario | null;
    adminData: Admin | null;
    partidasAtivas: Partida[];
    partidasEncerradas: Partida[];
    partidasAgendadas: Partida[];
    partidasCanceladas: Partida[];
    participacoes: Participacao[];
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    signUp: (userData: Voluntario) => Promise<void>;
    updateVoluntario: (voluntarioId: number, voluntarioData: Partial<Voluntario>) => Promise<void>;
    getAllMatches: () => Promise<void>;
    entrarNoEvento: (participacaoData: Participacao) => Promise<void>;
    createPartida: (partidaData: { nome: string; descricao: string; areaId: number; voluntarioAdminId: number | undefined }) => Promise<void>;
    getParticipacoes: () => Promise<void>
    iniciarPartida: (partidaId: number, adminToken: string) => Promise<void>;
    finalizarPartida: (partidaId: number, adminToken: string) => Promise<void>;
    registrarColeta: (coletaData: Coleta) => Promise<void>;
  };

export { Area, Voluntario, Admin, Partida, Participacao, Coleta, AuthUser, AuthContextProps };