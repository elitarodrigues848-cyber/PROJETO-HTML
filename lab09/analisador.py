import json


def ler_registros(caminho: str) -> list[dict]:
    registros = []

    try:
        with open(caminho, "r", encoding="utf-8") as f:
            for numero, linha in enumerate(f, start=1):
                registro = _parsear_linha(linha.strip(), numero)
                if registro:
                    registros.append(registro)
    except FileNotFoundError:
        print(f'Erro: arquivo "{caminho}" não encontrado.')

    return registros


def _parsear_linha(linha: str, numero: int) -> dict | None:
    try:
        partes = linha.split(":")
        if len(partes) != 2:
            raise ValueError("formato esperado: Nome: nota")

        nome = partes[0].strip()
        nota = float(partes[1].strip())

        if not (0.0 <= nota <= 10.0):
            raise ValueError(f"nota {nota} fora do intervalo 0–10")

        return {"nome": nome, "nota": nota}

    except ValueError as e:
        print(f"Linha {numero} ignorada: {e}")
        return None


def calcular_estatisticas(registros: list[dict]) -> dict:
    notas = [r["nota"] for r in registros]

    media = 0
    maior = notas[0]
    menor = notas[0]

    for n in notas:
        media += n
        if n > maior:
            maior = n
        if n < menor:
            menor = n

    media = media / len(notas)

    return {
        "media": media,
        "maior": maior,
        "menor": menor,
        "total": len(notas),
    }


def classificar_aluno(nota: float) -> str:
    return (
        "Aprovado"
        if nota >= 7.0
        else "Recuperação"
        if nota >= 5.0
        else "Reprovado"
    )


def imprimir_relatorio(registros: list[dict], stats: dict) -> None:
    linha = "=" * 42

    print(linha)
    print("     RELATÓRIO DE NOTAS — TURMA 2026.1")
    print(linha)
    print(f"{'ALUNO':<22} {'NOTA':>5}  STATUS")
    print("-" * 42)

    for r in sorted(registros, key=lambda x: x["nota"], reverse=True):
        print(f"{r['nome']:<22} {r['nota']:>5.1f}  {r['status']}")

    print("-" * 42)
    print(
        f"Média: {stats['media']:.2f}   "
        f"Maior: {stats['maior']:.1f}   "
        f"Menor: {stats['menor']:.1f}"
    )
    print(linha)


def salvar_relatorio(registros: list[dict], stats: dict, destino: str) -> None:
    payload = {
        "turma": "2026.1",
        "estatisticas": stats,
        "alunos": registros,
    }

    with open(destino, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2, sort_keys=True)

    print(f'Relatório salvo em "{destino}".')


if __name__ == "__main__":
    dados = ler_registros("notas.txt")

    for r in dados:
        r["status"] = classificar_aluno(r["nota"])

    stats = calcular_estatisticas(dados)

    imprimir_relatorio(dados, stats)
    salvar_relatorio(dados, stats, "relatorio.json")