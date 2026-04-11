-- =============================================
-- Clínica Costa Campos — Schema Inicial
-- =============================================

CREATE TABLE IF NOT EXISTS medicos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  titulo TEXT NOT NULL DEFAULT 'Médico',
  especialidades TEXT[] DEFAULT '{}',
  valor_consulta DECIMAL(10,2),
  convenios TEXT[] DEFAULT '{}',
  foto_url TEXT,
  crm TEXT,
  ativo BOOLEAN DEFAULT true,
  ordem INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS exames (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  categoria TEXT NOT NULL,
  valor DECIMAL(10,2),
  convenios TEXT[] DEFAULT '{}',
  ativo BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE medicos ENABLE ROW LEVEL SECURITY;
ALTER TABLE exames ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read medicos" ON medicos FOR SELECT USING (ativo = true);
CREATE POLICY "Public read exames" ON exames FOR SELECT USING (ativo = true);

-- =============================================
-- Seed: Médicos
-- =============================================

INSERT INTO medicos (nome, titulo, especialidades, valor_consulta, convenios, ordem) VALUES
('Dr. Costa Campos', 'Médico', ARRAY['Ginecologista', 'Obstetra', 'Clínico Geral'], 260.00, ARRAY['Particular', 'Unimed'], 1),
('Dra. Jocélia', 'Médica', ARRAY['Ginecologista', 'Obstetra', 'Pré-natal', 'Papanicolau'], 300.00, ARRAY['Particular', 'Unimed'], 2),
('Dr. Arruda Bastos', 'Médico', ARRAY['Mastologista', 'Oncologista'], 270.00, ARRAY['Particular'], 3),
('Dra. Cynthia Regia', 'Médica', ARRAY['Psiquiatra'], 500.00, ARRAY['Particular'], 4),
('Dr. Rodolfo Teixeira', 'Médico', ARRAY['Ortopedista'], 300.00, ARRAY['Particular'], 5),
('Dr. Mairton Araújo', 'Médico', ARRAY['Cirurgião Vascular', 'Angiologista'], 400.00, ARRAY['Particular', 'Unimed'], 6),
('Dr. Emerson Chaves', 'Médico', ARRAY['Pediatra'], 270.00, ARRAY['Particular', 'Unimed'], 7),
('Dra. Taís Pelúcio', 'Psicóloga', ARRAY['Psicóloga'], 150.00, ARRAY['Particular'], 8),
('Dra. Tayná Moura', 'Nutricionista', ARRAY['Nutricionista'], 230.00, ARRAY['Particular'], 9),
('Dra. Maria Dasdores', 'Nutricionista', ARRAY['Nutricionista'], 200.00, ARRAY['Particular'], 10),
('Dr. Kristofferson', 'Médico', ARRAY['Reumatologista'], 290.00, ARRAY['Particular'], 11),
('Dra. Jéssica de Castro', 'Médica', ARRAY['Otorrinolaringologista'], 400.00, ARRAY['Particular'], 12),
('Dra. Amelba', 'Médica', ARRAY['Neurologista'], 450.00, ARRAY['Particular', 'Unimed'], 13),
('Dr. Diego Rafhael', 'Médico', ARRAY['Neuropediatra', 'Neurologista'], 600.00, ARRAY['Particular'], 14),
('Dra. Ivia Brilhante', 'Médica', ARRAY['Gastroenterologista', 'Hepatologista'], 350.00, ARRAY['Particular'], 15),
('Dr. Cláudio', 'Fonoaudiólogo', ARRAY['Fonoaudiólogo'], 100.00, ARRAY['Particular'], 16),
('Dra. Débora', 'Psicóloga', ARRAY['Psicóloga'], 150.00, ARRAY['Particular'], 17),
('Dr. Heliu', 'Médico', ARRAY['Proctologista'], 265.00, ARRAY['Particular'], 18),
('Dr. Iuri Aragão', 'Médico', ARRAY['Urologista'], 240.00, ARRAY['Particular'], 19),
('Dr. Daniel Abrahim', 'Médico', ARRAY['Cardiologista'], 350.00, ARRAY['Particular'], 20),
('Dra. Leila', 'Médica', ARRAY['Clínico Geral'], 350.00, ARRAY['Particular', 'Unimed'], 21),
('Dr. Matheus Moura', 'Médico', ARRAY[]::TEXT[], NULL, ARRAY['Particular'], 22),
('Dra. Gisella', 'Médica', ARRAY['Pediatra'], 280.00, ARRAY['Particular'], 23),
('Dr. Luiz Dantas', 'Médico', ARRAY['Otorrinolaringologista'], 400.00, ARRAY['Particular'], 24),
('Dr. Talys Ponte', 'Médico', ARRAY['Urologista'], 400.00, ARRAY['Particular'], 25),
('Dra. Larissa Freitas', 'Médica', ARRAY['Dermatologista'], 300.00, ARRAY['Particular'], 26),
('Dra. Fabrícia', 'Médica', ARRAY['Reumatologista'], 290.00, ARRAY['Particular'], 27);

-- =============================================
-- Seed: Exames — Ultrassom
-- =============================================

INSERT INTO exames (nome, categoria, valor, convenios) VALUES
('Ultrassom Abdominal', 'Ultrassom', 150.00, ARRAY['Particular', 'Unimed']),
('Ultrassom Abdominal Superior', 'Ultrassom', 150.00, ARRAY['Particular', 'Unimed']),
('Ultrassom de Parede Abdominal', 'Ultrassom', 150.00, ARRAY['Particular', 'Unimed']),
('Ultrassom de Tireoide', 'Ultrassom', 150.00, ARRAY['Particular', 'Unimed']),
('Ultrassom de Região Inguinal', 'Ultrassom', 150.00, ARRAY['Particular', 'Unimed']),
('Ultrassom de Próstata (Via Abdominal)', 'Ultrassom', 150.00, ARRAY['Particular', 'Unimed']),
('Ultrassom de Aparelho Urinário', 'Ultrassom', 150.00, ARRAY['Particular', 'Unimed']),
('Ultrassom de Bolsa Escrotal (Testículos)', 'Ultrassom', 150.00, ARRAY['Particular', 'Unimed']),
('Ultrassom Obstétrico (Sem Doppler)', 'Ultrassom', 140.00, ARRAY['Particular', 'Unimed']),
('Ultrassom Obstétrico com Translucência Nucal', 'Ultrassom', 200.00, ARRAY['Particular', 'Unimed']),
('Ultrassom Pélvico', 'Ultrassom', 140.00, ARRAY['Particular', 'Unimed']),
('Ultrassom Transvaginal', 'Ultrassom', 150.00, ARRAY['Particular', 'Unimed']),
('Ultrassom de Partes Moles', 'Ultrassom', 150.00, ARRAY['Particular', 'Unimed']),
('Ultrassom de Axilas', 'Ultrassom', 150.00, ARRAY['Particular', 'Unimed']),
('Ultrassom de Mamas', 'Ultrassom', 150.00, ARRAY['Particular', 'Unimed']),
('Ultrassom de Carótidas', 'Ultrassom', 350.00, ARRAY['Particular', 'Unimed']),
('Ultrassom Doppler Colorido de Vasos Cervicais', 'Ultrassom', 350.00, ARRAY['Particular']);

-- =============================================
-- Seed: Exames — Tomografia (sem contraste)
-- =============================================

INSERT INTO exames (nome, categoria, valor, convenios) VALUES
('Tomografia de Crânio', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Mastóides', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Seios da Face', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Órbitas', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Tórax', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Ombro (Esquerdo ou Direito)', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Membros Superiores', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Membros Inferiores', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']),
('Tomografia Abdominal Total', 'Tomografia', 570.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Bacia', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Coluna Cervical', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Coluna Torácica', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Coluna Lombo-Sacral', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Cóccix', 'Tomografia', 280.00, ARRAY['Particular', 'Unimed']);

-- =============================================
-- Seed: Exames — Tomografia (com contraste)
-- =============================================

INSERT INTO exames (nome, categoria, valor, convenios) VALUES
('Tomografia de Crânio com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Mastóides com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Seios da Face com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Órbitas com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Tórax com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Ombro (Esquerdo ou Direito) com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Membros Superiores com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Membros Inferiores com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']),
('Tomografia Abdominal Total com Contraste', 'Tomografia', 800.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Bacia com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Coluna Cervical com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Coluna Torácica com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Coluna Lombo-Sacral com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']),
('Tomografia de Cóccix com Contraste', 'Tomografia', 590.00, ARRAY['Particular', 'Unimed']);

-- =============================================
-- Seed: Exames — Raio X
-- =============================================

INSERT INTO exames (nome, categoria, valor, convenios) VALUES
('Raio X de Tórax', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Ombro (Esquerdo ou Direito)', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Punho (Esquerdo ou Direito)', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Braço (Esquerdo ou Direito)', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Antebraço (Esquerdo ou Direito)', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X Idade Óssea', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Coluna Cervical', 'Raio X', 110.00, ARRAY['Particular', 'Unimed']),
('Raio X de Coluna Torácica', 'Raio X', 110.00, ARRAY['Particular', 'Unimed']),
('Raio X de Coluna Lombar', 'Raio X', 110.00, ARRAY['Particular', 'Unimed']),
('Raio X de Coluna Lombo-Sacral', 'Raio X', 110.00, ARRAY['Particular', 'Unimed']),
('Raio X de Coluna Vertebral', 'Raio X', 140.00, ARRAY['Particular', 'Unimed']),
('Raio X de Crânio', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Seios da Face', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Cavum', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Cotovelo (Esquerdo ou Direito)', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Joelho (Esquerdo ou Direito)', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Joelho com Carga', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Pé (Direito ou Esquerdo)', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Calcâneo (Direito ou Esquerdo)', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X Escanometria', 'Raio X', 180.00, ARRAY['Particular', 'Unimed']),
('Raio X de Membro Inferior (Adulto)', 'Raio X', 200.00, ARRAY['Particular', 'Unimed']),
('Raio X de Membro Inferior (Criança)', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Abdômen', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Clavícula', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Bacia', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Quadril', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Articulações Sacro Ilíacas', 'Raio X', 110.00, ARRAY['Particular', 'Unimed']),
('Raio X de Coluna Dorso Lombar', 'Raio X', 110.00, ARRAY['Particular', 'Unimed']),
('Raio X de Costela', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Mão (Esquerdo ou Direito)', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Fêmur', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']),
('Raio X de Perna (Esquerdo ou Direito)', 'Raio X', 100.00, ARRAY['Particular', 'Unimed']);

-- =============================================
-- Seed: Exames — Cardiologia
-- =============================================

INSERT INTO exames (nome, categoria, valor, convenios) VALUES
('Eletrocardiograma (ECG)', 'Cardiologia', 70.00, ARRAY['Particular', 'Unimed']),
('Holter 24h', 'Cardiologia', 160.00, ARRAY['Particular', 'Unimed']),
('MAPA (Pressão Arterial)', 'Cardiologia', 160.00, ARRAY['Particular', 'Unimed']),
('Eletroencefalograma (EEG)', 'Cardiologia', 210.00, ARRAY['Particular', 'Unimed']),
('Ecodoppler', 'Cardiologia', 350.00, ARRAY['Particular']),
('Ecocardiograma com Strain', 'Cardiologia', 400.00, ARRAY['Particular']),
('Ecocardiograma Infantil', 'Cardiologia', 600.00, ARRAY['Particular']),
('Doppler de Carótidas', 'Cardiologia', 350.00, ARRAY['Particular']),
('Doppler Colorido Arterial e Venoso de Membro Superior e Inferior (cada membro)', 'Cardiologia', 250.00, ARRAY['Particular', 'Unimed']);

-- =============================================
-- Seed: Exames — Outros
-- =============================================

INSERT INTO exames (nome, categoria, valor, convenios) VALUES
('Papanicolau (Dr. Costa Campos)', 'Outros', 320.00, ARRAY['Particular']),
('Papanicolau (Dra. Jocélia)', 'Outros', 250.00, ARRAY['Particular', 'Unimed']),
('Mamografia', 'Outros', 165.00, ARRAY['Particular', 'Unimed']),
('Densitometria Óssea', 'Outros', 150.00, ARRAY['Particular', 'Unimed']),
('Espirometria (Teste Alérgico)', 'Outros', 300.00, ARRAY['Particular']),
('Prick Test', 'Outros', 350.00, ARRAY['Particular']),
('Nasofibroscopia', 'Outros', 400.00, ARRAY['Particular']),
('Nasolaringoscopia', 'Outros', 400.00, ARRAY['Particular']),
('Laudo de Sanidade Mental', 'Outros', 300.00, ARRAY['Particular']),
('Biópsia de Próstata', 'Outros', 1800.00, ARRAY['Particular']),
('Inserção de DIU', 'Outros', 650.00, ARRAY['Particular', 'Unimed']),
('Endoscopia', 'Outros', NULL, ARRAY['Particular']),
('Colonoscopia', 'Outros', NULL, ARRAY['Particular']);
