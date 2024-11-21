import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoAgendamento } from "@/interface/TipoAgendamento";

export async function GET() {
    try {
      const filePath = process.cwd() + '/src/app/api-local/db.json';
      const file = await fs.readFile(filePath, 'utf-8');
      const agendamentos = JSON.parse(file);

      if (!Array.isArray(agendamentos)) {
        throw new Error("O conteúdo de db.json não é um array.");
      }
  
      return NextResponse.json(agendamentos);
    } catch {
      return NextResponse.json(
        { status: 500 }
      );
    }
  }
  

export async function POST(request: Request) {
    try {
        const filePath = process.cwd() + '/src/app/api-local/db.json';
        const file = await fs.readFile(filePath, 'utf-8');
        const agendamentos: TipoAgendamento[] = JSON.parse(file);
        const { dataPedido, dataEntrega, tempoUso, qtd } = await request.json();

        if (!dataPedido || !dataEntrega || !tempoUso || !qtd) {
            return NextResponse.json(
                { error: "Todos os campos (dataPedido, dataEntrega, tempoUso, qtd) são obrigatórios." },
                { status: 400 }
            );
        }

        const ultimoId = agendamentos.length > 0 
            ? parseInt(agendamentos[agendamentos.length - 1].id.toString()) 
            : 0;
        const novoId = ultimoId + 1;

        const novoAgendamento: TipoAgendamento = {
            id: novoId,
            dataPedido,
            dataEntrega,
            tempoUso,
            qtd,
        };

        agendamentos.push(novoAgendamento);

        await fs.writeFile(filePath, JSON.stringify(agendamentos, null, 2));

        return NextResponse.json(novoAgendamento, { status: 201 });
    } catch {
        return NextResponse.json(
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
      const filePath = process.cwd() + '/src/app/api-local/db.json';
      const file = await fs.readFile(filePath, 'utf-8');
      const agendamentos: TipoAgendamento[] = JSON.parse(file);
      const url = new URL(request.url);
      const id = url.searchParams.get("id");
  
      if (!id) {
        return NextResponse.json({ error: "ID do agendamento não fornecido" }, { status: 400 });
      }
  
      const updatedAgendamentos = agendamentos.filter(agendamento => agendamento.id !== parseInt(id));
      
      if (updatedAgendamentos.length === agendamentos.length) {
        return NextResponse.json({ error: "Agendamento não encontrado" }, { status: 404 });
      }
      
      await fs.writeFile(filePath, JSON.stringify(updatedAgendamentos, null, 2));
  
      return NextResponse.json({ message: "Agendamento excluído com sucesso" }, { status: 200 });
    } catch {
      return NextResponse.json({ error: "Erro ao excluir o agendamento" }, { status: 500 });
    }
  }