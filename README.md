# Proejto EPUSP + Vacivida

<h2 align="center">
	Telas da aplicação:
</h2>
<p align="center">
  <img src="img/planejamento_paginasV2.png" width="100%" />
  <img src="img/paleta.png" width="100%" />
</p>

<p> #2CAB7C #A9DECA #2B7930 #85517F #902CAB </p>


## Desenvolvimento

### Subir dados para banco pelo csv

```bash
curl -X POST https://engsoft-production-nmcardoso.cloud.okteto.net/import/csv/unidade_saude -F file=@data/datasus_unidades.csv -H "Content-Type: multipart/form-data"
```
