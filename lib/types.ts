export interface Medico {
  id: string
  nome: string
  titulo: string
  especialidades: string[]
  valor_consulta: number | null
  convenios: string[]
  foto_url: string | null
  crm: string | null
  agendamento_url: string | null
  ativo: boolean
  ordem: number
}

export interface Exame {
  id: string
  nome: string
  categoria: string
  valor: number | null
  convenios: string[]
  ativo: boolean
}
