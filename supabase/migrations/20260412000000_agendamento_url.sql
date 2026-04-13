-- Adiciona coluna de agendamento
ALTER TABLE medicos ADD COLUMN IF NOT EXISTS agendamento_url TEXT;

-- Atualiza links de agendamento por nome
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dr-arruda-bastos'   WHERE nome = 'Dr. Arruda Bastos';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dr-costa-campos'    WHERE nome = 'Dr. Costa Campos';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dr-daniel-abrahim'  WHERE nome = 'Dr. Daniel Abrahim';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dr-emerson'         WHERE nome = 'Dr. Emerson Chaves';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dr-heliu'           WHERE nome = 'Dr. Heliu';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dr-iuri-aragao'     WHERE nome = 'Dr. Iuri Aragão';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dr-kristopherson'   WHERE nome = 'Dr. Kristofferson';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dr-luiz-dantas'     WHERE nome = 'Dr. Luiz Dantas';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dr-mairton'         WHERE nome = 'Dr. Mairton Araújo';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dr-rodolfo-teixeira' WHERE nome = 'Dr. Rodolfo Teixeira';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dr-talys-ponte'     WHERE nome = 'Dr. Talys Ponte';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dra-gisella'        WHERE nome = 'Dra. Gisella';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dra-ivia-brilhante' WHERE nome = 'Dra. Ivia Brilhante';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dra-jocelia'        WHERE nome = 'Dra. Jocélia';
UPDATE medicos SET agendamento_url = 'https://grupocostacampos.com/agendar/dra-larissa-freitas' WHERE nome = 'Dra. Larissa Freitas';
